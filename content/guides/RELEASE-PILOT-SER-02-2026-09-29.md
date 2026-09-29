# RELEASE PILOT — SER Guide 02

Date : 29/09/2026  
Objectif : publier **un seul nouveau guide** de bout en bout avant d’industrialiser 03–15.

## Pourquoi SER 02

- contenu le plus avancé historiquement après Guide 01 ;
- 30 étapes ;
- source pack renforcé ;
- web-book déjà rendu ;
- sujet central qui crée des ponts vers 03, 06, 08, 09, 14 et 15.

## Gate éditorial

- [x] ebook existant ;
- [x] 28–32 étapes ;
- [x] HTML interactif ;
- [x] source pack ;
- [x] noindex/noarchive ;
- [x] checklist/progression locale ;
- [ ] dernière revue humaine du texte final ;
- [ ] test mobile/desktop du fichier final.

## Gate visuel

- [x] brief Hook ;
- [x] brief Valeur ;
- [x] brief Produit ;
- [ ] 01-hook.png final ;
- [ ] 02-valeur.png final ;
- [ ] 03-produit.png final ;
- [ ] intégration catalogue.

## Gate prix

- [x] recommandation : 12,99 € ;
- [ ] prix officiellement validé ;
- [ ] Product Stripe ;
- [ ] Price Stripe one-time EUR ;
- [ ] Payment Link ;
- [ ] metadata guide_id / guide_slug.

## Gate livraison

- [x] fichier canonique identifié ;
- [x] slug canonique : `ecommerce-shopify-2026` ;
- [ ] mapping dans Neon Function `ser-guides-delivery` ;
- [ ] commande écrite dans `ser_orders` ;
- [ ] entitlement écrit dans `ser_entitlements` ;
- [ ] email Resend Guide 02 ;
- [ ] accès bibliothèque ;
- [ ] récupération / renvoi testée.

## Achat test

- [ ] checkout ;
- [ ] paiement ;
- [ ] webhook reçu une seule fois ;
- [ ] idempotence vérifiée ;
- [ ] email reçu ;
- [ ] bon guide livré ;
- [ ] compte associé au bon email ;
- [ ] bibliothèque affiche le Guide 02 ;
- [ ] accès refusé à un utilisateur non autorisé.

## Publication site

Seulement après achat test :
- [ ] ajouter SER 02 à `guides` ;
- [ ] retirer SER 02 de `plannedGuides` ;
- [ ] renseigner prix ;
- [ ] renseigner checkout ;
- [ ] renseigner deck ;
- [ ] vérifier fiche FR ;
- [ ] vérifier sitemap/SEO ;
- [ ] fusionner PR ;
- [ ] vérifier production `serguides.fr`.

## Après 02

Répliquer le pipeline via `data/commerce.ts` pour 03–15.
