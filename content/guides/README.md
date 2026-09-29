# content/guides — production des e-books SER Guides

Un dossier par guide : `ser-NN-<slug>/` avec `contenu/`, `images/`, `prompts-images/`, `sources/`, `promo/` et un `README.md`.

**Le site ne lit pas directement ce dossier.** Les fiches produit viennent de `data/guides.ts`. Un guide ne doit passer de `plannedGuides` à `guides` qu'après validation du contenu, du checkout, de la livraison et des visuels.

| Dossier | Guide | Statut production |
|---|---|---|
| `ser-01-micro-entreprise-2026` | 01 · Micro-entreprise 2026 | **en ligne** · 12,99 € |
| `ser-02-ecommerce-shopify-2026` | 02 · E-commerce & Shopify 2026 | **web-book v1 finalisé · QA requise** |
| `ser-03-tiktok-shop-2026` | 03 · TikTok Shop 2026 | **web-book v1 finalisé · QA requise** |
| `ser-04-vinted-2026` | 04 · Vinted 2026 | **web-book v1 finalisé · QA requise** |
| `ser-05-optimisation-fiscale-2026` | 05 · Optimisation fiscale 2026 | **web-book v1 finalisé · QA renforcée requise** |
| `ser-06-dropshipping-2026` | 06 · Dropshipping 2026 France / UE | **web-book v1 finalisé · QA requise** |
| `ser-07-tiktok-audience-2026` | 07 · TikTok 2026 — audience qui convertit | **web-book v1 finalisé · QA requise** |
| `ser-08-produits-digitaux` | 08 · Produits digitaux | **web-book v1 finalisé · QA requise** |
| `ser-09-etsy-2026` | 09 · Etsy 2026 | **web-book v1 finalisé · QA requise** |
| `ser-10-ugc-creator` | 10 · UGC Creator | **web-book v1 finalisé · QA requise** |
| `ser-11-instagram-reels` | 11 · Instagram & Reels | **web-book v1 finalisé · QA requise** |
| `ser-12-freelance-premiers-clients` | 12 · Freelance — 10 premiers clients | **web-book v1 finalisé · QA requise** |
| `ser-13-ia-automatisation-independant` | 13 · IA & automatisation pour indépendant | **web-book v1 finalisé · QA requise** |
| `ser-14-trouver-produit-sourcing` | 14 · Sourcing & validation produit | **web-book v1 finalisé · QA requise** |
| `ser-15-print-on-demand` | 15 · Print-on-Demand | **web-book v1 finalisé · QA requise** |

## Standard appliqué aux Guides 02–15

- 28 étapes/écrans.
- diagnostic express.
- roadmap et KPI.
- modules actionnables propres à la niche.
- erreurs fréquentes.
- plan 7 jours.
- checklist finale.
- sources datées et cliquables.
- progression et cases sauvegardées dans `localStorage`.
- navigation mobile + sommaire.
- CSS d'impression/export PDF.
- aucune promesse de revenu, viralité ou résultat garanti.

## Gate de publication

Un guide reste **non disponible** tant que ces points ne sont pas terminés :

1. QA factuelle + re-test des liens.
2. QA HTML/mobile/impression.
3. 3 visuels SER de lancement.
4. prix + checkout Stripe.
5. livraison automatique du bon fichier.
6. fiche produit + deck dynamique.
7. test complet catalogue → paiement → e-mail → ouverture.
8. activation dans `data/guides.ts`.

- `_modele/` : gabarit de production.
- `COMMENT-AJOUTER-UN-GUIDE.md` : procédure.
- `PRODUCTION_AUDIT_2026-09-29.md` : état détaillé de l'audit et des corrections.
