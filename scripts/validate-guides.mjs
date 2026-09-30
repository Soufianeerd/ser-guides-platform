import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const guides = [
  ['02','ser-02-ecommerce-shopify-2026','contenu/SER-Guide-02-Ecommerce-Shopify-2026.html','ebook.md','SOURCE_PACK.md'],
  ['03','ser-03-tiktok-shop-2026','contenu/SER-Guide-03-TikTok-Shop-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['04','ser-04-vinted-2026','contenu/SER-Guide-04-Vinted-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['05','ser-05-optimisation-fiscale-2026','contenu/SER-Guide-05-Optimisation-Fiscale-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['06','ser-06-dropshipping-2026','contenu/SER-Guide-06-Dropshipping-2026-France-UE.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['07','ser-07-tiktok-audience-2026','contenu/SER-Guide-07-TikTok-Audience-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['08','ser-08-produits-digitaux','contenu/SER-Guide-08-Produits-Digitaux.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['09','ser-09-etsy-2026','contenu/SER-Guide-09-Etsy-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['10','ser-10-ugc-creator','contenu/SER-Guide-10-UGC-Creator.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['11','ser-11-instagram-reels','contenu/SER-Guide-11-Instagram-Reels.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['12','ser-12-freelance-premiers-clients','contenu/SER-Guide-12-Freelance-10-Premiers-Clients.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['13','ser-13-ia-automatisation-independant','contenu/SER-Guide-13-IA-Automatisation-Independant.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['14','ser-14-trouver-produit-sourcing','contenu/SER-Guide-14-Sourcing-Validation.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['15','ser-15-print-on-demand','contenu/SER-Guide-15-Print-On-Demand.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['16','ser-16-facturation-electronique-2026-2027','contenu/SER-Guide-16-Facturation-Electronique-2026-2027.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['17','ser-17-cyberkit-tpe-2026','contenu/SER-Guide-17-CyberKit-TPE-2026.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['18','ser-18-ai-act-starter-kit-2026-2027','contenu/SER-Guide-18-AI-Act-Starter-Kit-2026-2027.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
  ['19','ser-19-emploi-ia-2026-2027','contenu/SER-Guide-19-Emploi-IA-2026-2027.html','contenu/ebook.md','sources/SOURCE_PACK.md'],
];

const errors = [];

for (const [number, slug, htmlRel, ebookRel, sourceRel] of guides) {
  const base = path.join(root, 'content', 'guides', slug);
  const required = ['manifest.json', htmlRel, ebookRel, sourceRel];

  for (const rel of required) {
    const full = path.join(base, rel);
    if (!fs.existsSync(full)) errors.push(`SER ${number}: fichier manquant: ${rel}`);
  }

  const manifestPath = path.join(base, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (String(manifest.guide_id).padStart(2, '0') !== number) {
      errors.push(`SER ${number}: guide_id manifest incohérent (${manifest.guide_id})`);
    }
    if (manifest.page_target !== 30 || manifest.page_max !== 35) {
      errors.push(`SER ${number}: cible pages attendue 30 / max 35`);
    }
  }

  const ebookPath = path.join(base, ebookRel);
  const htmlPath = path.join(base, htmlRel);
  let ebookSteps = 0;
  let htmlSteps = 0;

  if (fs.existsSync(ebookPath)) {
    const ebook = fs.readFileSync(ebookPath, 'utf8');
    ebookSteps = [...ebook.matchAll(/^## \d+\./gm)].length;
  }

  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    htmlSteps = [...html.matchAll(/<article[^>]+class=["'][^"']*\bchap\b[^"']*["']/g)].length;
    for (const marker of ['noindex,nofollow,noarchive', 'localStorage', 'Étape suivante']) {
      if (!html.includes(marker)) errors.push(`SER ${number}: HTML sans marqueur ${marker}`);
    }
  }

  const editorialSteps = ebookSteps >= 28 && ebookSteps <= 32 ? ebookSteps : htmlSteps;
  if (editorialSteps < 28 || editorialSteps > 32) {
    errors.push(`SER ${number}: cible 28–32 non atteinte (ebook=${ebookSteps}, html=${htmlSteps})`);
  }
}

if (errors.length) {
  console.error('\nSER Guides validation failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SER Guides validation OK: ${guides.length} guides, structure + cible 28–32 étapes validées.`);
