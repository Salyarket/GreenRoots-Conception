# Challenge

Comme toujours : 
- Gitflow
- Créer une branche
- Pull Request pour demander des feedbacks

## Exercice n°1 : Initialisation du microservice

Créer un dossier `log-service` contenant un projet Express avec :

- Un fichier `tsconfig.json` pour la configuration de TypeScript (s’inspirer du fichier utilisé dans le projet OQCM)
- Utilisation de `tsx` pour démarrer le projet sans compilation
- `prisma` pour interagir avec la base de données PostgreSQL
- `zod` pour la validation des données entrantes
- Un découpage du projet similaire à celui de OQCM :
    - index.ts 
    - src/app.ts 
    - routers/index.ts 
    - controllers/logs.controller.ts
    - models/    

---

## Exercice n°2 : Schéma Prisma

Créer un `model` Prisma `Log` contenant les champs suivants :

## Champs communs :
- `id` : entier auto-incrémenté (clé primaire)    
- `level` : enum parmi :
    - `error`
    - `warn`
    - `info`
    - `http`
    - `verbose`
    - `debug`
    - `silly`
- `message` : chaîne de caractères
- `timestamp` : `DateTime` (valeur par défaut : `now()`)
- `service` : chaîne de caractères
- `created_at` : `DateTime` (valeur par défaut : `now()`)

## Champs spécifiques aux logs HTTP :
- `method` : chaîne de caractères (optionnelle)
- `url` : chaîne de caractères (optionnelle)
- `status_code` : entier (optionnel)
- `ip` : chaîne de caractères (optionnelle)
- `user_agent` : chaîne de caractères (optionnelle)
## Champs spécifiques aux logs d’erreur :
- `stack` : chaîne de caractères (optionnelle)

## Autres :
- `metadata` : champ de type JSON (optionnel)
## Index :

Ajouter des index sur les champs suivants :

- `level`
- `timestamp`
- `service`

## Base de données :

- Créer une base `log`
- Créer un utilisateur `log` avec le mot de passe `log`
- Générer les migrations avec Prisma

---

## Exercice n°3 : Endpoint `POST /api/logs`

N'hésitez pas à utiliser insomnia / postman pour tester

- Créer un schéma de validation avec `zod` pour valider les données en entrée, en respectant le schéma Prisma    
- Utiliser `z.looseObject()` pour permettre la validation d’un objet pouvant contenir des propriétés supplémentaires
- Toute propriété inconnue doit être extraite et stockée dans le champ `metadata` avant insertion en base
