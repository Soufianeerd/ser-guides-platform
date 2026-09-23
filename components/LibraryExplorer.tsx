'use client';

import {useMemo,useState} from 'react';
import {guides,niches,plannedGuides,type Locale} from '../data/guides';

export default function LibraryExplorer({locale}:{locale:Locale}){
 const fr=locale==='fr'; const [query,setQuery]=useState(''); const [category,setCategory]=useState('all');
 const planned=useMemo(()=>plannedGuides.filter(g=>{
   const title=fr?g.title:g.titleEn;
   const text=(title+' '+g.category).toLowerCase();
   return (category==='all'||g.category===category)&&text.includes(query.toLowerCase());
 }),[query,category,fr]);
 return <section className="libraryExplorer">
  <div className="libraryTools"><label><span>{fr?'Rechercher un guide':'Search guides'}</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={fr?'Ex. Shopify, fiscalité, Vinted…':'E.g. Shopify, taxes, Vinted…'}/></label><select value={category} onChange={e=>setCategory(e.target.value)}><option value="all">{fr?'Toutes les catégories':'All categories'}</option>{niches.map(n=><option key={n.slug} value={n.slug}>{n[locale]}</option>)}</select></div>
  <div className="catalogCards full">
   {(category==='all'||category==='administratif-fiscal')&&(!query||guides[0].title[locale].toLowerCase().includes(query.toLowerCase())||'micro entreprise fiscalité'.includes(query.toLowerCase()))&&<a className="guidePoster live" href={'/'+locale+'/guides/'+guides[0].slug}><img src={guides[0].deck!.fr[0]} alt={guides[0].title[locale]}/><div><span>SER GUIDE 01</span><b>{guides[0].title[locale]}</b><strong>{guides[0].price}</strong></div></a>}
   {planned.map((g,i)=><article className={'guidePoster placeholder p'+(i%7)} key={g.number}><span>SER GUIDE {g.number}</span><div><small>{fr?'EN PRÉPARATION':'IN PREPARATION'}</small><b>{fr?g.title:g.titleEn}</b><p>{fr?'Guide pratique · édition SER':'Practical SER guide'}</p></div></article>)}
  </div>
  {planned.length===0&&<div className="emptyLibrary">{fr?'Aucun guide ne correspond à cette recherche pour le moment.':'No guide matches this search yet.'}</div>}
 </section>
}