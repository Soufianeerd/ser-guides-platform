# Architecture SER Guides

## Domaines fonctionnels

### Catalogue
Landing page, catégories, filtres, fiches détaillées et recherche.

### Authentification
Compte client sécurisé, récupération de mot de passe, gestion des sessions et profil.

### Paiement
Stripe Checkout en mode TEST et LIVE avec webhooks séparés.

### Provisioning
À chaque paiement confirmé : création de l'achat, création du droit d'accès et association du guide au compte client.

### Livraison
Resend envoie un message transactionnel de confirmation. Les pièces jointes ou liens temporaires sont générés côté serveur uniquement.

### Bibliothèque client
Le client voit uniquement les guides dont il possède un droit d'accès valide. Classement par niche, année, thème, favoris et historique d'achat.

## Modèle de données cible

- users
- guides
- guide_categories
- purchases
- entitlements
- favorites
- download_events
- webhook_events

## Principes

- Aucun secret dans GitHub.
- Séparation stricte TEST / LIVE.
- Webhooks idempotents.
- Les accès aux guides sont décidés côté serveur, jamais uniquement côté interface.
- Les événements Stripe sont persistés avant provisioning afin de faciliter audit et reprise sur erreur.
