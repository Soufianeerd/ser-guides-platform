'use client';

import {useEffect,useState} from 'react';

const slides=[
  {src:'/guides/micro-entreprise-2026/fr/01-hook.png',alt:'Micro-entreprise 2026 — les erreurs qui coûtent cher'},
  {src:'/guides/micro-entreprise-2026/fr/02-sources.png',alt:'Micro-entreprise 2026 — vérifier les sources officielles'},
  {src:'/guides/micro-entreprise-2026/fr/03-guide.png',alt:'SER Guide 01 — Micro-entreprise 2026'}
];

export default function GuideDeck({compact=false}:{compact?:boolean}){
 const [active,setActive]=useState(0);
 useEffect(()=>{const id=setInterval(()=>setActive(x=>(x+1)%slides.length),6500);return()=>clearInterval(id)},[]);
 const go=(n:number)=>setActive((n+slides.length)%slides.length);
 return <div className={compact?'guideDeck compactDeck':'guideDeck'}>
   <div className="deckStage">
    <img src={slides[active].src} alt={slides[active].alt}/>
    <button className="deckArrow deckPrev" onClick={()=>go(active-1)} aria-label="Visuel précédent">‹</button>
    <button className="deckArrow deckNext" onClick={()=>go(active+1)} aria-label="Visuel suivant">›</button>
    <span className="deckCount">{active+1} / {slides.length}</span>
   </div>
 </div>
}