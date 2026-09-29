'use client';

import {useMemo,useState} from 'react';
import {guides,niches,plannedGuides,type Locale} from '../data/guides';

export default function LibraryExplorer({locale}:{locale:Locale}){
 const fr=locale==='fr';
 const [query,setQuery]=useState('');
 const [category,setCategory]=useState('all');
 const q=query.trim().toLowerCase();

 const live=useMemo(()=>guides.filter(g=>{
   const text=[g.title[locale],g.description[locale],g.category[locale],g.slug].join(' ').toLowerCase();
   return (category==='all'||g.categorySlug===category)&&(!q||text.includes(q));
 }),[category,locale,q]);

 const planned=useMemo(()=>plannedGuides.filter(g=>{
   const title=fr?g.title:g.titleEn;
   const text=(title+' '+g.category).toLowerCase();
   return (category==='all'||g.category===category)&&(!q||text.includes(q));
 }),[category,fr,q]);

 return <section className="libraryExplorer">
  <div className="libraryTools">
   <label><span>{fr?'Rechercher un guide':'Search guides'}</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={fr?'Ex. Shopify, fiscalité, Vinted…':'E.g. Shopify, taxes, Vinted…'}/></label>
   <select value={category} onChange={e=>setCategory(e.target.value)}><option value="all">{fr?'Toutes les catégories':'All categories'}</option>{niches.map(n=><option key={n.slug} value={n.slug}>{n[locale]}</option>)}</select>
  </div>

  <div className="catalogCards full">
   {live.map(g=>{
     const cover=g.deck?.[locale]?.[0]??g.deck?.fr?.[0];
     return <a className="guidePoster live" href={'/'+locale+'/guides/'+g.slug} key={g.number}>
      {cover?<img src={cover} alt={g.title[locale]}/>:<div className="plannedVisual"><span>SER<br/><small>GUIDE {g.number}</small></span><div className="plannedScene"><i></i><i></i><i></i></div></div>}
      <div><span>SER GUIDE {g.number}</span><b>{g.title[locale]}</b><strong>{g.price}</strong></div>
     </a>
   })}
   {planned.map((g,i)=><article className={'guidePoster placeholder p'+(i%7)} key={g.number}>
    <span>SER GUIDE {g.number}</span>
    <div><small>{fr?'EN PRÉPARATION':'IN PREPARATION'}</small><b>{fr?g.title:g.titleEn}</b><p>{fr?'Guide pratique · édition SER':'Practical SER guide'}</p></div>
   </article>)}
  </div>

  {live.length===0&&planned.length===0&&<div className="emptyLibrary">{fr?'Aucun guide ne correspond à cette recherche pour le moment.':'No guide matches this search yet.'}</div>}
 </section>
}
