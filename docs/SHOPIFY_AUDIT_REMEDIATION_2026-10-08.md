# SER Guides — Reprise commerciale après audit (8 octobre 2026)

## Références canoniques
- Boutique et checkout unique visé : https://serguides.fr/
- Shopify : 4 produits SER-01 à SER-04, actifs, 12,99 € chacun au 8/10/2026.
- GitHub : sources éditoriales, guides et automatisations, non une seconde boutique de vente.
- Thème en service : « SER Guides — Refonte bibliothèque ».
- Thème de préproduction créé le 8/10 : « SER Guides — Audit correctifs — staging 2026-10-08 », identifiant Shopify 189685825865.

## Vérifications confirmées
- 179 sessions du 29/09 au 08/10, zéro commande; dont 162 US et 9 FR (ne pas qualifier chaque visite de robot sans preuve).
- Les produits sont vendables : 4 variantes disponibles, suivi de stock désactivé et expédition physique désactivée.
- Digital Products est connecté et contient un fichier HTML par variante, mais aucun achat de bout en bout ni test iPhone n'est confirmé.
- 15 collections dont 10 vides; les liens des menus Shopify ont été nettoyés le 08/10.
- Redirection Shopify /fr → / créée le 08/10.
- Les politiques Shopify de checkout ont encore des références MaisonPratik et/ou des conditions physiques (action de conformité BLOQUANTE).
- Le dépôt est public; l'architecture de livraison envisagée depuis GitHub main doit éviter d'exposer les contenus payants intégralement.

## Corrections Shopify enregistrées le 8/10
1. Descriptions des SER-01 à SER-04 : plus de promesse « dernière version »; mention du fichier HTML livré et compatibilité iOS à confirmer.
2. Menus : suppression des liens vers collections vides du menu principal, du pied de page et de la navigation SER.
3. URL : /fr redirige désormais vers /.
4. Thème staging : catégories filtrées, contenu et prix remontés sur mobile, liens d'accès corrigés, image de partage par défaut, JSON-LD Product, prix français si devise EUR.
5. Thème staging : mini-diagnostic Micro-entreprise 2026 avec deux sélecteurs, checklist conditionnelle et ressources de Service Public, sans collecte de données personnelles.
6. Thème MAIN conservé inchangé, car publier avant le contrôle complet serait risqué.

## Blocages à lever AVANT la promotion
- Shopify > Paramètres > Politiques : réconcilier CGV, CGU, identité, contact, remboursement et fourniture numérique; l'outil d'écriture automatisé des politiques a été refusé par ses contrôles de sécurité.
- Adhérer à un médiateur de la consommation, puis inscrire ses coordonnées effectives; ne jamais inventer un médiateur.
- Mettre en conformité l'obtention de l'accord exprès sur la fourniture immédiate et les conditions de rétractation, y compris les accès directs au checkout et la confirmation durable.
- Tester l'achat de bout en bout sans laisser une passerelle de test active sur la boutique de production; contrôler le mail et l'ouverture sur iOS/Android/ordinateur.
- Retirer les cinq applications dropshipping devenues inutiles après vérification de dépendances (dont pixel Printful). L'API utilisée ne permet pas de désinstaller des apps tierces arbitraires.
- Fermer ou rediriger l'ancien Netlify et désactiver le Payment Link Stripe après vérification des droits d'éventuels anciens clients.
- Ne pas publier d'aperçus d'ebook basés sur un fichier différent de celui réellement livré. Ajouter de véritables captures après obtention des quatre HTML vendus.

## Architecture de publication / tests
- Une seule boutique Shopify en production. Aucun commit de ce branchement ne doit déclencher un déploiement Netlify sur main avant désactivation ou migration de l'ancien circuit.
- Les fichiers de SER Guides Factory deviennent des composants réutilisables, mais sont séparés de l'export et de la fourniture sécurisée des ebooks.
- Référencer chaque guide par SKU, productId, variantId, SHA256 artefact et date de vérification des sources avant sa mise en ligne.
- Critères de sortie : commande test avec notification reçue + fichier ouvert sur Safari iOS, Android Chrome, ordinateur, et conformité légale revue par le vendeur.
- Mesurer par cohorte de trafic qualifié : sessions FR, produit vu, ajout panier, checkout commencé, commande payée, démo utilisée, email reçu et remboursement.
- Objectif futur : 4–5 achats/jour par guide durant au moins 6 mois; **objectif non garanti**.

## Protection de l'historique
Ce document suit l'audit 00–21 du dossier `ser-guides-audit.zip`. Les observations formulées par Claude ne sont pas toutes reproduites ici : consulter les rapports de l'audit d'origine pour les preuves et les 37 constats.
