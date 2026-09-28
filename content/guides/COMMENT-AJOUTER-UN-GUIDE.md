# Comment ajouter un guide et le mettre en ligne sur serguides.fr

Exemple : SER 03, dossier `ser-03-tiktok-shop-2026`, slug du site `tiktok-shop-2026`.

## 0. Toujours partir de la version à jour
```bash
cd ~/ser-guides-platform
git checkout main && git pull
git checkout -b guide-03-tiktok-shop
```

## 1. Préparer le dossier
Le dossier existe déjà pour les guides 03 à 15. Sinon : `cp -R content/guides/_modele content/guides/ser-NN-<slug>`.
Copier le modèle dans le guide :
```bash
cp -R content/guides/_modele/contenu/. content/guides/ser-03-tiktok-shop-2026/contenu/
```
Remplir le `README.md` (statut « en préparation », niveau, prix prévu).

## 2. Rédiger (Markdown)
- Brief + plan : `sources/BRIEF.md`, `sources/BOOK_MAP.md`
- Sources vérifiées (niveau A d'abord, cf. handoff §7) : `sources/SOURCE_PACK.md`
- Un fichier par chapitre dans `contenu/chapitres/`, en suivant `00-chapitre-modele.md`
  (Objectif · Pourquoi · Action immédiate · Outils · Liens directs · Vidéo · Exemple · Erreur fréquente · Checkpoint · Validation)
- Cible : 28 à 32 écrans, 35 maximum (handoff §5). Aucune consigne interne visible par le lecteur.

## 3. Produire le web-book (format du Guide 01)
Renommer `contenu/guide.html` en `contenu/SER-Guide-03-TikTok-Shop-2026.html`, puis :
- remplacer tous les `{{…}}` — `grep -n "{{" contenu/*.html` doit être vide ;
- couleurs de la niche : modifier uniquement `:root` dans le `<style>` ;
- `GUIDE_KEY` unique (`serGuide03`), `PROFILS`, `NIVEAUX`, `reglesPlan()` dans le `<script>` ;
- un chapitre = `<article class="chap" data-t="Titre du sommaire">` ;
- contenu adapté : `data-profils="profilA"`, `data-niveaux="debutant"`, `<b data-champ="cle">` ;
- fichier unique autonome (images en `data:` URI, sources dans `images/`, prompts dans `prompts-images/`) ;
- tester : parcours complet sur mobile et ordinateur, rechargement (reprise au même chapitre), console sans erreur.

## 4. Pack Instagram (handoff §11)
3 visuels 1080×1350 (hook · valeur · produit) + légende dans `promo/`.
Pour la publication automatique : dépôt séparé `ser-module/` (niche, `posts/queue.json` en `ready`, `python ser.py validate` puis `dry-run`).

## 5. Mettre en vente
1. **Stripe** : créer le produit et un Payment Link LIVE.
2. **Livraison** : la fonction Neon → Resend est câblée pour le Guide 01 (`GUIDE_ATTACHMENT_URL`, sujet et nom de fichier fixes). L'adapter pour choisir le fichier selon le produit Stripe. Ne jamais mettre le e-book dans `public/`.
3. **Catalogue** — `data/guides.ts` :
   - ajouter une entrée dans `guides` :
     `{slug:'tiktok-shop-2026',number:'03',category:{fr:'…',en:'…'},title:{fr:'…',en:'…'},description:{fr:'…',en:'…'},price:'…',edition:'2026',available:true,checkout:'https://buy.stripe.com/…',deck:{fr:['/guides/tiktok-shop-2026/fr/01-hook.png', …]}}`
   - retirer le guide de `plannedGuides`.
   La fiche `/fr/guides/tiktok-shop-2026` et `/en/…` est générée automatiquement par `app/[locale]/guides/[slug]/page.tsx`.
4. **Visuels de la fiche** : copier les 3 visuels dans `public/guides/tiktok-shop-2026/fr/`.
5. **Vérifier** : `npm install && npm run check` (typecheck + build), puis `npm run dev` et tester la fiche, le bouton d'achat et un paiement TEST.
6. Mettre le `README.md` du guide à « en ligne » (prix, date) et la ligne de `content/guides/README.md`.

## 6. Publier
```bash
git add content/guides/ser-03-tiktok-shop-2026 data/guides.ts public/guides/tiktok-shop-2026
git commit -m "content: publier SER Guide 03 TikTok Shop"
git push -u origin guide-03-tiktok-shop
```
Ouvrir une pull request : la CI GitHub vérifie typecheck + build. Après fusion dans `main`, Netlify déploie automatiquement.
