# SER 01 — Micro-entreprise 2026 · optimiser puis déclarer

| Champ | Valeur |
|---|---|
| Statut | **en ligne** |
| Prix | 12,99 € |
| Niveau | tous niveaux — parcours adapté (3 situations × 5 activités) + diagnostic 7 questions |
| Catégorie | Entreprise & fiscalité (`data/guides.ts`) |
| Format | web-book HTML interactif autonome (13 chapitres) |
| Date de mise à jour | données vérifiées le 12/09/2026 · version 1.0 |
| Fiche produit | `/fr/guides/micro-entreprise-2026` — données dans `data/guides.ts` |

## Dossier
- `contenu/SER-Guide-01-Micro-entreprise-2026.html` — le e-book (fichier unique, CSS + JS intégrés). **Référence du format**, voir `../_modele/`.
- `images/` — vide : le guide n'intègre que des SVG dans le HTML.
- `prompts-images/` — vide : aucun prompt retrouvé.
- `sources/sources-officielles.md` — les liens officiels cités.
- `promo/` — carrousel 6 slides « erreurs », textes des 30 carrousels, légendes.

## Autres emplacements (volontairement non déplacés)
| Fichier | Pourquoi il reste là |
|---|---|
| `public/guides/micro-entreprise-2026/fr/01-03.png` | deck affiché sur la fiche produit (`deck` dans `data/guides.ts`) |
| `ser-module/niches/administratif-fiscal/ebook/index.html` | copie identique, dépôt séparé SER-Module ; peut être la cible de `GUIDE_ATTACHMENT_URL` (e-mail de livraison) |
| `ser-module/niches/administratif-fiscal/slides/p27/` + `posts/queue.json` | lus par la GitHub Action Instagram de SER-Module |

⚠️ Toute correction du e-book doit aussi être reportée dans la copie livrée aux clients (ser-module / URL de livraison).
