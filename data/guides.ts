export type Locale='fr'|'en';
export type Guide={slug:string;number:string;category:{fr:string;en:string};title:{fr:string;en:string};description:{fr:string;en:string};price:string;edition:string;available:boolean;checkout?:string;deck?:{fr:string[];en?:string[]};};
export const guides:Guide[]=[{
 slug:'micro-entreprise-2026',number:'01',category:{fr:'Entreprise & fiscalité',en:'Business & tax'},title:{fr:'Micro-entreprise 2026',en:'French Micro-business 2026'},description:{fr:'Créer, déclarer, optimiser et gérer sa micro-entreprise avec une feuille de route claire.',en:'Start, declare, optimize and manage a French micro-business with a clear roadmap.'},price:'12,99 €',edition:'2026',available:true,checkout:'https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06',deck:{fr:['/guides/micro-entreprise-2026/fr/01-hook.png','/guides/micro-entreprise-2026/fr/02-sources.png','/guides/micro-entreprise-2026/fr/03-guide.png']}
}];

export const niches=[
 {slug:'entreprise-business',fr:'Entreprise & Business',en:'Business',descFr:'Créer, gérer, structurer et développer son activité.',descEn:'Start, manage and grow a business.',examples:'Micro-entreprise · Freelance · Business plan'},
 {slug:'ecommerce-social',fr:'E-commerce & Réseaux sociaux',en:'E-commerce & Social',descFr:'Shopify, TikTok Shop, acquisition et vente en ligne.',descEn:'Shopify, TikTok Shop, acquisition and online sales.',examples:'Shopify · TikTok Shop · Instagram'},
 {slug:'administratif-fiscal',fr:'Administratif & Fiscalité',en:'Administration & Tax',descFr:'Démarches, impôts, aides et obligations expliqués clairement.',descEn:'Paperwork, taxes, support and obligations.',examples:'Fiscalité · Aides · Déclarations'},
 {slug:'immobilier-maison',fr:'Immobilier & Maison',en:'Property & Home',descFr:'Location, achat, travaux et gestion du logement.',descEn:'Renting, buying, renovation and home management.',examples:'Location · Achat · Rénovation'},
 {slug:'tech-informatique',fr:'Tech & Informatique',en:'Tech & Computing',descFr:'Matériel, dépannage, sécurité et outils numériques.',descEn:'Hardware, troubleshooting, security and digital tools.',examples:'Mac/PC · Cybersécurité · Outils'},
 {slug:'auto-mobilite',fr:'Auto & Mobilité',en:'Cars & Mobility',descFr:'Achat, entretien, diagnostic et budget automobile.',descEn:'Buying, maintenance, diagnosis and car budgets.',examples:'Occasion · Entretien · Diagnostic'},
 {slug:'revente-seconde-main',fr:'Revente & Seconde main',en:'Reselling & Second hand',descFr:'Vinted, sourcing, annonces, marges et organisation.',descEn:'Vinted, sourcing, listings, margins and organization.',examples:'Vinted · Sourcing · Marges'},
 {slug:'sante-bienetre',fr:'Santé & Bien-être',en:'Health & Wellness',descFr:'Des repères pratiques de prévention et de bien-être.',descEn:'Practical prevention and wellness guidance.',examples:'Nutrition · Sport · Bien-être'},
 {slug:'famille-education',fr:'Famille & Éducation',en:'Family & Education',descFr:'École, orientation, parentalité et démarches familiales.',descEn:'School, guidance, parenting and family procedures.',examples:'École · Orientation · Parentalité'},
 {slug:'loisirs-creation',fr:'Loisirs & Création',en:'Hobbies & Creation',descFr:'Photo, vidéo, musique et projets créatifs.',descEn:'Photo, video, music and creative projects.',examples:'Photo · Vidéo · Musique'},
 {slug:'animaux',fr:'Animaux',en:'Pets',descFr:'Soins quotidiens, équipement et responsabilités.',descEn:'Everyday care, equipment and responsibilities.',examples:'Chien · Chat · Soins'},
 {slug:'emploi-carriere',fr:'Emploi & Carrière',en:'Jobs & Career',descFr:'CV, entretiens, reconversion, freelance et progression.',descEn:'CVs, interviews, career changes and progression.',examples:'CV · Entretien · Reconversion'},
 {slug:'argent-budget',fr:'Argent & Budget',en:'Money & Budget',descFr:'Budget, dépenses, épargne et décisions financières du quotidien.',descEn:'Budgeting, spending, saving and everyday money decisions.',examples:'Budget · Épargne · Dépenses'},
 {slug:'voyage-expatriation',fr:'Voyage & Expatriation',en:'Travel & Expatriation',descFr:'Préparer ses démarches, son budget et son installation.',descEn:'Plan paperwork, budgets and relocation.',examples:'Voyage · Frontière · Installation'},
 {slug:'langues-competences',fr:'Langues & Compétences',en:'Languages & Skills',descFr:'Méthodes concrètes pour apprendre et progresser.',descEn:'Practical methods to learn and improve.',examples:'Anglais · Méthodes · Compétences'}
];

export const plannedGuides=[
 {number:'02',title:'E-commerce & Shopify 2026',titleEn:'E-commerce & Shopify 2026',category:'ecommerce-social'},
 {number:'03',title:'TikTok Shop : premières ventes',titleEn:'TikTok Shop: first sales',category:'ecommerce-social'},
 {number:'04',title:'Vinted : vendre comme un pro',titleEn:'Vinted: sell like a pro',category:'revente-seconde-main'},
 {number:'05',title:'Optimisation fiscale 2026',titleEn:'Tax optimization 2026',category:'administratif-fiscal'},
 {number:'06',title:'Freelance : trouver ses premiers clients',titleEn:'Freelance: find your first clients',category:'entreprise-business'},
 {number:'07',title:'Instagram Business : contenu qui convertit',titleEn:'Instagram Business: content that converts',category:'ecommerce-social'},
 {number:'08',title:'Produits digitaux : créer et vendre',titleEn:'Digital products: create and sell',category:'ecommerce-social'},
 {number:'09',title:'Etsy : lancer sa boutique',titleEn:'Etsy: launch your shop',category:'ecommerce-social'},
 {number:'10',title:'Budget personnel : reprendre le contrôle',titleEn:'Personal budget: take back control',category:'argent-budget'},
 {number:'11',title:'Acheter une voiture d’occasion',titleEn:'Buy a used car',category:'auto-mobilite'},
 {number:'12',title:'Louer son premier appartement',titleEn:'Rent your first apartment',category:'immobilier-maison'},
 {number:'13',title:'Cybersécurité personnelle',titleEn:'Personal cybersecurity',category:'tech-informatique'},
 {number:'14',title:'CV & entretien : décrocher le poste',titleEn:'CV & interview: land the job',category:'emploi-carriere'},
 {number:'15',title:'Sourcing & marges pour la revente',titleEn:'Sourcing & margins for reselling',category:'revente-seconde-main'}
];
export const upcoming=niches.map(n=>({slug:n.slug,title:{fr:n.fr,en:n.en},category:{fr:'SER Guides',en:'SER Guides'}}));