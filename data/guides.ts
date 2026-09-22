export type Locale='fr'|'en';
export type Guide={
 slug:string;number:string;category:{fr:string;en:string};title:{fr:string;en:string};description:{fr:string;en:string};price:string;edition:string;available:boolean;checkout?:string;deck?:{fr:string[];en?:string[]};
};
export const guides:Guide[]=[{
 slug:'micro-entreprise-2026',number:'01',category:{fr:'Administratif & fiscal',en:'Administration & tax'},title:{fr:'Micro-entreprise 2026',en:'French Micro-business 2026'},description:{fr:'Démarrer et gérer avec une feuille de route claire.',en:'Start and manage a French micro-business with a clear roadmap.'},price:'12,99 €',edition:'2026',available:true,checkout:'https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06',deck:{fr:['/guides/micro-entreprise-2026/fr/01-hook.png','/guides/micro-entreprise-2026/fr/02-sources.png','/guides/micro-entreprise-2026/fr/03-guide.png']}
}];

export const niches=[
 {slug:'reparation-smartphone-electronique',fr:'Smartphone & électronique',en:'Smartphone & electronics',descFr:'Diagnostiquer, réparer et éviter les mauvais achats.',descEn:'Diagnose, repair and avoid bad purchases.'},
 {slug:'electromenager-reparation',fr:'Électroménager & réparation',en:'Appliances & repair',descFr:'Pannes, entretien et décisions de réparation.',descEn:'Breakdowns, maintenance and repair decisions.'},
 {slug:'bricolage-renovation',fr:'Bricolage & rénovation',en:'DIY & renovation',descFr:'Travaux, matériaux, devis et méthodes.',descEn:'Projects, materials, quotes and methods.'},
 {slug:'mecanique-automobile',fr:'Mécanique automobile',en:'Car mechanics',descFr:'Entretien, diagnostic et coûts automobiles.',descEn:'Maintenance, diagnosis and car costs.'},
 {slug:'administratif-fiscal',fr:'Administratif & fiscal',en:'Administration & tax',descFr:'Démarches, fiscalité et micro-entreprise.',descEn:'Paperwork, taxes and French micro-business.'},
 {slug:'fitness-challenges',fr:'Fitness & transformation',en:'Fitness & transformation',descFr:'Programmes, progression et repères pratiques.',descEn:'Programs, progress and practical guidance.'},
 {slug:'jardinage-potager',fr:'Jardinage & potager',en:'Gardening & growing',descFr:'Cultiver, entretenir et résoudre les problèmes courants.',descEn:'Grow, maintain and solve common problems.'},
 {slug:'immobilier-location',fr:'Immobilier & location',en:'Property & renting',descFr:'Louer, acheter, gérer et comprendre ses démarches.',descEn:'Rent, buy, manage and understand the process.'},
 {slug:'informatique-domestique',fr:'Informatique domestique',en:'Home computing',descFr:'Dépannage, sécurité, matériel et usages numériques.',descEn:'Troubleshooting, security, hardware and digital use.'},
 {slug:'parental-scolaire',fr:'Parental & scolaire',en:'Parenting & school',descFr:'Orientation, école et démarches pour les familles.',descEn:'School choices, guidance and family procedures.'},
 {slug:'animaux',fr:'Animaux',en:'Pets',descFr:'Soins du quotidien, équipement et responsabilités.',descEn:'Everyday care, equipment and responsibilities.'},
 {slug:'cuisine-contraintes',fr:'Cuisine & contraintes alimentaires',en:'Cooking & dietary needs',descFr:'Mieux cuisiner selon ses besoins et contraintes.',descEn:'Cook better around needs and dietary constraints.'},
 {slug:'langues',fr:'Langues',en:'Languages',descFr:'Méthodes concrètes pour apprendre et progresser.',descEn:'Practical methods to learn and improve.'},
 {slug:'revente-business',fr:'Revente & petit business',en:'Reselling & side business',descFr:'Vinted, revente, organisation et rentabilité.',descEn:'Reselling, organization and profitability.'},
 {slug:'creatif',fr:'Musique, photo & vidéo',en:'Music, photo & video',descFr:'Apprendre, créer et progresser dans les pratiques créatives.',descEn:'Learn, create and improve creative skills.'}
];

export const upcoming=niches.map(n=>({slug:n.slug,title:{fr:n.fr,en:n.en},category:{fr:'SER Guides',en:'SER Guides'}}));
