'use client';

import {useEffect,useState} from 'react';

export default function GuideDeck({
  slides,
  title,
  compact=false
}:{slides:string[];title:string;compact?:boolean}){
 const items=slides.filter(Boolean);
 const [active,setActive]=useState(0);

 useEffect(()=>{
   if(items.length<2)return;
   const id=setInterval(()=>setActive(x=>(x+1)%items.length),6500);
   return()=>clearInterval(id);
 },[items.length]);

 useEffect(()=>{
   if(active>=items.length)setActive(0);
 },[active,items.length]);

 const go=(n:number)=>{
   if(!items.length)return;
   setActive((n+items.length)%items.length);
 };

 return <div className={compact?'guideDeck compactDeck':'guideDeck'}>
   <div className="deckStage">
    {items.length
      ? <img src={items[active]} alt={`${title} — visuel ${active+1}`}/>
      : <div style={{aspectRatio:'1122 / 1402',display:'grid',placeItems:'center',padding:'32px',textAlign:'center',background:'linear-gradient(145deg,#0d2941,#44647a)',color:'#fff'}}>
          <div><strong style={{display:'block',fontSize:'13px',letterSpacing:'.16em'}}>SER GUIDES</strong><span style={{display:'block',fontSize:'30px',fontWeight:800,lineHeight:1.05,marginTop:'18px'}}>{title}</span></div>
        </div>}
    {items.length>1&&<>
      <button className="deckArrow deckPrev" onClick={()=>go(active-1)} aria-label="Visuel précédent">‹</button>
      <button className="deckArrow deckNext" onClick={()=>go(active+1)} aria-label="Visuel suivant">›</button>
      <span className="deckCount">{active+1} / {items.length}</span>
    </>}
   </div>
 </div>
}
