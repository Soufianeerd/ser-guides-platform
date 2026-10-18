'use client';

import {useMemo,useState} from 'react';
import {guides,niches,plannedGuides,type Locale} from '../data/guides';

const categories:Record<string,string>={
 '01':'administratif-fiscal','02':'ecommerce-social','03':'ecommerce-social','04':'revente-seconde-main'
};

export default function LibraryExplorer({locale}:{locale:Locale}){
 const fr=locale==='fr';
 const [query,setQuery]=useState('');
 const [category,setCategory]=useState('all');
 const term=query.toLocaleLowerCase(locale).trim();
 const available=useMemo(()=>guides.filter(g=>
  g.available && (category==='all'||categories[g.number]===category) &&
  [g.title[locale],g.description[locale],g.category[locale]].join(' ').toLocaleLowerCase(locale).includes(term)
 ),[category,locale,term]);
 const planned=useMemo(()=>plannedGuides.filter(g=>
  (category==='all'||g.category===category) &&
  [fr?g.title:g.titleEn,g.category].join(' ').toLocaleLowerCase(locale).includes(term)
 ),[category,locale,term,fr]);
 return <section className="libraryExplorer">
  <div className="libraryTools">
   <label><span>{fr?'Rechercher un guide':'Search guides'}</span>
   <input value={query} onChange={e=>setQuery(e.target.value)} placeholder={fr?'Ex. Shopify, fiscalité, Vinted…':'E.g. Shopify, taxes, Vinted…'}/></label>
   <select value={category} onChange={e=>setCategory(e.target.value)}>
    <option value="all">{fr?'Toutes les catégories':'All categories'}</option>
    {niches.map(n=><option key={n.slug} value={n.slug}>{n[locale]}</option>)}
   </select>
  </div>
  <div className="catalogCards full">
   {available.map(g=><a className="guidePoster live" key={g.slug} href={'/'+locale+'/guides/'+g.slug}>
    <div className="realCover">
     <span>SER GUIDES · {g.number}</span>
     <div><small>{g.category[locale]}</small><h3>{g.title[locale]}</h3></div>
     <strong>{g.price}</strong>
    </div>
    <div><span>SER GUIDE {g.number} · {fr?'DISPONIBLE':'AVAILABLE'}</span>
     <b>{g.title[locale]}</b><p>{g.description[locale]}</p><strong>{g.price}</strong></div>
   </a>)}
   {planned.map((g,i)=><article className={'guidePoster placeholder p'+(i%7)} key={g.number}>
    <span>SER GUIDE {g.number}</span><div><small>{fr?'EN PRÉPARATION':'IN PREPARATION'}</small>
    <b>{fr?g.title:g.titleEn}</b><p>{fr?'Guide pratique · édition SER':'Practical SER guide'}</p></div>
   </article>)}
  </div>
  {available.length===0&&planned.length===0&&<div className="emptyLibrary">
   {fr?'Aucun guide ne correspond à cette recherche pour le moment.':'No guide matches this search yet.'}
  </div>}
 </section>
}