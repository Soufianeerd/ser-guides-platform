import GuideDeck from '../../components/GuideDeck';
import { guideBySlug } from '../../data/guides';

export default function Guide() {
  const guide = guideBySlug('micro-entreprise-2026')!;
  const slides = guide.slides.fr.map((src, i) => ({ src, alt: `${guide.title.fr} — visuel ${i + 1}` }));
  return <main>
    <section className="productHero">
      <GuideDeck slides={slides} />
      <div className="productCopy">
        <div className="eyebrow">SER GUIDE {guide.number} · {guide.category.fr}</div>
        <h1>{guide.title.fr}</h1>
        <p className="lead">{guide.subtitle.fr}</p>
        <div className="benefitList">
          <div><strong>Diagnostic rapide</strong><span>Situez votre projet et les démarches qui vous concernent.</span></div>
          <div><strong>Aides & optimisation</strong><span>Identifiez les dispositifs et points de vigilance utiles.</span></div>
          <div><strong>Déclarations simplifiées</strong><span>Avancez avec une feuille de route plus lisible.</span></div>
        </div>
        <div className="purchaseRow"><div><span className="muted">Guide numérique</span><div className="price">{guide.price}</div></div><a className="btn" href={guide.checkout}>Acheter le guide</a></div>
        <p className="muted">Paiement sécurisé. Accès envoyé automatiquement par e-mail après confirmation du paiement.</p>
      </div>
    </section>
    <section className="section"><div className="eyebrow">À L’INTÉRIEUR</div><h2>Pas un PDF oublié dans un dossier. Un guide conçu pour être utilisé.</h2><div className="grid"><div className="card"><h3>Comprendre</h3><p>Les notions importantes expliquées dans un ordre logique et exploitable.</p></div><div className="card"><h3>Vérifier</h3><p>Des repères et sources pour contrôler les informations avant d’agir.</p></div><div className="card"><h3>Passer à l’action</h3><p>Checklists et étapes concrètes pour avancer sans vous perdre dans le jargon.</p></div></div></section>
    <section className="cta"><div><div className="eyebrow">SER GUIDE {guide.number}</div><h2>Micro-entreprise 2026</h2><p>Accès numérique après achat.</p></div><a className="btn light" href={guide.checkout}>Acheter — {guide.price}</a></section>
  </main>;
}
