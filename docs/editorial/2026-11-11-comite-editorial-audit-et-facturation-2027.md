# SER Guides — Comité éditorial du 11 novembre 2026
**Statut : dossier de décision et prototype éditorial — NON prêt à vendre.**  
**Aucun changement Shopify, prix, livraison, ni publication.**

## 1. Vérification des produits réellement vendables
Lecture croisée de la boutique Shopify connectée `serguides.fr`, de Shopify Digital Products, de `data/guides.ts`, de `content/guides/README.md` et des README individuels le 11/11/2026.

| Guide | Shopify | Fichier Digital Products constaté | Octets | README dépôt | Risque |
|---|---|---|---:|---|---|
| 01 Micro-entreprise | ACTIVE · 12,99 € | SER-Guide-01-Micro-entreprise-2026.html | 110 092 | en ligne | contrôler conformité de la version livrée |
| 02 Shopify | ACTIVE · 12,99 € | SER-Guide-02-Ecommerce-Shopify-2026.html | 146 760 | prêt à livrer | documentation contradictoire avec statut réel |
| 03 TikTok Shop | ACTIVE · 12,99 € | SER-Guide-03-TikTok-Shop-2026.html | 57 590 | prêt à livrer | documentation contradictoire avec statut réel |
| 04 Vinted | ACTIVE · 12,99 € | SER-Guide-04-Vinted-2026.html | 50 654 | prêt à livrer | documentation contradictoire avec statut réel |

**Constat confirmé :** les quatre variantes ont un fichier attaché dans Digital Products. Le risque « produit actif sans aucun fichier » n'est **pas confirmé**. **Non vérifié :** paiement test de bout en bout, email de livraison, intégrité et exactitude des fichiers, téléchargement effectif, conformité de la promesse marketing. Aucun achat réel n'a été déclenché. La consultation des commandes récentes n'a retourné aucune commande (totalCount = 0), ce qui n'est pas une preuve d'absence de ventes historiques hors du périmètre retourné.

**Écart d'architecture à examiner :** le site Next.js ne référence explicitement que le Guide 01 comme `available:true` avec checkout Stripe, tandis que Shopify affiche quatre produits actifs et Digital Products possède quatre fichiers. Deux parcours commerciaux coexistent potentiellement ; ne pas affirmer que leur fonctionnement est identique. La procédure `COMMENT-AJOUTER-UN-GUIDE.md` décrit encore une livraison Stripe/Neon/Resend propre au Guide 01. Harmonisation requise **après vérification**, pas de modification aveugle.

## 2. Exploration multithématique (hypothèses, pas volumes de recherche)

Critères : problème urgent et clair, potentiel de recherche entrante, longévité, concurrence/solutions gratuites, capacité de produire des outils originaux, sources primaires accessibles, droits média. **Aucun volume SEO ni chiffre de vente inventé.** La demande commerciale et les prix concurrents restent à mesurer avant mise en vente.

| Univers | Hypothèse de guide / outil | Fenêtre | Différenciation à tester | Risque |
|---|---|---|---|---|
| Entreprise / administratif | Facturation électronique 2027 pour TPE et indépendants | réforme active, échéance 2027 | arbre de décision + plan de migration + checklists | réglementation mouvante, sources gratuites |
| Fiscalité | Préparer ses déclarations 2027 | saisonnier | calendrier personnalisé, contrôles de cohérence | changements légaux |
| E-commerce | Coût complet d'une vente multicanal | durable | comparateur de marge sans faux tarifs | concurrence d'outils gratuits |
| Revente | Prix plancher et rotation de stock | durable | tableur/outil interactif | déjà couvert partiellement par Guide 04 |
| Emploi / carrière | Comparateur CDI/freelance | durable | simulation hypothèses explicites | fiscalité / statut variables |
| Argent / budget | Budget annuel charges irrégulières | durable | prévision glissante et enveloppes | offre gratuite abondante |
| Immobilier | Budget réel premier logement | durable | calculateur coût total et dossier | droit local |
| Tech / IA | Sécuriser ses comptes et sauvegardes | durable | audit guidé et procédure testée | pédagogie cybersécurité |
| Auto / mobilité | Coût réel d'une voiture d'occasion | durable | coût total et checklist d'inspection | données prix variables |
| Santé / bien-être | Journal d'habitudes de sommeil | durable | suivi non médical | santé : aucune promesse médicale |
| Famille / éducation | Orientation et budget études | saisonnier | échéancier + budget | données de rentrée variables |
| Loisirs / création | Coût de production vidéo freelance | durable | devis et marge | concurrence de modèles |
| Animaux | Budget première année chien/chat | durable | coûts prévisionnels signalés | prix variables, conseils vétérinaires |
| Voyage / expatriation | Préparer un départ à l'étranger | durable | checklist par situation/pays | formalités spécifiques |
| Langues / compétences | Programme d'apprentissage auto-évalué | durable | plan personnalisé et mesure des progrès | marché très concurrentiel |

**Sélection pour cadrage, non pour publication :** « Facturation électronique 2027 : se mettre en conformité quand on est indépendant ou TPE ». Raisons : obligation déjà en vigueur de réception depuis le 01/09/2026, échéance d'émission des PME/microentreprises au 01/09/2027, sujet documenté par la DGFiP, problème opérationnel concret et outil décisionnel utile. Le guide doit se différencier des nombreuses pages officielles gratuites par **un parcours adapté, une checklist exportable, un calendrier et des cas pratiques**, et ne jamais revendre une simple reformulation des textes publics. Le potentiel payant **n'est pas démontré** : recherche concurrentielle/prix et intention d'achat restent des validations obligatoires.

**Alternatives non retenues cette semaine :** guide budget personnel (moins d'urgence vérifiable), guide voiture d'occasion (sources de prix fiables à collecter), guide TikTok/Shopify (couvert par produits déjà actifs), guide Black Friday (fenêtre courte et faible pérennité). Ce choix n'est pas une priorité permanente et doit être remis en question par les données de marché.

## 3. Sources officielles consultées le 11/11/2026

- DGFiP, « Je découvre la facturation électronique », calendrier et définition : https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique
- DGFiP, « Facturation électronique » (publié le 28/09/2026) : https://www.impots.gouv.fr/actualite/facturation-electronique
- DGFiP, « J'approfondis mes connaissances sur la réforme » (modifié le 05/11/2026) : https://www.impots.gouv.fr/japprofondis-mes-connaissances-sur-la-reforme
- DGFiP, questionnaire officiel selon la situation de l'entreprise : https://www.impots.gouv.fr/facturation-electronique-qu-est-ce-que-ca-change-pour-moi
- DGFiP, « Chorus Pro restera la plateforme de référence pour la facturation électronique du secteur public » (09/09/2025) : https://www.impots.gouv.fr/actualite/chorus-pro-restera-la-plateforme-de-reference-pour-la-facturation-electronique-du-secteur
- DGFiP, fiche calendrier (PDF, version septembre 2025) : https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/fiche-1_que-va-t-il-se-passer-pour-mon-entreprise.pdf
- BOFiP, actualité du 30/09/2026 : https://bofip.impots.gouv.fr/bofip/15176-PGP.html/ACTU-2026-00145

## 4. Faits vérifiés et limites
- Réception : toutes entreprises concernées, à partir du **1er septembre 2026** [DGFiP, « Je découvre… »].
- Émission : grandes entreprises et ETI depuis le **1er septembre 2026** ; PME et microentreprises à compter du **1er septembre 2027** [DGFiP, « Je découvre… »].
- Les microentrepreneurs sont concernés, y compris sous franchise en base de TVA, selon les situations ; ne pas confondre assujettissement et paiement de TVA [DGFiP, « Je découvre… »].
- Une facture PDF ordinaire envoyée par email n'est pas en soi une facture électronique conforme ; formats structurés et plateforme agréée requis dans les cas concernés [DGFiP].
- Opérations B2B domestiques et autres cas (B2C, international, exonérations) requièrent des distinctions ; ne pas affirmer qu'une même règle d'émission s'applique à tous les clients [DGFiP, « J'approfondis… »].
- Chorus Pro conserve un rôle spécifique pour le secteur public [DGFiP, 09/09/2025].
- Les barèmes, tarifs des plateformes, coûts d'intégration, parts de marché et résultats clients **ne sont pas établis** et ne doivent pas être dessinés comme des faits.

## 5. Proposition de web-book (plan de production)
1. Votre situation : forme, clients, opérations, réception/émission.
2. Ce qui change déjà en 2026 et ce qui arrive en 2027.
3. Plateforme agréée : critères neutres, questions à poser, liens officiels.
4. Flux B2B France / B2C / étranger / secteur public : cas distincts.
5. Audit des factures actuelles et des données manquantes.
6. Plan de transition en 30/60/90 jours (planning illustratif, pas délai réglementaire).
7. Outils : diagnostic conditionnel, checklist locale exportable, modèle de cahier des charges, tableau de migration.
8. Vérification et maintenance : suivi des annonces DGFiP, glossaire et bibliographie.

**Direction visuelle :** couverture SER Guides bleu nuit/ivoire/cyan avec illustration vectorielle originale d'un flux « facture → plateforme → destinataire » ; schéma original comparatif 2026/2027 ; authentiques captures des pages DGFiP uniquement si droits de reproduction établis ; sinon lien officiel et encart textuel. Pas de logo DGFiP/plateforme sans droit de reproduction établi. Le calendrier 2026–2027 est un schéma de dates **observées**, pas un graphique de marché.

## 6. Critères de validation avant production commerciale
- [ ] Étude concurrentielle documentée (au moins 5 offres/ressources pertinentes, prix et date si disponible).
- [ ] Recherche de demande et intention d'achat avec données observées (pas de volumes supposés).
- [ ] Vérification DGFiP des cas particuliers, mentions obligatoires et plateformes agréées à la date de sortie.
- [ ] BRIEF, BOOK_MAP, SOURCE_PACK, MEDIA_REGISTER, EVIDENCE_LEDGER et manifest complets.
- [ ] Images authentiques et réutilisables commercialement, légendes et crédits.
- [ ] Web-book HTML autonome fonctionnel, tests de calculs, mobile, accessibilité, liens et données.
- [ ] Aperçu réel et capture de QA dans la PR, pas de mock présenté comme produit terminé.
- [ ] Vérification du tunnel de livraison par test sans paiement réel.
- [ ] Validation explicite avant fusion, publication, changement Shopify ou prix.

**Décision :** priorité de cette exécution à l'audit de la livraison existante et à un cadrage commercial multi-univers. Ne pas ajouter un cinquième produit actif sans preuve de demande et sans tests du tunnel existant.
