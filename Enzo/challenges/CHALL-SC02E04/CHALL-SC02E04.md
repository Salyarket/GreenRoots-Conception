# Challenge SC02E04 - Pipeline CI/CD pour le client

## Objectif

Dans ce challenge, vous allez mettre en place une intégration continue pour la partie `client` du projet. Vous devrez :

1. **Créer un workflow GitHub Actions** qui exécute les tests unitaires du client à chaque `push` ou `pull request` vers la branche `main`.
2. **Documenter la pipeline** en réalisant un diagramme UML d'activité décrivant les différentes étapes du workflow.

## Étapes à suivre

### 1. Génération du workflow GitHub Actions

- Créez un fichier YAML `ci-client.yml` dans le dossier `.github/workflows/` du dépôt.
- Configurez le workflow pour qu'il se déclenche lors d'un `push` ou d'une `pull request` vers la branche `main`.
- Ajoutez les étapes nécessaires pour installer les dépendances 
- Lancer les tests unitaires du client.

### 2. Documentation de la pipeline

- Réalisez un diagramme UML d'activité représentant les différentes étapes de la pipeline CI.
- Le diagramme doit inclure : le déclencheur, l'installation des dépendances, l'exécution des tests, et la gestion des résultats.

### 3. Bonus : vers du Continous Deployment (CD)

On se propose d'aller un peu plus loin : et si on déployait directement le code client sur un hébergeur dès que le code arrive sur la branche `main`/`master` ? 

Utilisons [Surge.sh](https://surge.sh/) : un hébergeur de site web statiques, gratuit pour les fonctionnalités de base. Très pratique pour héberger n'importe quelle application statiques (HTML, CSS, JS...). 

On commence par installer Surge en local pour récupérer un token d'accès : 
- `npm install --global surge`
- `surge login`
- `surge token` (noter le token)

On réfléchit à un nom de domaine en `.surge.sh` pour son projet, par exemple : 
- `mon-client-oquiz-mon-pseudo-github.surge.sh` (quelque chose qui ne soit pas déjà pris par vos collègues !)

On rajoute un nouveau workflow `cd-client.yml`, l'objectif est le suivant : 
- lors d'un push ou d'un merge sur la branche principale,
- on part d'un runner Node.js duquel on récupère le code du projet
- on installe les dépendances
- on lance les tests côté client
- on build le code source vers le dossier `dist`
- on installe Surge sur le runner
- on lance la commande de déploiement Surge
  - `surge --project ./client/dist --domain ${{ vars.SURGE_DOMAIN }}$ --token ${{ secrets.SURGE_TOKEN }}`

Attend mais c'est quoi ces `${{ XXX }}` ? Et bien, on va quand même pas mettre le token en dur dans le code, non ? On va se servir des variables d'environnement en les rajoutant dans les paramètres du dépôt directement sur GitHub : 
- `Settings` (du projet) > `Secrets and variables` > `Actions` > `Manage environment secrets` > `New environment`
- choisir un nom pour l'environnement, par exemple `CI/CD`.
- rajouter :
  - le `SURGE_TOKEN` dans les `Environnement secrets` (accessible via `${{ vars. }}`)
  - le `SURGE_DOMAIN` dans les `Environment variables` (accessible via `${{ secrets. }}`)

On précise enfin au running qu'il doit utiliser l'environnement nommé `CI/CD` :

```yml
jobs:
  mon_job:
    runs-on: ubuntu-latest
    environment: CI/CD    # <--- préciser l'environnement à utiliser par la pipeline

    steps:
      # ...    
```

Il ne reste plus qu'à commit, push et vérifier la pipeline et le déploiement : penser à regarder les logs de la pipeline pour vérifier si tout fonctionne comme sur des roulettes 🛼.


