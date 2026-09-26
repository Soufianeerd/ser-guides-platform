# SER GUIDES — HANDOFF MAÎTRE COMPLET POUR CLAUDE / TOUT NOUVEL AGENT

**Version : 26 septembre 2026**  
**Statut : document de transmission principal**  
**Objectif : permettre à un nouvel agent (Claude, ChatGPT, développeur, designer, growth marketer, etc.) de comprendre immédiatement l’ensemble du projet SER Guides, ce qui existe déjà, ce qui a été testé, ce qui est encore en chantier, les règles de production des e-books, l’architecture technique, l’automatisation Instagram, la stratégie commerciale et les priorités.**

> IMPORTANT : ce document distingue volontairement :
>
> - **[VERIFIÉ GITHUB]** = existe actuellement dans un dépôt GitHub et a été relu.
> - **[VALIDÉ / DÉCISION PRODUIT]** = décision prise pendant le travail, même si tout n’est pas encore commité.
> - **[TESTÉ EXTERNE]** = testé dans Stripe / Neon / Resend / autre service externe.
> - **[À FAIRE / NON COMMITÉ]** = produit ou décidé mais pas encore intégré proprement au dépôt principal.
>
> Ne jamais supposer qu’un fichier généré localement ou dans une conversation est présent dans GitHub si ce document dit explicitement le contraire.

---

# 1. VISION GLOBALE

SER Guides doit devenir une **plateforme / bibliothèque de produits digitaux guidés**, pas un simple site vendant des PDF.

La vision cible est :

**Instagram / contenu social → landing SER Guides → fiche guide → paiement → livraison → compte client → bibliothèque personnelle → lecture interactive → progression → recommandations contextuelles vers d’autres guides → éventuellement logiciels / services SER.**

Le produit n’est pas « un PDF joli ».  
Le produit est un **compagnon pratique extrêmement actionnable**, compact, crédible, humain, interactif et orienté résultat.

Chaque guide doit pouvoir partir d’un sujet aussi différent que :

- lancer une boutique Shopify ;
- apprendre le chinois ;
- démonter une console ;
- s’habiller ;
- réparer un robinet ;
- gérer une démarche administrative ;
- progresser en photo ;
- comprendre sa fiscalité ;
- apprendre un instrument ;
- entretenir une voiture ;
- vendre sur Vinted.

Le sujet change, **le moteur SER reste le même**.

---

# 2. DÉPÔTS GITHUB À LIRE EN PRIORITÉ

## 2.1 Dépôt principal — plateforme commerciale

**[VERIFIÉ GITHUB]**

Repository :

https://github.com/Soufianeerd/ser-guides-platform

Clone :

```bash
git clone https://github.com/Soufianeerd/ser-guides-platform.git
```

Visibilité au 26/09/2026 : **privé**.

C’est le dépôt principal pour :

- landing page ;
- catalogue ;
- fiches produits ;
- bilingue FR/EN ;
- futur espace client ;
- connexion / authentification ;
- bibliothèque acheteur ;
- intégration Stripe ;
- stockage des contenus de production récents ;
- futur pont vers l’Optimisateur fiscal.

Technologie actuelle :

- Next.js App Router ;
- TypeScript ;
- React ;
- Neon Postgres ;
- Stripe ;
- Better Auth (scaffolding) ;
- CSS custom.

Fichiers importants :

```
README.md
.env.example
data/guides.ts
data/dictionaries.ts
components/GuideDeck.tsx
components/HomeGuideCarousel.tsx
components/LanguageSwitch.tsx
components/PremiumHeader.tsx
components/AuthPanel.tsx
components/AccountClient.tsx
components/LibraryExplorer.tsx
lib/auth-client.ts
app/[locale]/page.tsx
app/[locale]/guides/
app/[locale]/applications/optimisateur-fiscal/page.tsx
app/connexion/page.tsx
app/compte/page.tsx
db/migrations/001_ser_library.sql
content/guides/ser-02-ecommerce-shopify-2026/
public/guides/micro-entreprise-2026/fr/
```

---

## 2.2 Dépôt moteur / catalogue SER

**[VERIFIÉ GITHUB]**

Repository :

https://github.com/Soufianeerd/SER-Module

Clone :

```bash
git clone https://github.com/Soufianeerd/SER-Module.git
```

Visibilité au 26/09/2026 : **public**.

Ce dépôt contient :

- le moteur autonome SER de publication Instagram ;
- le catalogue historique des 15 niches ;
- la version finale du Guide 01 ;
- les règles de création de carrousel ;
- le **cahier des charges maître universel SER Guides** ;
- les files de publication Instagram ;
- les palettes / typos / objets de chaque niche ;
- la logique de sécurité empêchant la publication des contenus en draft.

Fichier canonique absolument obligatoire à lire :

```
MASTER_CAHIER_DES_CHARGES_SER_GUIDES.md
```

C’est la **référence universelle** de production des futurs guides.

Autres fichiers majeurs :

```
README.md
ser.py
config/catalog.json
state/history.json
.github/workflows/publish.yml
niches/<id>/ebook/
niches/<id>/posts/queue.json
niches/<id>/creative/visual.json
niches/<id>/slides/
```

---

## 2.3 Dépôt historique d’automatisation Instagram

**[VERIFIÉ GITHUB]**

Repository :

https://github.com/Soufianeerd/insta-auto

Clone :

```bash
git clone https://github.com/Soufianeerd/insta-auto.git
```

Visibilité au 26/09/2026 : **public**.

Ce dépôt est l’ancien / autre moteur de publication Instagram multi-niches.

Il contient notamment :

- génération de contenus ;
- Cloudinary ;
- publication via Meta Graph API ;
- historique anti-répétition ;
- GitHub Actions ;
- niches arabe / maths / langues / etc. ;
- `publier.py` ;
- `renouveler_token.py` ;
- `.github/workflows/publier.yml`.

**Important : SER-Module a été conçu comme module autonome et ne dépend pas techniquement de ce dépôt.**  
Mais `insta-auto` reste utile comme référence d’automatisation et de mécanique de publication.

---

# 3. QUEL DÉPÔT EST LA SOURCE DE VÉRITÉ ?

Il n’existe pas encore un mono-repo unique.

La situation actuelle est :

### Source commerciale / produit web
`ser-guides-platform`

### Source moteur SER / règles universelles / Guide 01 / publication sociale
`SER-Module`

### Référence historique Instagram
`insta-auto`

À terme, la recommandation est de considérer :

**ser-guides-platform = produit commercial principal**  
**SER-Module = moteur éditorial / production / automation**

Ne pas continuer à disperser de nouveaux fichiers entre plusieurs repos sans documenter clairement leur rôle.

---

# 4. POSITIONNEMENT PRODUIT SER GUIDES

## 4.1 Ce qu’un guide SER n’est PAS

Un guide SER ne doit jamais être :

- un simple PDF de texte ;
- une compilation de généralités ;
- une reformulation de ChatGPT ;
- une encyclopédie de 100 pages ;
- un contenu « inspiration » sans actions ;
- un catalogue de liens sans accompagnement ;
- une DA « IA / LLM / tech futuriste » générique ;
- un produit bourré de jargon ;
- un cours théorique sans résultat final ;
- un guide qui fait la promotion d’autres guides au hasard.

## 4.2 Ce qu’un guide SER doit être

Un SER Guide est :

- compact ;
- pratique ;
- interactif ;
- guidé ;
- premium ;
- humain ;
- actuel ;
- sourcé ;
- orienté résultat ;
- mobile-first ;
- utilisable sans compétence particulière ;
- suffisamment utile pour justifier son prix sans artifices.

La phrase centrale est :

> **Comprendre → vérifier → agir → obtenir un résultat.**

---

# 5. FORMAT CANONIQUE D’UN GUIDE

**[VALIDÉ / DÉCISION PRODUIT]**

Cible :

- environ **28 à 32 pages / écrans** ;
- **35 maximum** ;
- ne jamais afficher au client des consignes internes du type « 35 écrans maximum », « tutoriels inclus », « contraintes de production », etc.

Le client ne doit voir que du contenu utile à son parcours.

Le produit principal doit être :

**web-book interactif responsive**

avec en complément :

**export PDF propre**.

Fonctions possibles selon le sujet :

- diagnostic initial ;
- sommaire ;
- progression ;
- checklist persistante ;
- calculateurs ;
- score ;
- todo ;
- comparateurs ;
- branches conditionnelles ;
- liens externes ;
- vidéos ;
- champs de notes ;
- reprise de progression.

Aucune interactivité ne doit être ajoutée uniquement pour faire « impressionnant ».

---

# 6. STRUCTURE PÉDAGOGIQUE STANDARD

Chaque guide doit au minimum comporter :

1. couverture ;
2. promesse / résultat ;
3. cible ;
4. diagnostic express de 3 à 7 questions si pertinent ;
5. roadmap ;
6. parcours étape par étape ;
7. exemples ;
8. erreurs fréquentes ;
9. checklists ;
10. liens fiables ;
11. vidéos réellement utiles ;
12. troubleshooting ;
13. plan d’action ;
14. sources / date de revue ;
15. ponts contextuels vers d’autres SER Guides uniquement si utiles.

Chaque grande étape doit suivre le pattern :

### Objectif
À la fin de cette étape, le lecteur doit avoir obtenu quelque chose.

### Pourquoi
Explication courte.

### Action immédiate
Étapes numérotées.

### Outils
Plateformes / logiciels / services réellement nécessaires.

### Liens directs
Éviter les homepages si une page d’inscription, de configuration ou de documentation plus précise existe.

### Tutoriel / vidéo
Uniquement si la vidéo permet de mieux accomplir l’action.

### Exemple
Résultat attendu.

### Erreur fréquente
Ce qui bloque le plus souvent.

### Checkpoint
« Ne passez pas à la suite tant que… »

### Validation
Case cochable / état terminé.

---

# 7. RECHERCHE OBLIGATOIRE

**[VALIDÉ / DÉCISION PRODUIT]**

Aucun guide ne doit être construit uniquement à partir de la mémoire d’un modèle.

Pour chaque sujet, effectuer une recherche Internet actuelle.

Hiérarchie :

## Niveau A — source primaire

Selon le domaine :

- administration ;
- texte officiel ;
- documentation plateforme ;
- documentation constructeur ;
- université ;
- organisme scientifique ;
- organisme professionnel reconnu ;
- normes ;
- support officiel.

## Niveau B — expertise

- publication spécialisée ;
- expert reconnu ;
- documentation technique ;
- organisme sectoriel.

## Niveau C — signaux utilisateurs / marché

Selon pertinence :

- Google Trends ;
- TikTok Creative Center ;
- Meta Ad Library ;
- YouTube ;
- Reddit ;
- forums ;
- commentaires ;
- marketplaces ;
- avis ;
- FAQ ;
- recherches associées.

Les réseaux et avis servent à comprendre :

- ce que les gens veulent ;
- comment ils formulent leur problème ;
- les objections ;
- les frustrations ;
- les hooks ;
- les tendances.

Ils ne remplacent jamais une source officielle pour une règle fiscale, juridique, sanitaire, technique ou de sécurité.

---

# 8. UI / UX — RÈGLES NON NÉGOCIABLES

## 8.1 Accessibilité multi-interface

Le guide doit fonctionner correctement sur :

- smartphone étroit ;
- iPhone avec safe areas ;
- Android ;
- tablette ;
- iPad ;
- laptop ;
- desktop ;
- grand écran ;
- paysage.

Prévoir :

- zones tactiles suffisantes ;
- texte lisible ;
- scroll horizontal pour tableaux si nécessaire ;
- navigation clavier ;
- focus visible ;
- contraste ;
- réduction d’animation ;
- jamais de largeur figée qui casse mobile.

## 8.2 Aucune information interne visible au client

Ne jamais afficher :

- « 35 écrans maximum » ;
- « nous avons fait X liens » ;
- « contraintes de production » ;
- « QA interne » ;
- nombre de composants ;
- détails d’implémentation.

## 8.3 Repères visuels familiers

Utiliser intelligemment :

- logos ;
- outils ;
- noms de services ;
- interfaces ;
- illustrations réalistes.

Objectif :

> « Je reconnais ça → je comprends où je suis → je reste engagé. »

Les symboles abstraits de catégories doivent être remplacés par des visuels ou pictogrammes réellement compréhensibles.

---

# 9. DESIGN SYSTEM GLOBAL

## ADN SER commun

- premium ;
- propre ;
- éditorial ;
- humain ;
- structuré ;
- cohérent ;
- lisible ;
- chaleureux ;
- peu de bruit visuel.

Typographies favorites :

- Manrope ;
- Inter ;
- IBM Plex Mono pour chiffres / calculateurs.

## Ce qui change par niche

Chaque guide doit avoir sa propre personnalité :

- palette ;
- accent ;
- photographie ;
- objets ;
- ambiance ;
- vocabulaire ;
- outils.

Ne jamais reprendre automatiquement les couleurs d’un autre guide.

Exemple :

### SER 01 Micro-entreprise
- blanc / slate / marine / cyan ;
- univers administratif / business.

### SER 02 E-commerce / Shopify
- crème ;
- beige chaud ;
- graphite ;
- vert commerce ;
- marine SER uniquement comme structure.

Palette cible discutée pour SER 02 :

```
fond principal     #F7F2E8
fond secondaire    #EFE4D2
texte              #202823
structure SER      #0B2136
accent commerce    #5F8D67
vert doux          #E5EFE4
sable              #CDB68F
alerte              #B45D48
cartes             #FFFDF8
```

Cette DA doit évoquer :

- boutique ;
- colis ;
- bureau réel ;
- smartphone ;
- ordinateur ;
- commandes ;
- carnet ;
- carte ;
- sourcing ;
- lumière naturelle.

---

# 10. LOGOS / MARQUES

**[VALIDÉ / DÉCISION PRODUIT]**

Les logos sont des **repères cognitifs**, pas de la décoration.

Pour un guide e-commerce, outils pertinents :

- Shopify ;
- Google Ads ;
- Meta ;
- Facebook ;
- Instagram ;
- TikTok ;
- TikTok Shop ;
- Google Analytics ;
- Google Search Console ;
- Google Merchant Center ;
- Stripe ;
- PayPal ;
- YouTube ;
- Canva si réellement utile ;
- outil email si réellement utilisé.

Règles :

- utiliser les assets officiels si l’usage est autorisé ;
- respecter les brand guidelines ;
- ne jamais déformer ;
- ne pas recolorer arbitrairement ;
- ne jamais suggérer un partenariat ;
- si le logo n’est pas utilisable juridiquement, utiliser un badge texte neutre.

Des SVG de référence ont été récupérés depuis Simple Icons pour certains prototypes, mais cela ne remplace pas la vérification des règles d’usage de marque avant publication commerciale.

---

# 11. PACK INSTAGRAM STANDARD

**[VALIDÉ / DÉCISION PRODUIT]**

Pour chaque SER Guide :

**3 visuels exactement**, cohérents visuellement.

Format principal :

`1080 × 1350 px (4:5)`

## Visuel 01 — HOOK

- stop-scroll ;
- phrase courte ;
- photo / objet lié au sujet ;
- très lisible ;
- esthétique premium ;
- identité SER discrète.

Ce visuel devient aussi :

- couverture du guide sur le site ;
- vignette catalogue ;
- couverture dans « Ma bibliothèque » ;
- éventuellement OG image.

## Visuel 02 — VALEUR

Doit pouvoir être sauvegardé pour son utilité.

Exemples :

- mini-checklist ;
- erreur importante ;
- comparaison ;
- 5 chiffres ;
- méthode ;
- roadmap.

## Visuel 03 — PRODUIT

- nom du guide ;
- bénéfices ;
- CTA ;
- éventuellement prix.

## Caption

Générer automatiquement :

- hook ;
- caption ;
- CTA ;
- alt text ;
- hashtags ;
- lien / UTM prévu.

---

# 12. PONTS ENTRE GUIDES

**[VALIDÉ / DÉCISION PRODUIT]**

Le cross-sell doit être pédagogique avant d’être commercial.

Trois types :

### Prérequis
Le lecteur en a besoin avant d’avancer.

### Complément
Il peut approfondir une partie.

### Étape suivante
C’est la suite logique du résultat obtenu.

Exemple e-commerce :

- Micro-entreprise 2026 au moment de structurer l’activité ;
- Optimisation fiscale au moment où la rentabilité / fiscalité devient pertinente ;
- TikTok Shop lorsqu’on veut développer le canal social commerce.

Exemple langue :

- anglais débutant → conversation ;
- conversation → immersion dans un pays anglophone ;
- espagnol uniquement si cela a réellement un sens pour le profil.

Exemple réparation console :

- démontage → diagnostic électronique ;
- diagnostic → soudure débutant.

Règles :

- 0 à 3 recommandations ;
- jamais au hasard ;
- expliquer pourquoi ;
- afficher « Ouvrir dans ma bibliothèque » si déjà acheté ;
- sinon « Découvrir ce guide ».

---

# 13. ROADMAP COMMERCIALE ACTUELLE — PREMIERS 15 GUIDES

**[VALIDÉ / DÉCISION PRODUIT — CE ROADMAP EST PLUS RÉCENT QUE LE TABLEAU ACTUEL DE data/guides.ts]**

Le lancement ne doit pas commencer par des sujets lifestyle aléatoires.

Les sujets prioritaires sont les sujets à forte intention commerciale / business :

1. **SER 01 — Micro-entreprise 2026**
2. **SER 02 — E-commerce & Shopify 2026 — de zéro aux premières ventes**
3. **SER 03 — TikTok Shop 2026 — lancer sa boutique et obtenir ses premières ventes**
4. **SER 04 — Vinted 2026 — vendre plus vite et mieux marger**
5. **SER 05 — Optimisation fiscale 2026 — payer ce qu’il faut, pas plus**
6. **SER 06 — Dropshipping 2026 France / UE**
7. **SER 07 — TikTok 2026 — construire une audience qui convertit**
8. **SER 08 — Produits digitaux — créer et vendre sans stock**
9. **SER 09 — Etsy 2026 — lancer une boutique rentable**
10. **SER 10 — UGC Creator — décrocher ses premières collaborations**
11. **SER 11 — Instagram & Reels — transformer du contenu en clients**
12. **SER 12 — Freelance — trouver ses 10 premiers clients**
13. **SER 13 — IA & automatisation pour indépendant**
14. **SER 14 — Trouver un produit à vendre — sourcing & validation**
15. **SER 15 — Créer une marque sans stock — Print-on-Demand**

Ce batch de 15 est un **lancement**, pas une limite.

Chaque cluster peut ensuite engendrer des dizaines de guides plus spécialisés.

### Attention : incohérence actuelle

Le fichier `data/guides.ts` du repo principal contient encore une roadmap plus ancienne pour les guides 06–15.

Il faut donc **mettre data/guides.ts à jour** avant de considérer le catalogue comme source de vérité stratégique.

---

# 14. 15 GRANDES CATÉGORIES CATALOGUE ACTUELLES DANS LA PLATEFORME

**[VERIFIÉ GITHUB]**

Dans `ser-guides-platform/data/guides.ts` :

1. Entreprise & Business
2. E-commerce & Réseaux sociaux
3. Administratif & Fiscalité
4. Immobilier & Maison
5. Tech & Informatique
6. Auto & Mobilité
7. Revente & Seconde main
8. Santé & Bien-être
9. Famille & Éducation
10. Loisirs & Création
11. Animaux
12. Emploi & Carrière
13. Argent & Budget
14. Voyage & Expatriation
15. Langues & Compétences

Ces catégories représentent la **bibliothèque long terme**.

Ne pas confondre :

- **15 catégories**
- **15 premiers guides commerciaux**

---

# 15. ANCIEN CATALOGUE 15 NICHES DE SER-MODULE

**[VERIFIÉ GITHUB]**

Dans `SER-Module/config/catalog.json`, il existe un catalogue historique de production :

1. administratif-fiscal — Micro-entreprise 2026
2. reparation-tech — Diagnostiquer et réparer son appareil
3. bricolage-renovation — Rénover sans improviser
4. mecanique-auto — Diagnostiquer avant de remplacer
5. fitness-transformation — Challenge 75 jours
6. jardinage-potager — Potager adapté à ta région
7. immobilier-location — Louer, louer mieux, éviter les erreurs
8. informatique-domestique — Réparer et sécuriser son ordinateur
9. parental-scolaire — Démarches scolaires sans stress
10. animaux — Comprendre son animal, agir au bon moment
11. cuisine-contraintes — Manger mieux avec ses contraintes
12. langues — Apprendre une langue par niveau
13. revente-business — Acheter, revendre, calculer sa marge
14. musique-autodidacte — Apprendre un instrument en autonomie
15. photo-video-smartphone — Créer de meilleures images avec son téléphone

Ce catalogue reste utile pour :

- palettes ;
- familles visuelles ;
- architecture de niche ;
- exploration long terme.

Mais il **ne correspond pas à la roadmap commerciale de lancement la plus récente**.

---

# 16. SER GUIDE 01 — MICRO-ENTREPRISE 2026

## Statut

**[VERIFIÉ GITHUB + TESTÉ EXTERNE]**

Guide 01 est le premier produit réellement livré de bout en bout.

Prix confirmé :

**12,99 €**

Checkout actuellement présent dans le repo :

`https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06`

Statut e-book dans `SER-Module` :

`final`

Format :

`web-book interactif`

Objectif :

> Créer, optimiser et déclarer une micro-entreprise sans rater les décisions importantes avant l’action.

DA :

- background : `#F8FAFC`
- text : `#1E293B`
- structure : `#0F172A`
- accent : `#06B6D4`

Fonts :

- Manrope ;
- Inter ;
- IBM Plex Mono.

Objets :

- laptop ;
- smartphone ;
- documents fiscaux ;
- carnet ;
- stylo ;
- livres business.

## Visuels

**[VERIFIÉ GITHUB]**

Dans le repo principal :

```
public/guides/micro-entreprise-2026/fr/01-hook.png
public/guides/micro-entreprise-2026/fr/02-sources.png
public/guides/micro-entreprise-2026/fr/03-guide.png
```

Le premier visuel est le hook / cover.

## Queue Instagram SER-Module

**[VERIFIÉ GITHUB]**

Post ready :

`p27-premium`

Hook :

> Le vrai bon réflexe : vérifier les sources avant de suivre un TikTok fiscal.

Sources mises en avant :

- Urssaf ;
- impots.gouv.fr ;
- France Travail / Service Public.

## Paiement / livraison

**[TESTÉ EXTERNE]**

Le flow suivant a déjà fonctionné :

**Stripe test → webhook → Neon Function → Resend → réception réelle du Guide 01**

Ne pas casser ce pipeline pendant la refonte.

---

# 17. SER GUIDE 02 — E-COMMERCE & SHOPIFY 2026

## Objectif

Faire passer une personne de :

**idée / envie de vendre**

à :

**boutique cohérente, configurée, conforme, mesurable, avec un plan concret d’acquisition et de premières ventes.**

Pas de promesse « devenir riche ».

## DA validée

Famille :

**Commerce éditorial premium**

Palette :

- crème ;
- beige chaud ;
- graphite ;
- vert commerce ;
- marine SER comme structure.

Objets :

- laptop boutique ;
- cartons ;
- étiquettes ;
- smartphone ;
- carnet de commandes ;
- carte ;
- bureau réel ;
- lumière naturelle.

## Hook Instagram proposé

> **Une boutique Shopify ne vend pas parce qu’elle est jolie.**

## Visuel valeur

Les 5 chiffres à connaître avant lancement :

- prix ;
- coût produit ;
- coût livraison ;
- marge ;
- CAC cible.

## Structure contenu actuelle dans GitHub

**[VERIFIÉ GITHUB]**

```
content/guides/ser-02-ecommerce-shopify-2026/
  BRIEF.md
  manifest.json
  SOURCE_PACK.md
  BOOK_MAP.md
  ebook.md
  chapters/
```

Le manifest GitHub dit encore :

`status: content-v1-complete`

17 chapitres.

Contenu :

- diagnostic ;
- validation produit ;
- modèles ;
- marge ;
- sourcing ;
- Shopify ;
- conversion ;
- paiement ;
- SAV ;
- conformité ;
- TVA / douane ;
- acquisition ;
- UGC ;
- ads ;
- email ;
- analytics ;
- plan 30 jours ;
- templates.

## Très important : versions GOLD

**[À FAIRE / NON COMMITÉ AU DERNIER CONTRÔLE]**

Plusieurs versions HTML/PDF ont été générées pendant la conversation :

- `SER-Guide-02-Ecommerce-Shopify-2026-GOLD.html`
- `SER-Guide-02-Ecommerce-Shopify-2026-GOLD.pdf`
- `SER-Guide-02-Ecommerce-Shopify-2026-GOLD-V2.html`
- versions précédentes MASTER / PREMIUM / FINAL / RESPONSIVE.

La version la plus récente est la logique **GOLD-V2**, avec :

- suppression des textes internes visibles au client ;
- responsive renforcé ;
- symboles moins abstraits ;
- logos d’outils ;
- meilleure DA commerce.

**Au dernier audit, ces fichiers GOLD/V2 n’étaient PAS présents dans GitHub.**

Avant de poursuivre le Guide 03, il faut :

1. récupérer / reconstruire la meilleure version GOLD-V2 ;
2. la relire ;
3. la QA ;
4. la commiter dans le repo principal ;
5. supprimer / archiver les anciennes variantes pour éviter la confusion.

---

# 18. INFRASTRUCTURE STRIPE / NEON / RESEND

## Stripe

**[TESTÉ EXTERNE]**

Guide 01 :

- prix : 12,99 € ;
- checkout présent dans GitHub ;
- paiement test validé.

Le projet doit évoluer vers :

- produit par guide ;
- price id par guide ;
- webhook idempotent ;
- ordre ;
- entitlement ;
- library access ;
- lien signé.

## Neon

**[TESTÉ EXTERNE / PRÉPARÉ]**

Projet utilisé pour livraison :

`ser-guides-delivery`

Projet id :

`dawn-fire-56182114`

Branche principale :

`main`

Branch id connu :

`br-withered-band-b2nj5p9x`

Fonctions utilisées / préparées :

- `serdelivery`
- `serdeliverytest`

Une URL test de fonction a été utilisée pendant la validation.

Ne jamais inclure de secrets dans GitHub.

## Resend

**[TESTÉ EXTERNE]**

Domaine d’envoi vérifié :

`mail.serguides.fr`

Sender :

`SER Guides <guides@mail.serguides.fr>`

Alias template Guide 01 :

`ser-guide-01-delivery`

Template ID connu :

`43b77327-318d-4a4d-abbe-8776704383d4`

La livraison réelle du Guide 01 a fonctionné.

## Secrets utilisés

Ne jamais committer leurs valeurs.

Variables attendues :

```
DATABASE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
RESEND_API_KEY
NEXT_PUBLIC_GUIDE_01_CHECKOUT_URL
NEXT_PUBLIC_NEON_AUTH_URL
```

Dans les fonctions externes, un `GUIDE_ATTACHMENT_URL` a aussi été utilisé pendant le test.

---

# 19. BASE DE DONNÉES / BIBLIOTHÈQUE CLIENT

**[VERIFIÉ GITHUB — MIGRATION NON APPLIQUÉE]**

Fichier :

`db/migrations/001_ser_library.sql`

Tables prévues :

## ser_orders

- stripe_session_id ;
- buyer_email ;
- guide_slug ;
- amount_total ;
- currency ;
- payment_status ;
- created_at.

## ser_entitlements

- user_email ;
- guide_slug ;
- stripe_session_id ;
- granted_at ;
- revoked_at.

## ser_benefits

Prévu pour les avantages liés à l’achat d’un guide :

- user_email ;
- benefit_code ;
- source_guide_slug ;
- status ;
- granted_at ;
- used_at.

Exemple d’usage :

un acheteur d’un SER Guide peut obtenir un avantage sur un logiciel SER.

**Important : migration préparée mais pas appliquée au dernier état vérifié.**

---

# 20. AUTH / ESPACE CLIENT

**[VERIFIÉ GITHUB — SCAFFOLDING, PAS FINALISÉ]**

Fichiers :

```
lib/auth-client.ts
components/AuthPanel.tsx
components/AccountClient.tsx
app/connexion/page.tsx
app/compte/page.tsx
```

Dépendance :

`better-auth`

Configuration prévue :

`NEXT_PUBLIC_NEON_AUTH_URL`

Neon Auth n’était pas encore complètement provisionné / validé au dernier état.

Ne pas présenter la connexion comme « production ready » avant test réel.

---

# 21. LANDING PAGE / IDENTITÉ DU SITE

**[VALIDÉ / DÉCISION PRODUIT]**

Direction approuvée :

- crème ;
- beige ;
- bibliothèque premium ;
- Stripe-clean ;
- Amazon-like pour découverte des guides ;
- humain / éditorial ;
- photo réelle / lifestyle ;
- pas de look IA.

Éléments voulus :

- SER Guides en haut ;
- tagline du type « Des guides clairs pour une vie plus simple » ;
- nav Guides / À propos / Blog / Mon espace ;
- FR / EN ;
- connexion ;
- hero réaliste avec bureau / livres / laptop ;
- promesse concrète ;
- confiance ;
- carousel guides ;
- catégories ;
- social proof ;
- CTA.

La landing doit vendre une **bibliothèque**, pas un guide unique.

---

# 22. BILINGUE

**[VERIFIÉ GITHUB / DÉCISION PRODUIT]**

La plateforme possède une structure `/[locale]` avec FR / EN.

Chaque futur guide doit être conçu pour pouvoir exister en :

- français d’abord ;
- anglais ensuite si pertinent.

Ne pas traduire mécaniquement les démarches françaises dans une version EN internationale.

Quand le contenu dépend du pays :

- contextualiser ;
- adapter ;
- ou limiter explicitement le scope.

---

# 23. OPTIMISATEUR FISCAL — PRODUIT LOGICIEL CONNEXE

**[VALIDÉ / DÉCISION PRODUIT — ENCORE EN PROJET]**

SER Guides doit pouvoir alimenter un futur logiciel :

**Optimisateur fiscal / Fiscal & Legal OS**

Vision :

- fiscal ;
- comptable ;
- juridique ;
- finance ;
- dispositifs sociaux / aides ;
- règles versionnées ;
- sources ;
- calculs ;
- procédures ;
- recommandations basées sur contexte ;
- support utile aux particuliers, indépendants / TPE et professionnels.

Une route existe déjà :

`app/[locale]/applications/optimisateur-fiscal/page.tsx`

## Tarification envisagée

Base discutée :

- 14,99 €/mois ;
- 19,99 €/mois ;
- 24,99 €/mois.

Avantages SER Guides discutés :

- 14,99 → 12,99 ;
- 19,99 → 17,99 ;
- 24,99 → **20,00** pour créer une offre premium plus attractive.

Cette logique est **proposée**, pas nécessairement tarification finale de production.

Le benefit system `ser_benefits` est prévu pour ce type d’avantage.

---

# 24. AUTOMATISATION INSTAGRAM — SER-MODULE

**[VERIFIÉ GITHUB]**

Le moteur :

`SER-Module/ser.py`

Fonctionnement :

- charge le catalogue ;
- lit les queues de posts ;
- ne sélectionne que les posts `ready` ;
- vérifie que toutes les slides existent ;
- évite les posts déjà publiés ;
- upload les images vers Cloudinary ;
- crée un carousel via Meta / Instagram Graph API ;
- stocke l’historique.

Commandes :

```bash
python ser.py validate
python ser.py list
python ser.py dry-run --niche administratif-fiscal
python ser.py publish --niche administratif-fiscal
```

Secrets attendus :

```
IG_USER_ID_MRLIPTN
IG_TOKEN_MRLIPTN
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

Ne jamais committer ces valeurs.

## Règle de sécurité

Publication autorisée uniquement si :

- status = `ready` ;
- toutes les slides existent ;
- post non déjà publié.

C’est une règle à conserver.

---

# 25. AUTOMATISATION HISTORIQUE insta-auto

**[VERIFIÉ GITHUB]**

Le repo `insta-auto` utilise :

- Python ;
- Cloudinary ;
- Meta Graph API ;
- GitHub Actions ;
- historiques ;
- génération d’images / slides.

Workflow historique :

`.github/workflows/publier.yml`

Créneaux historiques utilisés :

- matin ;
- midi ;
- soir.

Le code note explicitement l’impact du changement heure d’été / hiver.

Ce moteur possède des niches historiques arabe / maths / etc.

SER Guides doit éviter de recréer les défauts de l’ancien système :

- contenu aléatoire sans lien commercial ;
- multiplication de comptes sans produit solide ;
- publication avant validation du produit.

---

# 26. COMMERCIALISATION

## Objectif

Construire une bibliothèque dans laquelle un acheteur peut :

1. découvrir un problème ;
2. acheter un guide ;
3. obtenir un résultat ;
4. acheter naturellement un guide complémentaire ;
5. éventuellement adopter un logiciel SER.

## Principes

- pas de cross-sell forcé ;
- valeur réelle avant vente suivante ;
- guides qui se répondent ;
- historique achats ;
- bibliothèque ;
- recommandations contextuelles ;
- possibilité bundles plus tard ;
- possibilité abonnement bibliothèque plus tard, mais non validé actuellement.

## Prix

### Confirmé

SER Guide 01 :

**12,99 €**

### Non fixé définitivement

Guide 02 et suivants : à fixer guide par guide / selon stratégie.

Ne pas inventer un prix simplement parce que le Guide 01 vaut 12,99 €.

---

# 27. QUALITÉ VISUELLE DES 3 VISUELS

Le style attendu n’est pas :

- « AI generated tech » ;
- abstrait ;
- robot ;
- neon futuriste ;
- icônes incompréhensibles.

Le style attendu :

- photo / composition réaliste ;
- objets métiers ;
- texture ;
- profondeur ;
- scène de bureau ;
- matières ;
- vraie lumière ;
- éléments humains ;
- typographie premium ;
- accent niche.

Le Visuel 01 doit rester reconnaissable dans :

- Instagram ;
- catalogue ;
- fiche produit ;
- bibliothèque ;
- carousel home.

---

# 28. SOURCES / VIDÉOS DANS LES GUIDES

Chaque guide doit proposer :

- liens officiels ;
- inscriptions ;
- dashboards ;
- documentation ;
- formulaires ;
- simulateurs ;
- tutoriels.

Les vidéos doivent être :

- récentes si l’interface évolue ;
- officielles ou crédibles ;
- réellement utiles ;
- 2 à 6 maximum en général.

Pour une vidéo, préciser idéalement :

- auteur / chaîne ;
- objectif ;
- durée ;
- date ;
- timestamp utile ;
- lien.

Ne pas remplir le guide de vidéos.

---

# 29. PSYCHOLOGIE DU PRODUIT

Un bon SER Guide doit empêcher l’abandon par la clarté.

Principes :

## Early win
Résultat / décision utile dans les premières minutes.

## Chunking
Une page = une décision principale.

## Familiarité
Logos et interfaces connues.

## Progression visible
Toujours savoir où on en est.

## Action fréquente
Toutes les 1–2 pages :

- cocher ;
- cliquer ;
- calculer ;
- décider ;
- vérifier ;
- faire.

## Charge mentale
Ne pas présenter 20 décisions simultanément.

---

# 30. RESPONSIVE / ACCESSIBILITÉ

**[VALIDÉ APRÈS FEEDBACK]**

Tout guide doit être conçu pour toutes tailles.

Minimum :

- responsive réel ;
- safe areas ;
- boutons tactiles ;
- navigation clavier ;
- focus ;
- contraste ;
- alt text ;
- pas uniquement la couleur ;
- tableaux scrollables ;
- landscape support ;
- `prefers-reduced-motion`.

Ne plus jamais afficher dans le guide des textes internes comme :

> « 35 écrans maximum · liens & tutoriels inclus »

Ce type de texte est une contrainte interne, pas du contenu client.

---

# 31. FICHIERS ET ÉTAT DU GUIDE 02 À NE PAS CONFONDRE

Versions produites au fil des itérations :

- V1 ;
- PREMIUM ;
- MASTER ;
- FINAL ;
- SER01-FORMAT ;
- GOLD ;
- GOLD-RESPONSIVE ;
- GOLD-V2.

Ne pas considérer toutes ces variantes comme produits à conserver.

La logique cible est :

**une seule version canonique du Guide 02**.

Le fichier final à intégrer dans GitHub doit :

- être responsive ;
- suivre la DA commerce ;
- garder le meilleur contenu ;
- avoir les logos utiles ;
- ne contenir aucune instruction interne ;
- être QA ;
- produire PDF ≤ 35 pages.

---

# 32. GUIDE 02 — LIENS AVEC LES AUTRES PRODUITS

À utiliser contextuellement :

### Création / statut
→ SER Guide 01 Micro-entreprise

### Rentabilité / fiscalité
→ SER Guide 05 Optimisation fiscale

### Canal social commerce
→ SER Guide 03 TikTok Shop

Éviter d’afficher tous les guides sur toutes les pages.

---

# 33. GUIDE 02 — PARCOURS CIBLE

Ordre logique recommandé :

1. comprendre son modèle ;
2. choisir stock / POD / dropshipping / digital ;
3. trouver une niche ;
4. valider produit / demande ;
5. calculer économie unitaire ;
6. sourcing ;
7. créer / cadrer l’activité ;
8. créer Shopify ;
9. domaine / identité ;
10. produit / collections ;
11. home ;
12. fiche produit ;
13. paiement ;
14. livraison / retour ;
15. conformité ;
16. test commande ;
17. tracking ;
18. contenu organique ;
19. créateurs / UGC ;
20. pub ;
21. email ;
22. SAV ;
23. analytics ;
24. troubleshooting ;
25. plan 30 jours.

Le guide doit guider l’utilisateur, pas simplement lui donner une liste.

---

# 34. DONNÉES / KPI E-COMMERCE

Le Guide 02 doit enseigner les métriques utiles :

- panier moyen ;
- marge de contribution ;
- taux de conversion ;
- CAC ;
- taux de remboursement ;
- réachat ;
- sessions ;
- ajout panier ;
- checkout ;
- purchase.

Expliquer les relations, pas seulement les définitions.

---

# 35. RÈGLES SUR LA RENTABILITÉ / PROMESSES

Ne jamais promettre :

- revenu garanti ;
- « 10 000 € par mois » ;
- rentabilité automatique ;
- dropshipping facile ;
- viralité ;
- ROI certain.

Les contenus sociaux montrant des résultats financiers peuvent être analysés comme inspiration ou preuve individuelle, mais jamais généralisés sans vérification.

---

# 36. ROADMAP TECHNIQUE COURT TERME

Ordre recommandé :

## P0 — consolider

1. mettre le Guide 02 GOLD-V2 canonique dans GitHub ;
2. nettoyer les anciennes variantes ;
3. mettre à jour `data/guides.ts` avec la vraie roadmap 15 guides ;
4. vérifier landing responsive ;
5. vérifier le catalogue ;
6. finaliser l’auth ;
7. appliquer / revoir la DB entitlements ;
8. créer la vraie fiche produit Guide 02 ;
9. créer le prix Stripe Guide 02 ;
10. brancher livraison / entitlement ;
11. générer les 3 visuels Guide 02 ;
12. tester un achat complet.

## P1 — industrialiser

13. transformer la structure Guide 02 en template ;
14. Guide 03 TikTok Shop ;
15. Guide 04 Vinted ;
16. Guide 05 Optimisation fiscale ;
17. automatiser génération metadata ;
18. automatiser social pack ;
19. automatiser QA liens ;
20. automatiser publication.

---

# 37. FICHIERS QUI FONT AUTORITÉ

Pour un nouvel agent, lire dans cet ordre :

## 1
`SER-Module/MASTER_CAHIER_DES_CHARGES_SER_GUIDES.md`

## 2
`ser-guides-platform/README.md`

## 3
`ser-guides-platform/data/guides.ts`

Mais attention : la roadmap des guides 06–15 y est dépassée.

## 4
`ser-guides-platform/content/guides/ser-02-ecommerce-shopify-2026/BRIEF.md`

## 5
`ser-guides-platform/content/guides/ser-02-ecommerce-shopify-2026/BOOK_MAP.md`

## 6
`ser-guides-platform/content/guides/ser-02-ecommerce-shopify-2026/SOURCE_PACK.md`

## 7
chapters Guide 02

## 8
`SER-Module/config/catalog.json`

## 9
`SER-Module/ser.py`

## 10
`SER-Module/niches/administratif-fiscal/`

## 11
`ser-guides-platform/db/migrations/001_ser_library.sql`

## 12
Auth / account files.

---

# 38. CE QU’IL NE FAUT PAS FAIRE

À tout nouvel agent :

- ne pas recommencer un cahier des charges ;
- ne pas changer arbitrairement les couleurs validées ;
- ne pas produire un PDF texte en premier ;
- ne pas dépasser 35 pages sans raison exceptionnelle et validation ;
- ne pas afficher des contraintes internes au lecteur ;
- ne pas inventer des prix ;
- ne pas inventer des chiffres marché ;
- ne pas inventer des sources ;
- ne pas inventer une affiliation Shopify / Meta / Google ;
- ne pas supposer que l’auth fonctionne en production ;
- ne pas appliquer une migration DB sans revue ;
- ne pas remplacer la roadmap récente par l’ancienne ;
- ne pas faire des ponts vers des guides non pertinents ;
- ne pas générer des visuels « AI tech » ;
- ne pas publier Instagram tant que le post n’est pas READY ;
- ne jamais exposer les secrets.

---

# 39. PROMPT DE DÉMARRAGE POUR CLAUDE

Copier-coller :

> Tu reprends le projet **SER Guides**.
>
> Lis d’abord intégralement :
>
> 1. `CLAUDE_HANDOFF_SER_GUIDES_FULL_CONTEXT.md`
> 2. `SER-Module/MASTER_CAHIER_DES_CHARGES_SER_GUIDES.md`
> 3. les README des repos ;
> 4. `ser-guides-platform/data/guides.ts`
> 5. le dossier complet du Guide 02 ;
> 6. `SER-Module/config/catalog.json`
> 7. le moteur Instagram `SER-Module/ser.py`.
>
> N’invente pas un nouveau positionnement. Respecte les décisions documentées.
>
> SER Guides est une bibliothèque de web-books interactifs premium de 28–32 pages cible, 35 maximum, sourcés, guidés, avec liens, vidéos, todo, checklists, outils, progression et cross-guides contextuels.
>
> Le Guide 01 Micro-entreprise est le premier produit réellement vendu/testé à 12,99 €.
>
> La priorité actuelle est de consolider le **Guide 02 E-commerce & Shopify 2026** comme guide étalon GOLD, puis d’industrialiser les guides 03+.
>
> Avant toute modification, fais un audit de l’état actuel des trois repos et distingue explicitement :
>
> - ce qui existe réellement ;
> - ce qui est décidé mais pas intégré ;
> - ce qui est obsolète ;
> - ce qu’il faut faire ensuite.
>
> Ne redemande pas au propriétaire de réexpliquer le projet si l’information est déjà dans les fichiers.

---

# 40. COMMANDES DE CLONAGE POUR TRANSFERT

```bash
mkdir ser-guides-handoff
cd ser-guides-handoff

git clone https://github.com/Soufianeerd/ser-guides-platform.git
git clone https://github.com/Soufianeerd/SER-Module.git
git clone https://github.com/Soufianeerd/insta-auto.git
```

Attention :

`ser-guides-platform` est privé et nécessite un accès GitHub authentifié.

Les deux autres sont publics au dernier contrôle.

---

# 41. FICHIERS DE CONFIG À NE JAMAIS PARTAGER PUBLIQUEMENT

Ne jamais transmettre :

- vraies valeurs `.env` ;
- Stripe Secret Key ;
- webhook secret ;
- Resend API Key ;
- Neon DATABASE_URL ;
- Instagram access token ;
- Cloudinary secret ;
- toute clé privée.

Il est correct de transmettre :

- `.env.example` ;
- noms des variables ;
- architecture ;
- identifiants publics / non secrets lorsque nécessaires.

---

# 42. ÉTAT ACTUEL — RÉSUMÉ EXÉCUTIF

### Déjà construit

- cahier des charges universel ;
- Guide 01 final ;
- 3 visuels Guide 01 ;
- paiement Guide 01 ;
- livraison email Guide 01 ;
- landing Next.js ;
- catalogue ;
- i18n ;
- espace login scaffolding ;
- bibliothèque scaffolding ;
- DB schema préparé ;
- Guide 02 contenu complet ;
- source pack Guide 02 ;
- plusieurs prototypes Guide 02 ;
- automation Instagram SER ;
- catalogue niches ;
- optimisation fiscale landing prototype.

### Déjà testé

- paiement Stripe test ;
- webhook ;
- Neon Function ;
- Resend ;
- réception réelle du Guide 01.

### Pas encore fini

- Guide 02 canonique commité ;
- auth production ;
- DB entitlements appliquée ;
- bibliothèque production ;
- achat Guide 02 ;
- 3 visuels Guide 02 définitifs ;
- pipeline guide → site → Stripe → library entièrement industrialisé ;
- publication Instagram SER Guides totalement enchaînée ;
- guides 03–15.

---

# 43. OBJECTIF BUSINESS FINAL

Créer un système où :

1. une personne découvre un sujet via Instagram / SEO / partage ;
2. elle reconnaît immédiatement le SER Guide grâce au visuel Hook ;
3. elle arrive sur une fiche cohérente ;
4. elle achète ;
5. elle reçoit le guide ;
6. le guide apparaît dans sa bibliothèque ;
7. elle l’utilise jusqu’au résultat ;
8. le guide lui propose uniquement les prochains guides réellement utiles ;
9. son historique d’achat améliore les recommandations ;
10. certains guides peuvent ouvrir des avantages logiciels ;
11. SER Guides devient une bibliothèque de référence couvrant progressivement des centaines de situations concrètes.

La différenciation ne doit pas reposer sur « beaucoup de contenu ».

Elle doit reposer sur :

- **la qualité du parcours** ;
- **la fiabilité** ;
- **la simplicité** ;
- **l’action immédiate** ;
- **la cohérence entre guides** ;
- **l’automatisation intelligente** ;
- **l’identité premium humaine**.

---

# 44. RÈGLE FINALE

Pour toute nouvelle demande du type :

> « Crée-moi un SER Guide sur [SUJET] »

l’agent doit être capable de partir du sujet seul et d’exécuter :

**recherche → preuve → cible → parcours → DA → contenu → interactivité → liens → vidéos → cross-guides → QA → visuels Instagram → metadata boutique → préparation commercialisation**

sans obliger le propriétaire à répéter les principes de SER Guides.

**SER Guides = comprendre → vérifier → agir → obtenir un résultat.**
