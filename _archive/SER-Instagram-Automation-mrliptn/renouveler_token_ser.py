#!/usr/bin/env python3
import base64, os, requests
from nacl import encoding, public

API_VERSION=os.getenv('META_API_VERSION','v26.0')
API=f'https://graph.facebook.com/{API_VERSION}'
REPO=os.environ.get('GITHUB_REPOSITORY','lemcontactpro-ai/insta-auto')
SECRET_NAME='IG_TOKEN_MRLIPTN'

def encrypt(pub_b64,value):
    key=public.PublicKey(pub_b64.encode(),encoding.Base64Encoder()); box=public.SealedBox(key)
    return base64.b64encode(box.encrypt(value.encode())).decode()

def update_secret(pat,value):
    h={'Authorization':f'Bearer {pat}','Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}
    k=requests.get(f'https://api.github.com/repos/{REPO}/actions/secrets/public-key',headers=h,timeout=30); k.raise_for_status(); k=k.json()
    r=requests.put(f'https://api.github.com/repos/{REPO}/actions/secrets/{SECRET_NAME}',headers=h,json={'encrypted_value':encrypt(k['key'],value),'key_id':k['key_id']},timeout=30); r.raise_for_status()

def main():
    app_id=os.environ['META_APP_ID']; app_secret=os.environ['META_APP_SECRET']; current=os.environ[SECRET_NAME]; pat=os.environ['GH_PAT_SECRETS']
    r=requests.get(f'{API}/oauth/access_token',params={'grant_type':'fb_exchange_token','client_id':app_id,'client_secret':app_secret,'fb_exchange_token':current},timeout=30); r.raise_for_status()
    update_secret(pat,r.json()['access_token']); print('Jeton MRLIPTN renouvelé et secret GitHub mis à jour.')
if __name__=='__main__': main()
