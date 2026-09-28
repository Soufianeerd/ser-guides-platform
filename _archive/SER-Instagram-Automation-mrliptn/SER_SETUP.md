# SER Guides — automatisation Instagram @mrliptn

Ce dossier est un **overlay** à copier à la racine du dépôt `lemcontactpro-ai/insta-auto`. Il n’écrase pas le moteur arabe/maths existant. Il ajoute un moteur dédié à SER Guides.

## Ce qui est prêt
- 30 carrousels SER Guide 01
- rendu 1080×1350, palette Tech & Data
- génération locale sans IA
- hébergement Cloudinary
- publication Instagram via l’API Meta
- historique anti-répétition
- 3 déclenchements/jour via GitHub Actions
- quota Meta lu dynamiquement via `content_publishing_limit`
- version API Meta configurable, défaut `v26.0`
- renouvellement automatique du jeton

## Secrets GitHub à créer
`IG_USER_ID_MRLIPTN`
`IG_TOKEN_MRLIPTN`
`CLOUDINARY_CLOUD_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`
`META_APP_ID`
`META_APP_SECRET`
`GH_PAT_SECRETS`

## Pré-requis Meta
Le compte Instagram doit être Professionnel (Creator ou Business). Avec le flux Facebook Login, il doit être lié à une Page Facebook et le token doit posséder les permissions de publication requises (`instagram_basic`, `instagram_content_publish`, etc.).

## Test
Dans GitHub → Actions → **Publier SER Guides sur @mrliptn** → Run workflow → `dry_run=true`.
Le premier test génère les 3 slides et la légende sans rien publier.

Quand le rendu est validé, relancer avec `dry_run=false`.

## Bio Instagram
Mettre le lien de vente du SER Guide 01 dans la bio de `@mrliptn`. Les posts utilisent volontairement le CTA « lien en bio » car un lien dans une légende Instagram n’est pas le tunnel principal.

## Important
Le dépôt GitHub était accessible en lecture mais pas en écriture depuis la connexion ChatGPT utilisée ici. Ce ZIP contient donc les fichiers prêts à copier/committer.
