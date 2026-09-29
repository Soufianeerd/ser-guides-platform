# COMMERCIALISATION — mapping SER 02 à 15

Date : 29/09/2026

## Architecture vérifiée

Le repo principal contient :
- le catalogue public ;
- les web-books ;
- le scaffolding compte / bibliothèque ;
- la migration Neon préparée ;
- les variables d'environnement documentées.

Le pipeline Guide 01 testé historiquement est externe au repo principal :
**Stripe → webhook → Neon Function `ser-guides-delivery` → Resend → livraison**.

La migration `db/migrations/001_ser_library.sql` prépare :
- `ser_orders` ;
- `ser_entitlements` ;
- `ser_benefits`.

## Registre canonique

Le mapping technique 01–15 est désormais centralisé dans :
`data/commerce.ts`.

Pour chaque guide :
- `guideId` ;
- slug catalogue ;
- slug contenu ;
- titre ;
- statut commercial ;
- prix ;
- checkout ;
- Stripe Product ID ;
- Stripe Price ID ;
- fichier de livraison.

## Règle de mise en production

SER 02–15 restent avec :
- `status: prepublication` ;
- `price: null` ;
- `checkoutUrl: null` ;
- `stripeProductId: null` ;
- `stripePriceId: null`.

Ne remplir ces champs qu'après décision du prix et création réelle dans Stripe.

## Séquence par guide

1. valider le prix ;
2. créer le produit Stripe ;
3. créer le Price Stripe ;
4. créer le Payment Link / checkout ;
5. renseigner les identifiants dans le registre ;
6. transmettre le slug canonique au webhook / Neon Function ;
7. enregistrer la commande dans `ser_orders` ;
8. accorder l'accès dans `ser_entitlements` ;
9. envoyer l'email Resend ;
10. synchroniser la bibliothèque ;
11. achat test complet ;
12. seulement ensuite rendre le guide disponible dans `data/guides.ts`.

## Identité à utiliser pour le webhook

La valeur canonique d'entitlement doit être le **slug catalogue**, pas le nom marketing ni le nom de dossier.

Exemple :
- Guide 02 → `ecommerce-shopify-2026`
- Guide 03 → `tiktok-shop-2026`

Cela évite de coupler la base de données aux noms de fichiers.

## Blocage actuel

Aucun produit/prix Stripe 02–15 n'est enregistré dans le repo.
Aucun prix 02–15 n'est officiellement décidé.
La migration Neon est préparée mais le repo la documente encore comme non appliquée.
Neon Auth / bibliothèque sont encore en scaffolding.

Donc aucune publication commerciale 02–15 ne doit être activée avant test d'un premier guide pilote, idéalement SER 02.


## Guide 01 — référence Stripe canonique vérifiée le 29/09/2026

- Product : `prod_VFSGDr1MDdaVgh`
- Price utilisé par le site à 12,99 € : `price_1UGXyjHWJZWsPOa4GQx4aTfl`
- Payment Link canonique : `plink_1UGXyuHWJZWsPOa4Cd9FgmZw`
- URL canonique : `https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06`

Un autre Payment Link actif du même produit existe encore à 19,90 € :
`plink_1UExLqHWJZWsPOa4tYhHojai`.

Il est considéré comme **legacy / non canonique** pour SER Guides tant qu'il n'est pas volontairement réutilisé. Ne pas le recopier dans le catalogue 02–15.
