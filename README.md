# SER Guides Platform

Plateforme centralisée pour les SER Guides : catalogue d'e-books, automatisations de paiement/livraison, espace client et bibliothèque personnelle.

## Objectifs

- Centraliser toutes les niches et tous les e-books SER Guides.
- Gérer les paiements Stripe et la livraison automatique via Resend.
- Préparer une landing page avec catalogue complet.
- Fournir un espace client sécurisé où chaque acheteur retrouve uniquement ses guides achetés.
- Permettre la consultation, le classement, la recherche, les favoris et l'historique d'achats.
- Conserver les environnements TEST et PRODUCTION séparés.

## Architecture cible

```text
apps/
  web/                  # landing, catalogue, fiches produit, auth
  customer-portal/      # espace client et bibliothèque
functions/
  serdelivery/          # livraison production
  serdeliverytest/      # tunnel Stripe TEST
packages/
  auth/
  database/
  email/
  payments/
  guides/
guides/
  administratif-fiscal/
  juridique/
  immobilier/
  emploi/
  entreprise/
  ...
automations/
  stripe/
  resend/
  provisioning/
database/
  migrations/
  schema/
docs/
```

## Flux d'achat cible

1. Le client choisit un guide.
2. Stripe Checkout encaisse le paiement.
3. Le webhook valide `checkout.session.completed`.
4. L'achat est enregistré dans Neon.
5. Un droit d'accès est créé pour le compte client.
6. Resend envoie l'e-mail de confirmation/livraison.
7. Le guide apparaît automatiquement dans `Mes guides`.

## Sécurité

Aucun secret Stripe, Resend ou Neon ne doit être commité. Utiliser uniquement des variables d'environnement côté déploiement.
