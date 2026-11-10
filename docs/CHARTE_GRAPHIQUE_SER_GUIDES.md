# SER Guides — Charte graphique & système éditorial
**Version 1.0 — 10 novembre 2026 · Source de vérité pour toutes les créations SER Guides**

## 0. Statut et références analysées
Charte établie à partir du site `serguides.fr`, des variables de `app/globals.css`, des web-books 01, 02 et 03 et de la boutique Shopify connectée. Elle unifie **les futures créations sans modifier silencieusement les quatre fiches et visuels déjà actifs**.
- Références graphiques : `app/globals.css` (marque), `content/guides/ser-01-micro-entreprise-2026/contenu/`, `ser-02-ecommerce-shopify-2026/contenu/`, `ser-03-tiktok-shop-2026/contenu/`.
- Références fonctionnelles : `content/guides/COMMENT-AJOUTER-UN-GUIDE.md`, `content/guides/README.md`, `data/guides.ts`.
- **Attention :** Shopify affiche actuellement les SER Guides 01–04 comme actifs, tandis que le dépôt de production les documente en partie comme « en préparation ». Ne pas inférer la disponibilité commerciale ni la livraison effective du seul statut Shopify. Contrôler produit, fichier livré, paiement et automatisation avant toute publication.

## 1. ADN de marque
**SER GUIDES — des guides numériques concrets, fiables et immédiatement utilisables.**
- Promesse : aider à passer à l'action et à prendre une décision documentée.
- Personnalité : éditoriale premium, claire, technique sans jargon inutile, sérieuse mais accessible.
- Sensation : une bibliothèque cohérente d'outils professionnels, pas une collection de couvertures générées au hasard.
- À éviter : promesse d'enrichissement rapide, badges « ultime », visuels stock IA génériques, surcharges néon, pictogrammes purement décoratifs, fausses statistiques.

## 2. Palette maîtresse
| Rôle | Hex | Usage |
|---|---|---|
| Bleu nuit SER | `#071B31` | couvertures, en-têtes, sommaires, footer |
| Encre | `#06172D` | texte principal, contraste |
| Cyan SER | `#0698B7` | CTA, traits identitaires, numéro de collection, accents de navigation |
| Cyan clair | `#EAF6F8` | fonds d'interactions, encadrés doux |
| Ivoire | `#FBFAF6` | fonds premium et pages respirantes |
| Blanc | `#FFFFFF` | pages, cartes, espaces |
| Ardoise | `#52677A` | texte secondaire |
| Bordure | `#DCE7EC` | séparateurs, cadres |

**Règle :** ces couleurs restent présentes sur chaque titre de collection, couverture et visuel boutique, même quand la niche apporte sa propre couleur.

## 3. Couleur secondaire par univers
Un seul accent de niche par guide, **jamais plus de 15 à 20 % de la surface d'une couverture** :
- Entreprise, finance, fiscalité : vert profond `#177C6B`.
- E-commerce, conversion : vert commerce `#1E9B73`.
- Réseaux sociaux, création : corail `#D95C60` (sur les références existantes TikTok, une exception rouge/cyan peut être conservée).
- Immobilier, habitat : terre cuite `#B47651`.
- Tech, IA, automatisation : violet sombre `#6557A6`.
- Auto, mobilité : bleu acier `#417A96`.
- Emploi, compétences : ambre `#B88D43`.
- Revente, seconde main : sauge `#6B8D73`.
Ces accents sont des propositions de standardisation ; **ne pas recolorer les anciennes couvertures sans validation**.

## 4. Typographie
- **Manrope** : titres, grands nombres, accroches, chiffres de couverture — 700/800.
- **Inter** : corps de texte, menus, boutons, tableaux, citations, légendes — 400 à 700.
- Fallback : `system-ui, sans-serif`. Préserver des performances correctes sur mobile et en mode hors ligne.
- Titres de couverture : ~58–96 px selon format, interligne 0,98–1,08, alignés à gauche.
- Sous-titre : 24–32 px ; métadonnées 16–20 px ; texte des cartes 20–30 px.
- Pour web-book : corps 16–18 px, interligne 1,55–1,7 ; H1 38–54 px responsive, H2 26–34 px, H3 20–24 px ; largeur de lecture 680–760 px.
- Éviter les titres trop longs en capitales, les polices décoratives et l'étirement artificiel.

## 5. Système des couvertures — obligatoire
Format source **1600 × 2000 px (4:5)** ; zones de sécurité au moins 80 px des bords ; exports web optimisés (WebP/PNG).
Le même squelette revient sur tous les guides :
1. Bandeau haut : `SER GUIDES` discret, identité lisible, signe/monogramme de collection cohérent.
2. Numéro constant : `GUIDE 05`, `GUIDE 06`, etc. toujours à la même position.
3. Catégorie et édition : libellé court + `ÉDITION 2026` lorsque pertinent.
4. Zone héro : titre immédiatement lisible en miniature, puis sous-titre de bénéfice concret.
5. Un élément visuel pertinent : composition abstraite, environnement de travail réel, schéma, objet ou illustration sobre liée à la niche. Ni personnage aléatoire ni image d'IA hors sujet.
6. Signature bas : `SER GUIDES` et, si démontrable, un élément de preuve fonctionnelle (« calculateur », « checklists », « parcours interactif »). Ne jamais afficher une certification inexistante.

Contraintes :
- 60–70 % d'espace respirant ; 1 foyer d'attention ; 2 typographies maximum ; 1 accent de niche.
- Le numéro reste visible pour constituer une collection reconnaissable dans Shopify.
- Une couverture est un **visuel de produit**, pas une fausse preuve d'édition physique : pas de faux ISBN, logo de plateforme imité, critiques inventées, rendu de livre physique trompeur.
- Au choix, utiliser une photo originale/licenciée, un visuel 3D propre ou des formes vectorielles ; ne jamais copier des images protégées.

## 6. Pages intérieures / web-books
- Première vue : promesse pratique, catégorie, édition, diagnostic initial court, bouton clair « Commencer ».
- Sommaire toujours accessible, progression par chapitre, reprise de lecture, recherche si utile.
- Structure de chaque chapitre : **Objectif → Comprendre → Exemple concret → Faire → Vérifier → Ressources datées**.
- Modules réutilisables : `Cas pratique`, `Attention / erreur fréquente`, `Checklist`, `Calculateur`, `Exemple chiffré`, `Source officielle`, `À retenir`.
- Les formulaires doivent fonctionner hors ligne quand c'est pertinent ; sauvegarde locale sans données sensibles excessives ; boutons copier/tester export.
- Responsive dès 360 px ; navigation clavier, labels accessibles, contraste suffisant, styles d'impression exploitables.
- Pour les guides interactifs HTML privés, `noindex,nofollow`, pas de publication involontaire dans `public/`.

## 7. Visuels et fiches Shopify
- Image principale cohérente avec couverture 4:5, titre lisible en vignette mobile.
- Pack visuel par guide : (1) couverture ; (2) bénéfice / problème résolu ; (3) démonstration d'un outil réel ou d'une page ; (4) contenu et chapitres ; (5) preuve ou exemple vérifiable, jamais fictif présenté comme authentique.
- Social : carrousel Instagram **1080 × 1350**, story **1080 × 1920**, OG **1200 × 630**.
- Les cinq slides boutique doivent partager bandeau de marque, marges, typo et palette ; la catégorie colore uniquement l'accent.
- Les descriptions Shopify ne prétendent pas qu'un guide possède une fonctionnalité absente du livrable. Aucun avis ou « nombre d'acheteurs » inventé.

## 8. Exigences de contenu et de crédibilité
- Guides fondés sur des sources officielles datées, puis sources primaires et secondaires fiables clairement différenciées.
- Chiffres, barèmes, dates, légalité : *ne jamais inventer*. Si invérifiable, annoter « À confirmer » et ne pas publier.
- `BRIEF.md`, `BOOK_MAP.md`, `SOURCE_PACK.md`, `manifest.json`, chapitres, HTML autonome, visuels, README et checklist de QA doivent accompagner chaque guide.
- Pas de paraphrase de ressources payantes ou de reproduction non autorisée.
- Ton : direct, pédagogique, sans jargon gratuit ; « ce que tu peux faire aujourd'hui », exemples réalistes ; pas de marketing creux.
- Version française d'abord ; anglais ensuite avec adaptation et vérification locale, pas de traduction juridique aveugle.
- Conserver la numérotation SER, l'arborescence existante, les noms de guide et les produits déjà existants. Si une fiche Shopify active n'a pas son fichier livré, traiter la correction en priorité et **alerter**.

## 9. Processus de production approuvé
1. Contrôler la boutique Shopify (produits réellement actifs) et le dépôt GitHub (fichiers, numéro, statut, livraisons).
2. Sélectionner **un seul prochain guide incomplet** dans l'ordre existant ; ne pas créer de doublon.
3. Rechercher, constituer BRIEF, plan et pack de sources datées ; vérifier la qualité de la demande et les concurrents.
4. Rédiger un contenu dense et utile, avec au moins un outil, calculateur, template ou procédure propre au sujet quand pertinent.
5. Appliquer cette charte : couverture 4:5, deck visuel, gabarit intérieur, accent catégoriel.
6. Exécuter vérifications techniques, liens officiels, accessibilité, lisibilité miniature, tests mobiles, calculs, téléchargement et délivrabilité.
7. Commiter sur **une branche dédiée** et ouvrir une **pull request en brouillon**, avec aperçu, sources et liste des validations nécessaires.
8. **Ne pas fusionner, modifier les prix, publier dans Shopify, déclencher de vente ou livrer automatiquement sans validation explicite de l'utilisateur.**
9. Si une étape est bloquée, fournir le blocage et le prochain geste unique ; ne pas présenter un brouillon comme « publié ».

## 10. Checklist avant toute mise en vente
- [ ] Numéro/titre/slug cohérents entre GitHub, Shopify et fichier livré
- [ ] Sources officielles récentes et liens fonctionnels
- [ ] Aucune statistique, législation ou promesse non vérifiée
- [ ] Couverture mobile lisible et conforme à la famille SER
- [ ] Outils interactifs testés avec entrées limites
- [ ] Navigation, progression, clavier et affichage mobile OK
- [ ] HTML autonome et accès privé hors indexation
- [ ] Aucun élément protégé utilisé sans droit
- [ ] Visuels boutique prêts et alignés
- [ ] Page produit exacte et livraison testée sans paiement réel
- [ ] Aucune publication/prix modifié sans approbation explicite

## 11. Gouvernance
Ce document est la référence canonique : `docs/CHARTE_GRAPHIQUE_SER_GUIDES.md`.
Toute évolution visuelle doit être versionnée et comparée avec les guides existants. Les anciens guides sont conservés par défaut ; harmonisation rétroactive seulement sur demande.
