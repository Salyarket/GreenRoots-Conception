# Challenge SC02E03 - Ajout de routes et de tests

- Lecture 
  - un peu de veille technologique ne fera pas de mal sur les [bonnes pratiques des tests](https://github.com/goldbergyoni/nodejs-testing-best-practices) 
    - en particulier, lire les titres, et quelques paragraphes qui vous semblent pertinents

- Gitflow :
  - [documentation](../../fiches/gitflow.md)
  - récupérer le code réalisé en cours sur la branche `master` de votre dépôt local et créer une branche dédiée pour le challenge
  - 🔥 n'hésitez pas à créer une **pull request** en fin de challenge si vous souhaitez un retour !

- API et tests : 
  - En vous inspirant de ce qui a été fait en cours, implémenter les routes des `/api/tags` ainsi que quelques tests associés
  - **API** : suivre les [spécifications](../../conception/api-rest/endpoints.md)
  - **Tests** : voici quelques exemples de tests qu'il est possible d'implémenter


<details><summary>
Exemple de tests à implémenter
</summary>

```js
// - GET /tags
//   - s'il n'y a aucun tags dans la BDD, la route renvoie un tableau vide
//   - s'il y a deux tags dans la BDD, la route renvoie bien les 2
//   - la route renvoie les tags avec les propriétés attendues

// - GET /tags/:id
//   - si le tag existe dans la BDD, il est renvoyé avec les bonnes propriétés attendues
//   - si le tag demandé n'existe pas, on nous renvoie une 404

// - POST /tags
//   - si toutes les données sont fournies, le tag est bien créé et présent dans la BDD
//   - si toutes les données sont fournies, le tag est bien renvoyé avec les propriétés attendues
//   - si les données obligatoires ne sont pas fournies, la requête échoue (400)
//   - si les données obligatoires ne respectent pas les conditions de validation, la requête échoue (400)
//   - s'il existe déjà un tag avec le même nom, la requête échoue (409)

// - PATCH /tags/:id
//   - si le tag existe, il est mis à jour et renvoyé avec les bonnes propriétés attendues
//   - si le tag n'existe pas, la requête échoue (404)
//   - si les données fournies se respectent pas les conditions de validation, la requête échoue (400)
//   - s'il existe déjà un tag avec le même nom, la requête échoue (409)
//   - si le tags existe, mais que le nom est déjà utilisé par un autre tag, on nous renvoie une 404

// - DELETE /tags/:id
//   - si le tag existe, il est supprimé (204) et n'est plus présent en BDD
//   - si le tag n'existe pas, la requête échoue (404)
```

</details>

