---
title: "Commande test Shopify : vérifier paiement, e-mails et livraison avant de lancer"
description: "Checklist de commande test Shopify : paiement accepté ou refusé, confirmation, livraison numérique, remboursement et retour au mode réel."
keyword: "commande test Shopify"
intent: "informationnelle et transactionnelle : sécuriser un lancement Shopify"
product_handle: "ser-guide-02-e-commerce-shopify-2026-de-zero-aux-premieres-ventes"
status: "draft"
date: "2026-11-16"
---

# Commande test Shopify : 12 contrôles avant d'ouvrir sa boutique

Une boutique peut paraître prête alors que le paiement, les notifications ou la livraison ne fonctionnent pas. Shopify recommande au moins une commande test avant lancement et après modification des paramètres de paiement. Voici une recette reproductible pour une boutique de produits physiques **ou numériques**.

## 1. Définir ce que vous allez tester

### Parcours client complet
Testez l'arrivée sur une fiche produit, l'ajout au panier, le paiement, la confirmation et l'accès au produit ou au suivi de commande. Faites l'essai sur mobile : c'est un moyen simple de repérer les champs difficiles à utiliser.

### Environnement de test
Selon le fournisseur, Shopify documente le mode test Shopify Payments, une passerelle de test ou les mécanismes de test du prestataire. **Ne laissez pas un mode de test activé à l'ouverture au public.**

## 2. Exécuter les 12 contrôles

| N° | Contrôle | Résultat attendu |
| --- | --- | --- |
| 1 | Ouvrir la fiche produit sur mobile | Prix, description et bouton d'achat visibles |
| 2 | Ajouter au panier | Produit et quantité corrects |
| 3 | Modifier la quantité | Total recalculé |
| 4 | Passer au paiement | Champs et moyens de paiement accessibles |
| 5 | Simuler un paiement accepté | Commande enregistrée |
| 6 | Simuler un paiement refusé | Message clair, aucune fausse commande payée |
| 7 | Vérifier l'e-mail de confirmation | Réception et informations exactes |
| 8 | Contrôler taxes et frais | Montants cohérents avec la configuration |
| 9 | Tester le traitement | Statut de commande cohérent |
| 10 | Si produit numérique : tester le lien de livraison | Fichier ou accès réellement utilisable |
| 11 | Tester annulation ou remboursement | Statuts et notifications cohérents |
| 12 | Désactiver le mode test puis recontrôler | Paiement réel prêt avant ouverture |

Pour chaque ligne, consignez **date, appareil, scénario, résultat, capture et correction**. N'utilisez pas de vraie carte bancaire dans un environnement qui prétend simuler une transaction sans vérifier le mode actif.

## 3. Si la commande fonctionne mais pas la livraison

### Produit numérique
Vérifiez l'application ou le service de livraison, la présence du fichier, les permissions du lien et l'e-mail envoyé après paiement. Une commande marquée « payée » ne prouve pas que le client a reçu son contenu.

### Produit physique
Vérifiez les frais d'expédition, les zones desservies, le statut de traitement et la notification de suivi, lorsque celle-ci est configurée.

## 4. Trois erreurs à éviter

### Tester uniquement la page d'accueil
Un site esthétique n'est pas un tunnel de commande validé.

### Confondre trafic et validation du checkout
Une visite ou un ajout au panier ne démontre pas qu'un paiement aboutit.

### Ouvrir avec le mode test activé
Vérifiez explicitement la désactivation du mode test avant l'ouverture commerciale.

## 5. Tableau de décision après les tests

- **Échec paiement** : corriger le fournisseur ou la configuration avant tout achat de trafic.
- **Paiement OK, livraison KO** : corriger l'automatisation de livraison avant ouverture.
- **Tous les tests OK** : ouvrir, puis surveiller les premières commandes réelles et les e-mails.

## Pour aller plus loin

**CTA :** Pour structurer votre lancement au-delà des tests, consultez le [SER Guide 02 — Shopify 2026](/products/ser-guide-02-e-commerce-shopify-2026-de-zero-aux-premieres-ventes), consacré au passage de la configuration aux premières ventes.

**Maillage interne recommandé :** lien vers le guide Shopify ci-dessus et, après publication d'un article connexe, vers une checklist de page produit. Ne pas pointer vers des URL d'articles non publiés.

**Sources officielles (consultées le 16/11/2026) :**
- [Shopify — Préparer le lancement de votre boutique](https://help.shopify.com/fr/manual/intro-to-shopify/initial-setup/setup-prepare-for-launch)
- [Shopify — Liste de contrôle générale](https://help.shopify.com/fr/manual/intro-to-shopify/initial-setup/new-to-shopify-checklists/general-checklist)

*Les écrans et moyens de test dépendent du prestataire de paiement et de la configuration du marchand.*