# SER Guides — consolidation

## Projet canonique

Le produit principal est `Soufianeerd/ser-guides-platform`.

`Soufianeerd/SER-Module` appartient au même produit et porte actuellement l'automatisation de contenu et de publication.

`Soufianeerd/insta-auto` est une ancienne base de travail et ne doit plus être utilisée pour les nouveaux développements SER Guides.

## Répartition actuelle

### ser-guides-platform
- site et catalogue ;
- fiches produits ;
- paiement ;
- espace client ;
- téléchargement ;
- SEO ;
- analytics.

### SER-Module
- catalogue des niches ;
- files de publications ;
- carrousels ;
- validation ;
- dry-run ;
- publication Instagram ;
- historique de publication ;
- automatisation CI.

## Cible

SER Guides doit être géré comme un seul projet.

Quand la migration physique sera faite, le composant de publication pourra vivre sous un dossier du type :

```
automation/social/
```

dans le dépôt principal.

La migration doit déplacer ensemble le moteur, ses configurations, les niches, les assets, l'historique et le workflow d'automatisation.

## insta-auto

Le module SER actuel est autonome et ne dépend plus de `insta-auto`.

Décision : `insta-auto` est legacy et peut être supprimé après vérification qu'aucun workflow extérieur ne dépend encore de ce dépôt.

Aucun nouveau travail SER Guides ne doit être fait dans `insta-auto`.
