# 🧠 MERISE : du besoin au modèle physique

La méthode **MERISE** permet d'analyser, modéliser et concevoir un système d'information en séparant les niveaux conceptuel, logique et physique. Voici les principales étapes du processus de modélisation des données.

## 📋 Recueil des données

**But** : Comprendre le métier, identifier les besoins, les informations à gérer et les règles de gestion.  
**Outils** : Interviews, questionnaires, observations, documents existants.  
**Livrables** : Liste d’entités, processus métiers, contraintes, premières relations entre données.

# Recueil de données

## Utilisateur

- prénom de l'utilisateur
- nom de l'utilisateur
- email de l'utilisateur
- mot de passe de l'utilisateur
- statut : particulier || association || entreprise
- rôle de l'utilisateur : admin || membre

## Produit

- nom
- prix
- description
- image (URL)
- Disponibilité (true / false)
- stock (quantité disponible)

## Terrain de plantation

- nom
- point gps
- Lieu de plantation possible de l'arbre : (continent Europe, Asie…)
- Lieu de plantantion COORDONNEES GPS ? PLUSIEURS TERRAINS ?

---------- BONUS ------------

- vitesse de croissance (lente, moyenne, rapide)
- taille (petit / moyen / grand)
- type d’arbre (ex : cactus, fougère, conifère, fruitier…)

## Commande

- date de la commande
- état de la commande
- prix de la commande
- produits
- utilisateur qui a passé la commande

---------- BONUS ------------

- facture pdf (envoie auto?????)
