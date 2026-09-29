# SER Guides — Audit production du 29/09/2026

## Périmètre
Audit de `Soufianeerd/ser-guides-platform` et de la référence éditoriale `Soufianeerd/SER-Module`.

## État trouvé
- Guide 01 : produit complet déjà en ligne.
- Guide 02 : contenu de rédaction v1 présent, mais pas de web-book final autonome.
- Guides 03–15 : dossiers structurés mais contenu principal absent.
- `data/guides.ts` : seul le Guide 01 est dans `guides`; 02–15 sont dans `plannedGuides`.
- `GuideDeck.tsx` : visuels du Guide 01 codés en dur.
- `LibraryExplorer.tsx` : seul `guides[0]` était rendu comme produit disponible.
- `HomeGuideCarousel.tsx` : Guide 01 codé en dur + 4 guides planifiés.
- La CI existe et exécute TypeScript puis `next build` sur les pull requests.

## Travail produit sur cette branche
- Guides 02–15 : web-books HTML autonomes créés.
- 28 étapes chacun.
- packs de sources ajoutés dans `sources/SOURCE_PACK.md`.
- sources revues le 29/09/2026.
- diagnostic, progression, checklist, localStorage, sommaire, impression/PDF.
- README de chaque guide aligné sur le statut réel.
- bibliothèque, carrousel accueil et deck produit refactorisés pour supporter plusieurs guides disponibles.

## Positionnement des guides proches
- 02 : fondation e-commerce / Shopify.
- 03 : TikTok Shop.
- 06 : dropshipping.
- 08 : produit numérique.
- 09 : Etsy.
- 14 : recherche produit / sourcing / validation.
- 15 : Print-on-Demand.

Ils doivent rester complémentaires plutôt que répéter le même parcours générique.

## Points sensibles
### Guide 05 — Fiscalité
QA renforcée obligatoire avant publication : seuils, TVA, facturation électronique, options fiscales et toute donnée 2026 doivent rester reliés à une source officielle datée.

### Guides 06, 14, 15 — biens physiques / import / sécurité
Recontrôler GPSR, obligations produit, responsable UE lorsque requis, douane et informations de vente à distance.

### Guides 10–11 — UGC / influence
Recontrôler transparence commerciale, droits d'usage et politiques Meta au jour de la publication.

### Guide 13 — IA
Recontrôler le périmètre exact des obligations AI Act applicables au cas d'usage ; ne pas généraliser l'article 50 à tous les usages d'IA.

## Ce qui n'est volontairement PAS activé
Les Guides 02–15 restent dans `plannedGuides`. Aucun guide n'est présenté comme achetable tant que les éléments commerciaux et de fulfillment suivants ne sont pas prêts :
- prix.
- produit/checkout Stripe.
- mapping livraison vers le bon fichier.
- deck de 3 visuels.
- test end-to-end.

## Gate de release par guide
1. revue factuelle et juridique adaptée au sujet.
2. vérification de chaque lien externe.
3. test du web-book : mobile, clavier, progression, reprise, impression.
4. production des 3 visuels 1080×1350.
5. création produit/prix/checkout.
6. branchement livraison.
7. test achat → e-mail → accès.
8. activation dans `data/guides.ts`.
9. déploiement et smoke test du site.

## Décision de structure
Ne pas supprimer le matériel historique du Guide 02 (`BRIEF.md`, `BOOK_MAP.md`, `chapters/`, `ebook.md`) : il reste utile comme trace de rédaction. La version de publication doit cependant être le web-book dans `contenu/`.
