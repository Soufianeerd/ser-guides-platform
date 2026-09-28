#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import textwrap

W,H=1080,1350
NAVY=(15,23,42)
SLATE=(71,85,105)
CYAN=(8,145,178)
ICE=(248,250,252)
WHITE=(255,255,255)
MUTED=(226,232,240)

FONT_CANDIDATES=[
    '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
    '/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
]
FONT_BOLD_CANDIDATES=[
    '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf',
    '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
]

def _font(size,bold=False):
    cands=FONT_BOLD_CANDIDATES if bold else FONT_CANDIDATES
    for p in cands:
        if Path(p).exists(): return ImageFont.truetype(p,size)
    return ImageFont.load_default()

def _wrap(draw,text,font,max_width):
    words=text.split()
    lines=[]; cur=''
    for w in words:
        test=(cur+' '+w).strip()
        if draw.textbbox((0,0),test,font=font)[2] <= max_width:
            cur=test
        else:
            if cur: lines.append(cur)
            cur=w
    if cur: lines.append(cur)
    return lines

def _text(draw,text,x,y,font,fill,max_width,spacing=14):
    for line in _wrap(draw,text,font,max_width):
        draw.text((x,y),line,font=font,fill=fill)
        y += draw.textbbox((0,0),line,font=font)[3] + spacing
    return y

def _base(kicker, index, total):
    im=Image.new('RGB',(W,H),ICE)
    d=ImageDraw.Draw(im)
    d.rectangle((0,0,W,18),fill=CYAN)
    d.text((72,54),'SER GUIDES',font=_font(28,True),fill=NAVY)
    d.text((W-220,58),f'{index}/{total}',font=_font(22,True),fill=SLATE)
    d.rounded_rectangle((72,118,430,166),radius=24,fill=(224,242,254))
    d.text((94,130),kicker.upper(),font=_font(20,True),fill=CYAN)
    return im,d

def slide_hook(post, index=1,total=3):
    im,d=_base(post.get('kicker','MICRO-ENTREPRISE 2026'),index,total)
    y=260
    y=_text(d,post['hook'],72,y,_font(70,True),NAVY,936,22)
    d.rounded_rectangle((72,1040,1008,1190),radius=28,fill=NAVY)
    _text(d,post.get('subhook','À vérifier avant de cliquer sur “déclarer”.'),110,1082,_font(30,True),WHITE,860,10)
    d.text((72,1262),'@mrliptn  •  SER Guide 01',font=_font(22),fill=SLATE)
    return im

def slide_value(post,index=2,total=3):
    im,d=_base('À FAIRE',index,total)
    y=245
    y=_text(d,post['title'],72,y,_font(54,True),NAVY,936,16)+30
    for i,b in enumerate(post['bullets'],1):
        d.rounded_rectangle((72,y,138,y+66),radius=18,fill=CYAN)
        d.text((95,y+14),str(i),font=_font(28,True),fill=WHITE)
        y2=_text(d,b,172,y+4,_font(31,True),NAVY,820,10)
        y=max(y+92,y2+18)
    src=post.get('source_label','Sources officielles : Urssaf / impots.gouv.fr / France Travail')
    d.line((72,1178,1008,1178),fill=MUTED,width=2)
    _text(d,src,72,1210,_font(20),SLATE,936,8)
    return im

def slide_cta(post,index=3,total=3):
    im,d=_base('GUIDE INTERACTIF',index,total)
    y=280
    y=_text(d,'Tu veux faire les choses dans le bon ordre ?',72,y,_font(62,True),NAVY,936,20)+24
    y=_text(d,'SER Guide 01 te donne un parcours simple selon ta situation : aides, choix fiscaux, URSSAF, impôts et checklist.',72,y,_font(32),SLATE,900,12)+48
    d.rounded_rectangle((72,y,1008,y+170),radius=32,fill=NAVY)
    d.text((108,y+34),'SER GUIDE 01',font=_font(24,True),fill=CYAN)
    d.text((108,y+79),'Micro-entreprise 2026',font=_font(38,True),fill=WHITE)
    d.text((108,y+129),'Lien en bio',font=_font(26,True),fill=(186,230,253))
    d.text((72,1262),'@mrliptn  •  Guide web interactif',font=_font(22),fill=SLATE)
    return im

def creer_post(post,dossier):
    dossier=Path(dossier); dossier.mkdir(parents=True,exist_ok=True)
    ims=[slide_hook(post,1,3),slide_value(post,2,3),slide_cta(post,3,3)]
    out=[]
    for i,im in enumerate(ims,1):
        p=dossier/f'slide{i}.jpg'; im.save(p,'JPEG',quality=94,optimize=True); out.append(p)
    return out

def construire_legende(post):
    tags=post.get('hashtags','#microentreprise #autoentrepreneur #entrepreneur #urssaf')
    c=post.get('caption') or post['hook']+'\n\n'+'\n'.join('• '+b for b in post['bullets'])
    return f"{c}\n\n📘 SER Guide 01 — Micro-entreprise 2026\n🔗 Guide complet : lien en bio\n\n{tags}"
