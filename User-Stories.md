# Récits utilisateurs (User stories)

## Rôles :

Hiérarchie des droits :

- `Visiteur <-- Membres <-- Admin`

| En tant que | je souhaite pouvoir                                                | afin de                                    |
| ----------- | ------------------------------------------------------------------ | ------------------------------------------ |
| visiteur    | accéder à une page d'accueil                                       | prévisualiser le contenu du site           |
| visiteur    | accéder à un page d'inscription                                    | pouvoir m'inscire                          |
| visiteur    | accéder à une page de connexion                                    | pouvoir me connecter                       |
| visiteur    | accéder à une page à propos                                        | en savoir plus sur greenroots              |
| visiteur    | accéder à une page contact (si authentifié numero membre)          | contacter greenroots                       |
| visiteur    | accéder à une page mentions légales                                | consulter les informations légales et RGPD |
| visiteur    | accéder à une page boutique                                        | découvrir les arbres du catalogue          |
| visiteur    | pouvoir rechercher un produit sur la page boutique                 | rechercher un arbre précis                 |
| visiteur    | pouvoir filtrer un produit selon des critères sur la page boutique | rechercher un arbre précis via critères    |
| visiteur    | accéder au détail d'un produit en particulier                      | avoir plus d'informations sur un arbre     |
| visiteur    | ajouter un produit au panier                                       | préparer un achat futur                    |
| visiteur    | **acheter un produit directement (redirection login)**         | acheter un produit plus rapidement         |
| visiteur    | voir mon panier                                                    | consulter son contenu et le modifier       |

---

| En tant que    | je souhaite pouvoir                                      | afin de                                  |
| -------------- | -------------------------------------------------------- | ---------------------------------------- |
| membre         | proceder au paiement                                     | finaliser mon achat                      |
| membre         | recevoir une confirmation de commande par email          | avoir confirmation de commande par email |
| membre         | suivre l'avancement de mon achat                         | savoir où en est ma commande             |
| membre         | voir l'historique de mes achats                          | retrouver mes précédentes commandes      |
| membre         | demander l'annulation de ma commande                     | annuler la commande                      |
| membre         | modifier mes informations personnelles                   | corriger mes informations personnelles   |
| membre         | supprimer mon compte                                     | effacer mes informations personnelles    |
| membre         | me déconnecter                                           | fermer ma session                        |
| HORS MVP +++++ | **voir la géocalisation de ma plantation**               | voir l'endroit de ma plantation          |
| HORS MVP +++++ | **voir la photo de la plantation** (email auto 6 mois)   | avoir un visuel de la plantation         |

---

| En tant que    | je souhaite pouvoir                       | afin de                                                        |
| -------------- | ----------------------------------------- | -------------------------------------------------------------- |
| admin          | consulter liste de tous les produits      | créer un nouveau produit dans la catalogue                     |
| admin          | ajouter un nouveau produit                | créer un nouveau produit dans la catalogue                     |
| admin          | modifier un produit                       | moddifier un produit dans le catalogue                         |
| admin          | supprimer un produit                      | supprimer un produit du catalogue                              |
| admin          | consulter la liste des utilisateurs       | gerer la base membres                                          |
| admin          | supprimer un compte utilisateur           | supprimer un compte                                            |
| admin          | acceder liste des commandes               | consulter une commande                                         |
| admin          | rechercher une commande via n°cmde        | retrouver une commande via filtre                              |
| admin          | modifier une commande                     | corriger une commande, changer status                          |
| admin          | supprimer une commande                    | supprimer une commande                                         |
| HORS MVP +++++ | **accéder à un tableau de bord simple** | visualiser des statistiques (arbres plantés, nombre d’achats…) |

---
