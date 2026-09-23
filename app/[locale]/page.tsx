import HomeGuideCarousel from '../../components/HomeGuideCarousel';
import {niches,type Locale} from '../../data/guides';

export default async function LocaleHome({params}:{params:Promise<{locale:Locale}>}){
 const {locale}=await params; const fr=locale==='fr';
 return <main>
  <section className="premiumHero">
    <div className="heroBackdrop" aria-hidden="true">
      <div className="deskBooks"><b>{fr?'Des projets':'Projects'}</b><b>{fr?'Plus de liberté':'More freedom'}</b><b>{fr?'Une vie plus simple':'A simpler life'}</b></div>
      <div className="deskMug"><span>{fr?'Un guide\npeut tout\nchanger':'One guide\ncan change\neverything'}</span></div>
      <div className="deskLaptop"></div>
      <div className="deskNote">{fr?'Petits guides.\nGrands changements.':'Small guides.\nBig changes.'}</div>
    </div>
    <div className="heroCopyPremium">
      <span className="serLabel">{fr?'GUIDES NUMÉRIQUES':'DIGITAL GUIDES'}</span>
      <h1>{fr?'Des réponses concrètes pour vos':'Concrete answers for your'}<br/><em>{fr?'vraies questions.':'real questions.'}</em></h1>
      <p>{fr?'Des guides pratiques, illustrés et à jour pour avancer plus sereinement dans tous les domaines de votre vie : entreprise, argent, maison, tech, famille, bien-être…':'Practical, illustrated and up-to-date guides for business, money, home, tech, family and everyday life.'}</p>
      <div className="heroTicks"><span>{fr?'Conseils concrets':'Practical advice'}</span><span>{fr?'Sources fiables':'Reliable sources'}</span><span>{fr?'Accès immédiat':'Instant access'}</span></div>
      <div className="heroActions">
        <a className="serButton" href={'/'+locale+'/guides'}>{fr?'Explorer les guides':'Explore guides'} →</a>
        <a className="heroSecondary" href="#how">{fr?'Comment ça marche ?':'How does it work?'}</a>
      </div>
    </div>
    <div className="heroQuote">
      <div className="stars">★★★★★</div>
      <p>{fr?'“Des guides vraiment utiles, bien expliqués et à jour. Exactement ce qu’il me fallait.”':'“Useful, clear and up-to-date guides. Exactly what I needed.”'}</p>
      <span>— Clara, entrepreneure</span>
    </div>
    <HomeGuideCarousel locale={locale}/>
  </section>

  <section className="categoryIcons" id="categories">
    {niches.slice(0,10).map((n,i)=><a href={'/'+locale+'/guides#'+n.slug} key={n.slug}>
      <span className={'catIcon ci'+i}>{['▣','▥','▤','⌂','▰','◉','◇','♡','♙','◎'][i]}</span>
      <b>{n[locale]}</b>
    </a>)}
    <a className="allCats" href={'/'+locale+'/guides'}><span className="catIcon">▦</span><b>{fr?'Voir toutes les catégories':'All categories'}</b></a>
  </section>

  <section className="premiumTrust" id="how">
    <article><span className="trustIcon">▤</span><div><h3>{fr?'Des guides conçus pour être utiles':'Guides designed to be useful'}</h3><p>{fr?'Des informations structurées, sourcées et mises à jour selon le sujet.':'Structured, sourced information maintained by topic.'}</p></div></article>
    <article><span className="trustIcon">ϟ</span><div><h3>{fr?'Accès immédiat':'Instant access'}</h3><p>{fr?'Téléchargez votre guide dès votre achat, sur tous vos appareils.':'Get your guide after purchase, on all your devices.'}</p></div></article>
    <article><span className="trustIcon">◆</span><div><h3>{fr?'Une bibliothèque toujours plus complète':'A growing library'}</h3><p>{fr?'De nouveaux guides rejoignent progressivement les différentes collections SER.':'New guides progressively join the SER collections.'}</p></div></article>
    <a className="serButton trustCta" href={'/'+locale+'/guides'}>{fr?'Découvrir tous les guides':'Discover all guides'} →</a>
  </section>
 </main>
}