import HomeGuideCarousel from '../../components/HomeGuideCarousel';
import {niches,type Locale} from '../../data/guides';

export default async function LocaleHome({params}:{params:Promise<{locale:Locale}>}){
 const {locale}=await params; const fr=locale==='fr';

 return <main>
  <section className="premiumHero premiumHeroV2">
    <div className="premiumHeroGrid">
      <div className="heroCopyPremium">
        <span className="serLabel">{fr?'GUIDES NUMÉRIQUES':'DIGITAL GUIDES'}</span>
        <h1>{fr?'Des réponses concrètes pour vos':'Concrete answers for your'} <em>{fr?'vraies questions.':'real questions.'}</em></h1>
        <p>{fr
          ?'Des guides pratiques, illustrés et à jour pour avancer plus sereinement dans vos projets, vos démarches et votre quotidien.'
          :'Practical, illustrated and up-to-date guides to move forward with your projects, decisions and everyday life.'}</p>
        <div className="heroTicks">
          <span>{fr?'Conseils concrets':'Practical advice'}</span>
          <span>{fr?'Sources fiables':'Reliable sources'}</span>
          <span>{fr?'Accès immédiat':'Instant access'}</span>
        </div>
        <div className="heroActions">
          <a className="serButton" href={'/'+locale+'/guides'}>{fr?'Explorer les guides':'Explore guides'} →</a>
          <a className="heroSecondary" href="#how">{fr?'Comment ça marche ?':'How does it work?'}</a>
        </div>
      </div>

      <div className="heroScene" aria-hidden="true">
        <div className="deskBooks">
          <b>{fr?'Des projets':'Projects'}</b>
          <b>{fr?'Plus de liberté':'More freedom'}</b>
          <b>{fr?'Une vie plus simple':'A simpler life'}</b>
        </div>
        <div className="deskMug"><span>{fr?'Un guide\npeut tout\nchanger':'One guide\ncan change\neverything'}</span></div>
        <div className="deskLaptop"></div>
        <div className="deskNote">{fr?'Petits guides.\nGrands changements.':'Small guides.\nBig changes.'}</div>
        <div className="heroMethodCard">
          <strong>{fr?'Une méthode simple':'A simple method'}</strong>
          <span>{fr?'Comprendre → vérifier → agir':'Understand → verify → act'}</span>
        </div>
      </div>
    </div>
  </section>

  <section className="featuredGuidesHome" aria-labelledby="featured-guides-title">
    <div className="featuredGuidesHeading">
      <div>
        <span className="serLabel">{fr?'LA BIBLIOTHÈQUE SER':'THE SER LIBRARY'}</span>
        <h2 id="featured-guides-title">{fr?'Commencez par le guide qui vous débloque maintenant.':'Start with the guide that helps you move forward now.'}</h2>
      </div>
      <a href={'/'+locale+'/guides'}>{fr?'Voir tous les guides':'View all guides'} →</a>
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
    <article><span className="trustIcon">ϟ</span><div><h3>{fr?'Accès immédiat':'Instant access'}</h3><p>{fr?'Retrouvez vos guides sur vos appareils, avec un parcours clair et actionnable.':'Access your guides across devices with a clear, actionable journey.'}</p></div></article>
    <article><span className="trustIcon">◆</span><div><h3>{fr?'Une bibliothèque qui se complète intelligemment':'A library that grows intelligently'}</h3><p>{fr?'Les guides complémentaires sont proposés uniquement quand ils ont un vrai sens dans votre parcours.':'Related guides are suggested only when they genuinely fit your journey.'}</p></div></article>
    <a className="serButton trustCta" href={'/'+locale+'/guides'}>{fr?'Découvrir tous les guides':'Discover all guides'} →</a>
  </section>
 </main>
}