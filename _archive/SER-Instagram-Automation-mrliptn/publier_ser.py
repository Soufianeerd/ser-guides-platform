#!/usr/bin/env python3
import argparse, json, os, random, time
from datetime import datetime, timezone
from pathlib import Path
import requests
from dotenv import load_dotenv
import generer_ser

load_dotenv()
ROOT=Path(__file__).parent
NICHE=ROOT/'niches'/'mrliptn'
CONTENT=NICHE/'contenus.json'
HIST=NICHE/'historique.json'
API_VERSION=os.getenv('META_API_VERSION','v26.0')
API=f'https://graph.facebook.com/{API_VERSION}'


def load_json(p,default):
    return json.loads(p.read_text(encoding='utf-8')) if p.exists() else default

def choose_post():
    posts=load_json(CONTENT,{'posts':[]})['posts']
    hist=load_json(HIST,{'posts':[]})
    used={x['id'] for x in hist.get('posts',[]) if x.get('id')}
    avail=[p for p in posts if p['id'] not in used]
    if not avail:
        hist={'posts':[]}; avail=posts
    if not avail: raise SystemExit('Aucun contenu dans contenus.json')
    return random.choice(avail), hist

def save_hist(hist,post,permalink):
    hist.setdefault('posts',[]).append({'id':post['id'],'date':datetime.now(timezone.utc).isoformat(),'permalink':permalink})
    HIST.write_text(json.dumps(hist,ensure_ascii=False,indent=2),encoding='utf-8')

def host_image(path):
    import cloudinary, cloudinary.uploader
    cloudinary.config(cloud_name=os.environ['CLOUDINARY_CLOUD_NAME'],api_key=os.environ['CLOUDINARY_API_KEY'],api_secret=os.environ['CLOUDINARY_API_SECRET'],secure=True)
    r=cloudinary.uploader.upload(str(path),folder='ser-guides/mrliptn',public_id=f"{path.stem}_{datetime.now():%Y%m%d%H%M%S%f}",format='jpg',resource_type='image')
    url=r['secure_url']
    for _ in range(8):
        try:
            rr=requests.get(url,timeout=15,stream=True)
            if rr.ok and rr.headers.get('content-type','').startswith('image/'): return url
        except requests.RequestException: pass
        time.sleep(2)
    raise RuntimeError('Image Cloudinary non accessible: '+url)

def post_api(url,data,retries=4):
    last=None
    for i in range(retries):
        r=requests.post(url,data=data,timeout=60)
        if r.ok: return r.json()
        last=f'{r.status_code} — {r.text}'
        time.sleep(8*(i+1))
    raise RuntimeError(last)

def wait_container(cid,token):
    for _ in range(30):
        r=requests.get(f'{API}/{cid}',params={'fields':'status_code,status','access_token':token},timeout=30).json()
        s=r.get('status_code')
        if s=='FINISHED': return
        if s in ('ERROR','EXPIRED'): raise RuntimeError(f'Conteneur {cid}: {r}')
        time.sleep(4)
    raise TimeoutError(f'Conteneur {cid} non prêt')

def quota_remaining(ig_id,token):
    try:
        r=requests.get(f'{API}/{ig_id}/content_publishing_limit',params={'fields':'quota_usage,config','access_token':token},timeout=30).json()['data'][0]
        used=int(r.get('quota_usage',0)); cfg=r.get('config') or {}; total=int(cfg.get('quota_total',50))
        return max(0,total-used), total
    except Exception:
        return None,None

def publish_carousel(ig_id,token,urls,caption):
    child=[]
    for u in urls:
        x=post_api(f'{API}/{ig_id}/media',{'image_url':u,'is_carousel_item':'true','access_token':token})
        child.append(x['id'])
    for cid in child: wait_container(cid,token)
    parent=post_api(f'{API}/{ig_id}/media',{'media_type':'CAROUSEL','children':','.join(child),'caption':caption,'access_token':token})
    wait_container(parent['id'],token)
    pub=post_api(f'{API}/{ig_id}/media_publish',{'creation_id':parent['id'],'access_token':token})
    info=requests.get(f"{API}/{pub['id']}",params={'fields':'permalink','access_token':token},timeout=30).json()
    return info.get('permalink',str(pub['id']))

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--dry-run',action='store_true'); a=ap.parse_args()
    post,hist=choose_post()
    out=NICHE/'sortie'; slides=generer_ser.creer_post(post,out); caption=generer_ser.construire_legende(post)
    print('Contenu:',post['id'],post['hook']); print('Slides:',*[str(x) for x in slides],sep='\n- '); print('\n--- LÉGENDE ---\n'+caption)
    if a.dry_run:
        print('\nDRY RUN: rien publié.'); return
    ig_id=os.environ.get('IG_USER_ID_MRLIPTN'); token=os.environ.get('IG_TOKEN_MRLIPTN')
    if not ig_id or not token: raise SystemExit('Secrets manquants: IG_USER_ID_MRLIPTN / IG_TOKEN_MRLIPTN')
    remaining,total=quota_remaining(ig_id,token)
    if remaining is not None: print(f'Quota Meta: {remaining}/{total} restant')
    if remaining==0: raise SystemExit('Quota de publication atteint')
    urls=[host_image(p) for p in slides]
    permalink=publish_carousel(ig_id,token,urls,caption)
    print('Publié:',permalink); save_hist(hist,post,permalink)

if __name__=='__main__': main()
