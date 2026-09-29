# SER 09 — Etsy 2026 — lancer une boutique rentable

| Champ | Valeur |
|---|---|
| Statut | **web-book v1 finalisé — QA publication requise** |
| Prix | à définir avant mise en vente |
| Niveau | débutant → autonome |
| Catégorie | `ecommerce-social` (`data/guides.ts`) |
| Format | web-book HTML autonome · **28 étapes** · progression locale · export impression/PDF |
| Sources | pack revu le **29/09/2026** |
| Publication | **non activée** dans `data/guides.ts` tant que checkout, livraison et visuels ne sont pas prêts |

## Fichiers de production
- `contenu/SER-Guide-09-Etsy-2026.html` — web-book interactif complet.
- `sources/SOURCE_PACK.md` — sources primaires/plateformes et notes de revue.
- `images/` — assets éditoriaux à produire si nécessaires.
- `promo/` — pack de lancement à produire avant publication.
- `prompts-images/` — prompts/briefs visuels éventuels.

## Avant mise en ligne
1. QA factuelle et re-test de tous les liens.
2. QA mobile / impression PDF / reprise localStorage.
3. Produire les 3 visuels de lancement SER.
4. Créer le produit/prix/checkout et la livraison automatique.
5. Ajouter le guide à `guides` dans `data/guides.ts` et le retirer de `plannedGuides`.
6. Vérifier le parcours complet : catalogue → fiche → paiement → livraison → ouverture.
