# IA & automatisation
## Pour indépendant : gagner du temps sans perdre le contrôle

> SER Guide 13 — Édition France 2026

Identifier les tâches automatisables, choisir le bon niveau d’IA, protéger les données, documenter les workflows et mesurer le temps réellement économisé.

---

## 1. Lister les tâches, pas les outils

Commencez par votre semaine : saisie, emails, devis, comptes rendus, contenu, support, recherche, reporting.

### Action maintenant
Listez 20 tâches récurrentes et leur durée.

### Checkpoint
- [ ] Vous connaissez le coût actuel.

---

## 2. Classer par risque

Faible : mise en forme. Moyen : contenu envoyé au client. Élevé : décision juridique, santé, recrutement, données sensibles ou action irréversible.

### Action maintenant
Ajoutez risque et conséquence d’erreur.

### Checkpoint
- [ ] Les workflows critiques sont identifiés.

---

## 3. Choisir assistance ou automatisation

Un copilote propose ; une automatisation agit. Plus l’action est irréversible, plus la validation humaine est importante.

### Action maintenant
Décidez où garder une approbation manuelle.

### Checkpoint
- [ ] Le niveau d’autonomie est explicite.

---

## 4. Cartographier les données

Avant d’envoyer des informations à un modèle, identifiez données personnelles, confidentielles, clients et secrets.

### Action maintenant
Dessinez entrée → outil → sortie → stockage.

### Checkpoint
- [ ] Vous savez où circulent les données.

---

## 5. Minimiser les données

N’envoyez pas plus d’informations que nécessaire. Anonymisez ou pseudonymisez quand le besoin le permet.

### Action maintenant
Retirez noms, emails, identifiants et secrets d’un workflow test.

### Checkpoint
- [ ] Le test fonctionne avec moins de données.

---

## 6. Vérifier les conditions du fournisseur

Rétention, entraînement, région, sous-traitants, sécurité et options entreprise changent selon service.

### Action maintenant
Documentez les paramètres de chaque outil utilisé.

### Checkpoint
- [ ] Vous ne supposez pas la confidentialité.

---

## 7. Comprendre le cadre AI Act

Le règlement européen s’applique progressivement. Certaines obligations dépendent du rôle, du système et du niveau de risque.

### Action maintenant
Pour tout usage important, notez fournisseur, rôle et finalité.

### Checkpoint
- [ ] Vous savez quand demander une analyse juridique.

---

## 8. Commencer par une tâche stable

Automatisez un processus répétitif, documenté et à faible risque avant un processus chaotique.

### Action maintenant
Choisissez une tâche de moins de 15 minutes répétée souvent.

### Checkpoint
- [ ] Votre premier workflow est simple.

---

## 9. Définir l’entrée propre

Formulaire, email structuré, ligne de base ou webhook. Une entrée incohérente produit une sortie incohérente.

### Action maintenant
Standardisez le format d’entrée.

### Checkpoint
- [ ] Le workflow reçoit des données prévisibles.

---

## 10. Écrire des instructions testables

Rôle, objectif, contraintes, format de sortie, exemples et critères d’échec.

### Action maintenant
Créez 5 cas test représentatifs.

### Checkpoint
- [ ] Le prompt peut être évalué.

---

## 11. Valider la sortie

Contrôle structure, champs obligatoires, source, doublons et seuils. Ne faites pas confiance à une phrase plausible.

### Action maintenant
Ajoutez une checklist automatique ou humaine.

### Checkpoint
- [ ] Une sortie incorrecte peut être bloquée.

---

## 12. Ajouter l’idempotence

Un webhook ou retry ne doit pas créer deux factures, deux emails ou deux tâches.

### Action maintenant
Utilisez un identifiant unique par événement.

### Checkpoint
- [ ] Le même événement rejoué ne double pas l’action.

---

## 13. Gérer les erreurs

Timeout, quota, format invalide, outil indisponible : prévoyez reprise et alerte.

### Action maintenant
Définissez quoi faire pour 5 erreurs fréquentes.

### Checkpoint
- [ ] L’échec est visible.

---

## 14. Journaliser sans exposer

Logs utiles : date, événement, statut, durée, erreur. Évitez mots de passe, tokens et données sensibles inutiles.

### Action maintenant
Auditez vos logs.

### Checkpoint
- [ ] Aucun secret n’est journalisé.

---

## 15. Automatiser les emails avec garde-fou

Brouillon automatique peut être sûr ; envoi automatique exige règles plus strictes.

### Action maintenant
Commencez par génération de brouillon.

### Checkpoint
- [ ] Vous contrôlez avant envoi.

---

## 16. Automatiser les documents

Extraire, classer, résumer et préremplir peut faire gagner du temps, mais les montants et engagements doivent être revus.

### Action maintenant
Créez un modèle avec champs obligatoires et validation.

### Checkpoint
- [ ] Le document final a un responsable.

---

## 17. Automatiser le CRM

Création de contact, enrichissement autorisé, rappel et statut peuvent être automatisés sans automatiser la relation elle-même.

### Action maintenant
Automatisez la prochaine action, pas la confiance.

### Checkpoint
- [ ] Le CRM reste fiable.

---

## 18. Mesurer le ROI réel

Temps de construction + maintenance + abonnements + corrections comparés au temps économisé.

### Action maintenant
Mesurez 4 semaines avant/après.

### Checkpoint
- [ ] Le workflow économise vraiment du temps.

---

## 19. Éviter l’empilement SaaS

Cinq abonnements pour automatiser une tâche rare peuvent coûter plus cher que le manuel.

### Action maintenant
Supprimez les outils sans usage mensuel clair.

### Checkpoint
- [ ] Votre stack reste compacte.

---

## 20. Créer un registre d’automatisations

Nom, propriétaire, déclencheur, données, outils, risque, dernière revue, plan de secours.

### Action maintenant
Créez un tableau unique.

### Checkpoint
- [ ] Vous savez ce qui tourne.

---

## 21. Prévoir le mode manuel

Un workflow critique doit pouvoir être contourné si l’IA ou une API tombe.

### Action maintenant
Documentez la procédure de secours.

### Checkpoint
- [ ] L’activité ne dépend pas d’un seul service.

---

## 22. Plan 7 jours

J1 audit tâches. J2 données/risques. J3 premier workflow. J4 tests. J5 garde-fous. J6 mesure. J7 documentation.

### Action maintenant
Automatisez une seule tâche au premier sprint.

### Checkpoint
- [ ] Vous avez un workflow fiable.

---

## 23. Plan 30 jours

Ajoutez seulement les workflows dont le ROI et le risque sont compris.

### Action maintenant
Revoyez chaque automatisation après 30 jours.

### Checkpoint
- [ ] Vous améliorez le système, pas le nombre d’outils.

---

## 24. Checklist

Données, rôle humain, erreurs, logs, idempotence, sécurité, ROI, conformité et plan manuel.

### Action maintenant
Faites échouer volontairement le workflow.

### Checkpoint
- [ ] Vous savez comment il casse.

---

## Fin du parcours

Le système doit rester documenté, mesurable et révisable. Ce guide ne garantit ni audience, ni clients, ni revenus.
