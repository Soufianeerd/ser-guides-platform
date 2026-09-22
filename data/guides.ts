export type Locale='fr'|'en';
export type Guide={
 slug:string;number:string;category:{fr:string;en:string};title:{fr:string;en:string};description:{fr:string;en:string};price:string;edition:string;available:boolean;checkout?:string;deck?:{fr:string[];en?:string[]};
};
export const guides:Guide[]=[{
 slug:'micro-entreprise-2026',number:'01',category:{fr:'Administratif & fiscal',en:'Administration & tax'},title:{fr:'Micro-entreprise 2026',en:'French Micro-business 2026'},description:{fr:'Démarrer et gérer avec une feuille de route claire.',en:'Start and manage a French micro-business with a clear roadmap.'},price:'12,99 €',edition:'2026',available:true,checkout:'https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06',deck:{fr:['/guides/micro-entreprise-2026/fr/01-hook.png','/guides/micro-entreprise-2026/fr/02-sources.png','/guides/micro-entreprise-2026/fr/03-guide.png']}
}];
export const upcoming=[
 {slug:'creer-son-activite',title:{fr:'Créer son activité',en:'Start your business'},category:{fr:'Entreprise',en:'Business'}},
 {slug:'comprendre-ses-impots',title:{fr:'Comprendre ses impôts',en:'Understand your taxes'},category:{fr:'Fiscalité',en:'Tax'}},
 {slug:'premieres-demarches',title:{fr:'Premières démarches',en:'First administrative steps'},category:{fr:'Administratif',en:'Administration'}},
 {slug:'organiser-son-administratif',title:{fr:'Organiser son administratif',en:'Organize your paperwork'},category:{fr:'Organisation',en:'Organization'}}
];