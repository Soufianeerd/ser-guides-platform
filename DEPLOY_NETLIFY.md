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

État observé dans Netlify le 26/09/2026 :

- Netlify subdomain : `ser-guides-platform.netlify.app`
- `serguides.fr` : Primary domain, **Pending DNS verification**
- `www.serguides.fr` : redirect vers le primary, **Pending DNS verification**
- SSL Let's Encrypt : en attente tant que le DNS ne pointe pas correctement vers Netlify

### DNS externe (OVH ou autre registrar)

Pour le réseau Netlify standard :

| Type | Sous-domaine / host | Cible |
|---|---|---|
| A | `@` (ou vide selon l'interface) | `75.2.60.5` |
| CNAME | `www` | `ser-guides-platform.netlify.app` |

Alternative si le fournisseur DNS supporte ALIAS/ANAME/CNAME flattening à l'apex :

- `@` → `apex-loadbalancer.netlify.com`

Ne pas conserver en parallèle un ancien A/AAAA/CNAME pour `@` ou `www` qui pointerait vers un ancien hébergement.
Ne pas supprimer les MX/TXT utilisés par l'e-mail, SPF, DKIM, DMARC ou d'autres services.

Après modification DNS :

1. attendre la propagation ;
2. dans Netlify > Domain management, cliquer **Verify DNS configuration** ;
3. quand les deux domaines sont vérifiés, laisser Netlify provisionner automatiquement le certificat Let's Encrypt ;
4. vérifier `https://serguides.fr` et `https://www.serguides.fr`.

Le primary domain doit rester `serguides.fr`.

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
