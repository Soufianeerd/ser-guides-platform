# _archive

Fichiers retirés du circuit actif, **jamais supprimés**, rangés sous leur chemin d'origine.

| Élément | Chemin d'origine | Raison |
|---|---|---|
| `SER-Instagram-Automation-mrliptn/` | `/SER-Instagram-Automation-mrliptn/` | overlay prévu pour l'ancien dépôt `insta-auto`, remplacé par `ser-module/` (moteur autonome). Ses workflows n'étaient pas actifs (hors `.github/` racine). Son fichier `niches/mrliptn/contenus.json` a été déplacé dans `content/guides/ser-01-micro-entreprise-2026/promo/contenus-30-carrousels.json`. |

Pour restaurer : `git mv _archive/<chemin> <chemin>` (ou `mv` si le fichier n'est pas suivi).
