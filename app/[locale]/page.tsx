import HomeGuideCarousel from '../../components/HomeGuideCarousel';
import SerIcon from '../../components/SerIcon';
import {niches,type Locale} from '../../data/guides';

export default async function LocaleHome({params}:{params:Promise<{locale:Locale}>}){
 const {locale}=await params; const fr=locale==='fr';

 return <main>
  <section className="premiumHero premiumHeroV2 premiumHeroPhoto">
    <img
      className="premiumHeroPhotoBg"
      src="/home/ser-hero.webp"
      alt=""
      aria-hidden="true"
    />
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

  <section className="serVisualStories" aria-labelledby="ser-visual-stories-title">
    <div className="serVisualStoriesHead">
      <div>
        <span className="serLabel">{fr?'PENSÉS POUR LE QUOTIDIEN':'MADE FOR REAL LIFE'}</span>
        <h2 id="ser-visual-stories-title">{fr?'Des guides à garder sous la main.':'Guides worth keeping close.'}</h2>
      </div>
      <p>{fr
        ?'Une bibliothèque claire, visuelle et pratique pour comprendre vite, décider sereinement et passer à l’action.'
        :'A clear, visual and practical library to understand quickly, decide with confidence and take action.'}</p>
    </div>

    <div className="serVisualGrid">
      <article className="serVisualCard serVisualCardOpen">
        <img src="/home/ser-editorial-open-guide.webp" alt={fr?'Guide SER ouvert sur un bureau lumineux.':'An open SER guide on a bright desk.'}/>
        <div>
          <span>01</span>
          <h3>{fr?'Comprendre sans jargon':'Understand without jargon'}</h3>
          <p>{fr?'Des explications structurées pour aller directement à l’essentiel.':'Structured explanations that take you straight to what matters.'}</p>
        </div>
      </article>

      <article className="serVisualCard">
        <img src="/home/ser-library.webp" alt={fr?'Collection de guides aux tons crème et bleu marine.':'A collection of cream and navy guides.'}/>
        <div>
          <span>02</span>
          <h3>{fr?'Une bibliothèque qui vous suit':'A library that stays with you'}</h3>
          <p>{fr?'Des repères fiables à retrouver au moment où vous en avez besoin.':'Reliable references to return to exactly when you need them.'}</p>
        </div>
      </article>

      <article className="serVisualCard">
        <img src="/home/ser-ecosystem.webp" alt={fr?'Guides et cartes visuelles organisés comme un écosystème.':'Guides and visual cards arranged as an ecosystem.'}/>
        <div>
          <span>03</span>
          <h3>{fr?'Relier l’essentiel':'Connect what matters'}</h3>
          <p>{fr?'Chaque guide transforme une question complexe en prochaines étapes claires.':'Each guide turns a complex question into clear next steps.'}</p>
        </div>
      </article>

      <article className="serVisualCard serVisualCardWide">
        <img src="/home/ser-reading.webp" alt={fr?'Un guide ouvert dans un coin lecture calme et lumineux.':'An open guide in a calm, bright reading corner.'}/>
        <div>
          <span>04</span>
          <h3>{fr?'Décider avec plus de sérénité':'Decide with more confidence'}</h3>
          <p>{fr?'Le bon niveau de détail, sans bruit inutile.':'The right level of detail, without unnecessary noise.'}</p>
        </div>
      </article>
    </div>
  </section>

  <section className="categoryIcons" id="categories">
    {niches.slice(0,10).map((n,i)=>{
      const icons=['business','ecommerce','admin','immobilier','tech','auto','revente','sante','famille','loisirs'] as const;
      return <a href={'/'+locale+'/guides#'+n.slug} key={n.slug}>
        <span className="catIcon"><SerIcon name={icons[i]}/></span>
        <b>{n[locale]}</b>
      </a>
    })}
    <a className="allCats" href={'/'+locale+'/guides'}><span className="catIcon"><SerIcon name="all"/></span><b>{fr?'Voir toutes les catégories':'All categories'}</b></a>
  </section>

  <section className="premiumTrust" id="how">
    <article><span className="trustIcon"><SerIcon name="useful"/></span><div><h3>{fr?'Des guides conçus pour être utiles':'Guides designed to be useful'}</h3><p>{fr?'Des informations structurées, sourcées et mises à jour selon le sujet.':'Structured, sourced information maintained by topic.'}</p></div></article>
    <article><span className="trustIcon"><SerIcon name="instant"/></span><div><h3>{fr?'Accès immédiat':'Instant access'}</h3><p>{fr?'Retrouvez vos guides sur vos appareils, avec un parcours clair et actionnable.':'Access your guides across devices with a clear, actionable journey.'}</p></div></article>
    <article><span className="trustIcon"><SerIcon name="ecosystem"/></span><div><h3>{fr?'Une bibliothèque qui se complète intelligemment':'A library that grows intelligently'}</h3><p>{fr?'Les guides complémentaires sont proposés uniquement quand ils ont un vrai sens dans votre parcours.':'Related guides are suggested only when they genuinely fit your journey.'}</p></div></article>
    <a className="serButton trustCta" href={'/'+locale+'/guides'}>{fr?'Découvrir tous les guides':'Discover all guides'} →</a>
  </section>
 </main>
}