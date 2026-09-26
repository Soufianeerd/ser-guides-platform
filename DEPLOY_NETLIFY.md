# Déploiement SER Guides — Netlify

Domaine cible : **https://serguides.fr**

## État du dépôt

Le dépôt est préparé pour un déploiement Next.js sur Netlify :

- `netlify.toml` présent
- Node 20
- build : `npm run build`
- publish : `.next`
- CI GitHub : typecheck + build
- metadata canonical : `https://serguides.fr`
- `robots.txt` généré par Next
- `sitemap.xml` généré par Next

## Connexion Netlify

Dans Netlify :

1. Add new project / Import an existing project.
2. Git provider : GitHub.
3. Repository : `Soufianeerd/ser-guides-platform`.
4. Branch : `main`.
5. Netlify doit lire `netlify.toml`.
6. Lancer le déploiement.

## Variables d'environnement

Le site vitrine peut builder sans les intégrations encore inactives, mais les fonctions correspondantes nécessitent ensuite :

```
NEXT_PUBLIC_GUIDE_01_CHECKOUT_URL
NEXT_PUBLIC_NEON_AUTH_URL
DATABASE_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
RESEND_API_KEY
```

Ne jamais committer leurs valeurs.

Le checkout Guide 01 est actuellement aussi référencé dans `data/guides.ts`.

## Domaine

Ajouter dans Netlify :

- `serguides.fr`
- `www.serguides.fr`

Choisir `serguides.fr` comme domaine principal.

Si le DNS reste chez un registrar externe, utiliser **les valeurs DNS affichées par Netlify dans Domain management**, car elles peuvent dépendre de la configuration du site / réseau. Ne pas copier une valeur ancienne depuis un tutoriel.

Lorsque Netlify valide le DNS :

- activer / vérifier HTTPS ;
- attendre le certificat ;
- vérifier redirection www ↔ domaine principal.

## Smoke test après mise en ligne

Tester :

- `/` → redirection vers `/fr`
- `/fr`
- `/en`
- `/fr/guides`
- `/fr/guides/micro-entreprise-2026`
- `/connexion`
- `/compte`
- `/robots.txt`
- `/sitemap.xml`

Puis vérifier :

- mobile
- tablette
- desktop
- liens checkout
- images Guide 01
- changement FR / EN
- navigation catalogue
- absence d'erreur console majeure

## Auth

L'interface de connexion existe mais reste en mode dégradé tant que `NEXT_PUBLIC_NEON_AUTH_URL` n'est pas configurée avec un endpoint Neon Auth fonctionnel.

## Base de données

`db/migrations/001_ser_library.sql` est préparée mais ne doit pas être appliquée automatiquement sans revue.

## Règle

Un déploiement Netlify réussi ne signifie pas que toutes les intégrations métier sont terminées. La landing/catalogue peuvent être publiés avant l'auth et la bibliothèque finale, à condition de ne pas présenter ces fonctions comme actives lorsqu'elles ne le sont pas.
