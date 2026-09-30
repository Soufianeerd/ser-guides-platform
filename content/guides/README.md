# content/guides — production des e-books SER Guides

Un dossier par guide. La fiche publique vient de `data/guides.ts`; ce dossier contient la production éditoriale.

| Guide | Statut éditorial au 29/09/2026 |
|---|---|
| 01 · Micro-entreprise 2026 | **en ligne** · 12,99 € |
| 02 · E-commerce & Shopify 2026 | **fact-check / prépublication** · web-book HTML généré |
| 03 · TikTok Shop 2026 | **fact-check / prépublication** · ebook + web-book générés |
| 04 · Vinted 2026 | **fact-check / prépublication** · ebook + web-book générés |
| 05 · Optimisation fiscale 2026 | **fact-check / prépublication** · ebook + web-book générés |
| 06 · Dropshipping 2026 France / UE | **fact-check / prépublication** · ebook + web-book générés |
| 07 · TikTok 2026 — audience | **fact-check / prépublication** · ebook + web-book générés |
| 08 · Produits digitaux | **fact-check / prépublication** · ebook + web-book générés |
| 09 · Etsy 2026 | **fact-check / prépublication** · ebook + web-book générés |
| 10 · UGC Creator | **fact-check / prépublication** · ebook + web-book générés |
| 11 · Instagram & Reels | **fact-check / prépublication** · ebook + web-book générés |
| 12 · Freelance — 10 premiers clients | **fact-check / prépublication** · ebook + web-book générés |
| 13 · IA & automatisation pour indépendant | **fact-check / prépublication** · ebook + web-book générés |
| 14 · Sourcing & validation produit | **fact-check / prépublication** · ebook + web-book générés |
| 15 · Print-on-Demand | **fact-check / prépublication** · ebook + web-book générés |
| 16 · Facturation électronique 2026–2027 | **cadrage / prépublication** · Canva source + sources officielles |
| 17 · CyberKit TPE | **production / prépublication** · Canva 30 pages + sources officielles |
| 18 · AI Act Starter Kit | **cadrage / prépublication** · sources officielles UE |
| 19 · Trouver un emploi avec l’IA | **cadrage / prépublication** · sources France Travail |

## Règle avant publication

Aucun guide 02–15 n'est marqué READY automatiquement. Avant publication commerciale :
1. fact-check final et vérification de tous les liens ;
2. QA mobile/desktop + export PDF si retenu ;
3. 3 visuels définitifs ;
4. prix décidé (ne pas l'inventer) ;
5. produit / Payment Link Stripe ;
6. mapping Stripe → livraison / entitlement ;
7. achat test de bout en bout ;
8. seulement ensuite passage de `plannedGuides` vers `guides` dans `data/guides.ts`.

Voir `AUDIT-PRODUCTION-2026-09-29.md` pour la hiérarchie de roadmap.

## Vague SER 16–19 — ajout du 30/09/2026

Les guides 16–19 prolongent la collection sur des besoins devenus immédiatement actionnables en 2026 : facturation électronique, cybersécurité TPE, conformité IA et recherche d’emploi assistée par IA.

- **SER 16** : priorité commerciale forte liée au calendrier obligatoire 2026–2027.
- **SER 17** : kit opérationnel cyber pour indépendants/TPE.
- **SER 18** : contenu informatif sur l’AI Act, sans conseil juridique personnalisé.
- **SER 19** : méthode pratique pour utiliser l’IA sans falsifier son parcours.
- **Micro-entreprise 2027** : traité comme prochaine édition du **SER 01**, pas comme un nouveau numéro de guide.
- **IA pour indépendants** : déjà couvert par **SER 13**, donc pas de doublon.

Ces nouveaux guides restent en prépublication : aucun prix, checkout ou livraison live n’est activé automatiquement.
