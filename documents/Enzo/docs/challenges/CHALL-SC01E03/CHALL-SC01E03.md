# Challenge SC01E03 - Modéliser YouTube (MERISE)

- [Lire consciencieusement la fiche recapitulative sur MERISE](../../fiches/merise.md)

- Penser à créer une branche pour travailler et ne pas perdre son travail le lendemain !

## Objectif

On veut _tout simplement_ (😇) créer un **clone de YouTube**. 

Analyse des fonctionnalités : se rendre sur YouTube pour faire un repérage des différentes fonctionnalités. On se limite à celles de base : vidéos, playlists, commentaires, tags, utilisateurs, recherche.

On organise sa conception (méthode MERISE) :

- Réaliser le **MCD**
  - utiliser `draw.io` ou `MoCoDo`

- Réaliser le **MLD**
  - format `textuel` ou `schématique`

- Réaliser le **MPD**
  - format `SQL` 
  - une partie des tables suffira largement si vous manquez de temps
  - penser à tester votre script dans une BDD Postgres

- Dictionnaire de données
  - format `tableau`

----

Rappel : une modélisation est une représentation de la réalité, donc il y a souvent plusieurs solutions pour répondre à la même problématique ! Autrement dit, si votre solution identique à la correction, elle n'est pas nécessairement fausse pour autant. En revanche, elle peut être maladroite, et poser des problèmes au moment de l'implémentation.


Rappel :
- Le plus difficile, c'est le MCD
- Le MLD c'est la traduction directe de ce MCD
- Le dictionnaire de données peut-être généré automatiquement par un LLM à partir du MLD
- Le script SQL peut être généré automatiquement par un LLM à partir du dictionnaire

N'hésitez pas à faire la conception MCD à plusieurs (pair-programming), dès la conception ou bien pour avoir une relecture !

## API Design 

- Continuer à réfléchir aux différents endpoints de l'API dans le [fichier suivant](../../conception/api-rest/endpoints.md)