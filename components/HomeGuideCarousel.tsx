'use client';

import {useRef} from 'react';
import {guides,plannedGuides,type Locale} from '../data/guides';

export default function HomeGuideCarousel({locale}:{locale:Locale}){
 const ref=useRef<HTMLDivElement>(null);
 const fr=locale==='fr';
 const scroll=(dir:number)=>ref.current?.scrollBy({left:dir*420,behavior:'smooth'});

 const liveCards=guides.map(g=>({
   number:g.number,
   title:g.title[locale],
   subtitle:g.description[locale],
   live:true,
   href:'/'+locale+'/guides/'+g.slug,
   cover:g.deck?.[locale]?.[0]??g.deck?.fr?.[0]??'',
   price:g.price
 }));
 const remaining=Math.max(0,5-liveCards.length);
 const plannedCards=plannedGuides.slice(0,remaining).map(g=>({
   number:g.number,
   title:fr?g.title:g.titleEn,
   subtitle:fr?'Guide pratique SER · bientôt disponible':'Practical SER guide · coming soon',
   live:false,
   href:'/'+locale+'/guides',
   cover:'',
   price:''
 }));
 const cards=[...liveCards,...plannedCards];

 return <div className="homeCarouselWrap">
  <button className="carouselNav prev" aria-label={fr?'Guides précédents':'Previous guides'} onClick={()=>scroll(-1)}>‹</button>
  <div className="homeCarousel" ref={ref}>
   {cards.map((c,i)=><a className={'homeGuideCard '+(c.live?'live':'planned tone'+(i%4))} href={c.href} key={c.number}>
    {c.live&&c.cover?<img src={c.cover} alt={c.title}/>:<div className="plannedVisual"><span>SER<br/><small>GUIDE {c.number}</small></span><div className="plannedScene"><i></i><i></i><i></i></div></div>}
    <div className="cardOverlay"><small>SER GUIDE {c.number}</small><h3>{c.title}</h3><p>{c.subtitle}</p><span>{c.live?c.price:fr?'Bientôt disponible':'Coming soon'}</span></div>
   </a>)}
  </div>
  <button className="carouselNav next" aria-label={fr?'Guides suivants':'Next guides'} onClick={()=>scroll(1)}>›</button>
 </div>
}
