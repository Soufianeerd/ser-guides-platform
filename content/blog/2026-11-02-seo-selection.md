# SER Weekly SEO — sélection du 2 novembre 2026

## Décision

Préparer **deux contenus SEO en brouillon**, sans publication ni fusion :
1. **CFE micro-entrepreneur 2026 / 1447-C** → SER Guide 01, sujet prioritaire par son **échéance vérifiable au 31 décembre 2026** et son intention de résolution immédiate.
2. **Calcul de marge TikTok Shop 2026 avec affiliation** → SER Guide 03, sujet à intention commerciale forte, avec un exemple original de contribution par commande et un comparatif avec/sans affilié.

Ces articles ne sont **pas** des contenus généralistes « comment créer une entreprise » ou « comment vendre sur TikTok ». Ils répondent à une décision concrète, comportent des calculs ou des cas limites et orientent vers un produit Shopify actif.

## Données Shopify relevées le 2 novembre 2026

- Boutique : **serguides.fr**, devise **EUR**, 4 produits Shopify actifs (SER 01 à 04), chacun à **12,99 €** au moment du contrôle.
- **Du 3 octobre au 2 novembre inclus : 112 sessions, 0 commande, 0 € de ventes**, aucun panier moyen calculable. La journée du 2 novembre est encore en cours.
- **Du 26 octobre au 1er novembre : 3 sessions** contre **11 du 19 au 25 octobre** (**−72,7 %** ; échantillons très faibles).
- **Sur 14 jours jusqu'au 2 novembre : 14 sessions** : **10 directes et 4 sociales** ; **12 arrivées sur la page d'accueil et 2 sur des URL de checkout**, aucune entrée identifiée directement sur une fiche produit.
- Les données Shopify **ne permettent pas d'attribuer une demande organique mesurée à l'un ou l'autre des deux sujets**. Le classement repose sur intention, temporalité, adéquation produit et concurrence observée, pas sur des ventes attribuées.

### Opportunités / limites

| Sujet | Produit | Intention | Différenciation | Risque | Décision |
| --- | --- | --- | --- | --- | --- |
| CFE / 1447-C 2026 | SER 01 | Forte, échéance 31/12/2026 | Scénarios de création, 5 000 € annualisés, déclaration vs paiement | Concurrence institutionnelle très forte ; relecture fiscale | **1** |
| TikTok Shop marge + affiliation | SER 03 | Forte, décision de prix avant lancement | Simulation chiffrée, 9 %/7 %/4 %, affiliation, logistique, contribution | SERP commerciale déjà dense ; taux à revalider dans Seller Center | **2** |
| Vinted / DAC7 | SER 04 | Forte | Déjà couvert par PR #9 | Doublon | **Écarté** |
| Shopify trafic sans ventes | SER 02 | Forte | Déjà couvert par PR #9 | Doublon | **Écarté** |
| Pressure washing / construction reporting | Aucun produit Shopify actif associé | Potentielle | Priorités de veille produit | Conversion indirecte | **Écartés cette semaine** |

## Vérification de la demande et de la concurrence

- **Google / SERP CFE :** résultats institutionnels DGFiP, Service-Public et plusieurs guides privés. L'intention est démontrée par une obligation datée et des questions opérationnelles, **pas** par un volume de recherche mesuré. Source : [DGFiP — CFE des micro-entrepreneurs](https://www.impots.gouv.fr/professionnel/questions/je-suis-micro-entrepreneur-dois-je-payer-une-cotisation-fonciere-des), [1447-C-SD millésime 2026](https://www.impots.gouv.fr/formulaire/1447-c-sd/declaration-initiale-de-cotisation-fonciere-des-entreprises).
- **Google / SERP TikTok :** concurrents spécialisés récents, notamment [Regilive (24/10/2026)](https://regilive.com/blog/commission-tiktok-shop-france), [Speed Ecom (mis à jour 25/07/2026)](https://speed-ecom.eu/blog/tiktok-shop-france-2026-guide-complet-vendre/) et [MarketFee](https://marketfee.org/fr/tiktok-shop-calculateur-commission/). Le mot-clé générique « frais TikTok Shop » est déjà concurrentiel ; cibler plutôt **le calcul de marge avec affiliation**.
- **Google Trends :** aucune série comparative vérifiée ni aucun volume chiffré disponible dans cette exécution. **Ne pas inventer de volumes ni de potentiel de trafic**.
- **Shopify :** aucune vente ni donnée de trafic par produit permettant de trancher entre les sujets. La pertinence repose sur les produits disponibles et les intentions observées dans les résultats de recherche.

## Audit anti-doublon

- Arbre de **main** inspecté le 2 novembre : aucun dossier `content/blog` publié sur main.
- **PR #9** contient déjà deux articles SEO : **Vinted DAC7 / 30 ventes / 2 000 €** et **Shopify visites sans ventes**. Ne pas les reproduire.
- Aucun autre article CFE 1447-C ni TikTok Shop calcul de marge identifié dans l'arbre de main et les PR SEO consultées.
- **Attention :** le dépôt Next.js n'est pas le blog Shopify de production. Ces fichiers Markdown constituent des **brouillons éditoriaux** et **ne créent aucune URL indexable** à eux seuls. Il faut les intégrer au blog Shopify (ou créer une route), vérifier le slug/canonical, le rendu, la publication et le maillage.

## Contrôles avant fusion et publication

- [ ] Relecture fiscale CFE : millésime 2026, cas particuliers, dates et seuils, avec les sources officielles à jour.
- [ ] Vérifier dans **TikTok Seller Center France** la commission du produit, la formule exacte et les éventuels frais complémentaires ; ne pas reprendre des taux US.
- [ ] Contrôler que les deux URLs produits Shopify sont accessibles et que les fiches ne renvoient pas vers l'ancien Stripe.
- [ ] Choisir les slugs Shopify réellement créés ; remplacer les **canonical_candidate** provisoires.
- [ ] Créer les liens réciproques entre articles et fiches produits, et vérifier le sitemap.
- [ ] Vérifier le contenu de la **PR #9** avant de publier pour éviter cannibalisation et liens vers des brouillons.
- [ ] Mesurer impressions/clics dans Google Search Console après indexation ; les 112 sessions Shopify ne constituent pas une mesure de volume Google.
- [ ] Vérifier les descriptions des quatre produits : elles mentionnent encore une promotion « jusqu'au 25 octobre », alors que nous sommes le 2 novembre. Ne pas promettre une réduction expirée.
- [ ] Aucune modification automatique de prix ni de contenu Shopify live.

## Fichiers de la proposition

- `content/blog/cfe-micro-entrepreneur-2026-1447-c-exoneration.md`
- `content/blog/tiktok-shop-france-2026-calcul-marge-commission-affiliation.md`
- `content/blog/2026-11-02-seo-selection.md`

**Règle éditoriale :** aucune publication tant que l'intention, la vérification des faits et l'absence de doublon ne sont pas confirmées. Aucun volume de recherche n'est affirmé.
