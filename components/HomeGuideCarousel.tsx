'use client';

import {useRef} from 'react';
import {plannedGuides,type Locale} from '../data/guides';

export default function HomeGuideCarousel({locale}:{locale:Locale}){
  const ref=useRef<HTMLDivElement>(null);
  const fr=locale==='fr';
  const scroll=(dir:number)=>ref.current?.scrollBy({left:dir*420,behavior:'smooth'});
  const cards=[
    {number:'01',title:fr?'Micro-entreprise 2026':'French Micro-business 2026',subtitle:fr?'Le guide interactif pour déclarer, optimiser et développer votre activité.':'The interactive guide to start, optimize and grow your activity.',live:true,href:'/'+locale+'/guides/micro-entreprise-2026',cover:'/guides/micro-entreprise-2026/fr/01-hook.png'},
    ...plannedGuides.slice(0,4).map(g=>({number:g.number,title:fr?g.title:g.titleEn,subtitle:fr?'Guide pratique SER · bientôt disponible':'Practical SER guide · coming soon',live:false,href:'/'+locale+'/guides',cover:''}))
  ];
  return <div className="homeCarouselWrap">
    <button className="carouselNav prev" aria-label={fr?'Guides précédents':'Previous guides'} onClick={()=>scroll(-1)}>‹</button>
    <div className="homeCarousel" ref={ref}>
      {cards.map((c,i)=><a className={'homeGuideCard '+(c.live?'live':'planned tone'+i)} href={c.href} key={c.number}>
        {c.live?<img src={c.cover} alt={c.title}/>:<div className="plannedVisual"><span>SER<br/><small>GUIDE {c.number}</small></span><div className="plannedScene"><i></i><i></i><i></i></div></div>}
        <div className="cardOverlay"><small>SER GUIDE {c.number}</small><h3>{c.title}</h3><p>{c.subtitle}</p><span>{c.live?'12,99 €':fr?'Bientôt disponible':'Coming soon'}</span></div>
      </a>)}
    </div>
    <button className="carouselNav next" aria-label={fr?'Guides suivants':'Next guides'} onClick={()=>scroll(1)}>›</button>
  </div>
}