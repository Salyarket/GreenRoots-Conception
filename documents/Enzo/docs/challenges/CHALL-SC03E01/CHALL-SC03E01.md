# Challenge SC03E01 - Authentification

Comme toujours : 
- Gitflow
- Créer une branche
- Pull Request pour demander des feedbacks
- Un test par route minimum


## Exercice n°1 : `/api/auth/refresh`

- Récupérer le refresh token depuis : 
  - soit le cookie 
  - soit le header `"Authorization": "Bearer XXXXXX"`
  - si pas token reçu => 401

- On le récupère en BDD
  - je récupère sur le même coup le `user_id`
  - valider que le token est toujours valide (comparer les dates) --> si pas valide 401

- Générer :
  - un nouvel accessToken
  - un nouveau refreshToken que l'on stock en BDD
    - on pense à supprimer l'ancien refreshToken avant d'en stocker un nouveau

- Envoie :
  - les 2 cookies comme d'hab
  - res.json(2 tokens) comme d'hab

## Exercice n°2 : `/api/auth/me`

- Récupérer l'access token depuis : 
  - soit le cookie
  - soit le header `"Authorization": "Bearer XXXXXX"`
  - si pas token reçu => 401

- Valider le token (stateless) via `jwt.verify` 
  - si pas valide => 401

- Récupérer le payload du token via `jwt.decode`
  - => on a l'ID de l'utilisateur

- On récupère les données de l'utilisateur en BDD
  - => on les renvoie au client

## Exercice n°3 : `/api/auth/logout`

- L'idée : supprimer les cookies en les écrasant par une valeur aléatoire
  - le backend renvoie un set-cookie avec une valeur aléatoire qui ne correspond à rien et un max-age très court 

