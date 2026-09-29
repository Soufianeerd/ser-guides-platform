import GuideDeck from '../../../../components/GuideDeck';
import {guides,type Locale} from '../../../../data/guides';
import {getDictionary} from '../../../../data/dictionaries';
import {notFound} from 'next/navigation';

export default async function Guide({params}:{params:Promise<{locale:Locale;slug:string}>}){
 const {locale,slug}=await params;
 const g=guides.find(x=>x.slug===slug);
 if(!g)notFound();
 const d=getDictionary(locale);
 const fr=locale==='fr';
 const slides=g.deck?.[locale]??g.deck?.fr??[];

 return <main>
  <section className="productHero">
   <div className="productMedia"><GuideDeck slides={slides} title={g.title[locale]}/></div>
   <div className="productCopy">
    <div className="eyebrow">SER Guide {g.number} · {g.category[locale]}</div>
    <h1>{g.title[locale]}</h1>
    <p className="lead">{g.description[locale]}</p>
    <div className="productFacts"><span>{fr?'Édition':'Edition'} {g.edition}</span><span>{d.product.digital}</span><span>{d.product.delivery}</span></div>
    <div className="purchaseBox">
     <div><small>{d.product.price}</small><strong>{g.price}</strong></div>
     {g.checkout?<a className="serButton" href={g.checkout}>{d.product.buy}</a>:<span className="muted">{fr?'Bientôt disponible':'Coming soon'}</span>}
    </div>
    <p className="muted">{d.product.secure}</p>
   </div>
  </section>
  {slug==='micro-entreprise-2026'&&<section className="guideEcosystem">
   <div><span className="serLabel">{fr?'ALLER PLUS LOIN':'GO FURTHER'}</span><h2>{fr?'Du guide à votre tableau de bord fiscal.':'From the guide to your tax dashboard.'}</h2><p>{fr?'Les acheteurs du Guide 01 pourront bénéficier de 2 € de réduction mensuelle sur les formules éligibles du futur Optimisateur fiscal SER.':'Guide 01 buyers will be eligible for a €2 monthly discount on eligible SER Tax Optimizer plans.'}</p></div>
   <a className="quietLink" href={'/'+locale+'/applications/optimisateur-fiscal'}>{fr?'Découvrir le projet →':'Discover the project →'}</a>
  </section>}
 </main>
}
