### CAHIER DES CHARGES – PROJET GREENROOTS

## 1 Présentation du projet

**1.1 Contexte**

GreenRoots est une plateforme e-commerce permettant de financer la plantation de plants d’arbres.
L’acheteur ne reçoit pas physiquement l’arbre, mais il contribue à un projet écologique de reforestation.

La plateforme doit :
-servir de vitrine (valeurs, missions, arbres proposés),
-proposer un catalogue de produits (arbres à planter),
-offrir un tunnel d’achat simple,
-mettre à disposition un espace membre pour le suivi des commandes,
-permettre à l’administrateur de gérer le catalogue + utilisateurs et (BONUS : les commandes).

**1.2 Objectifs**
-Sensibiliser aux enjeux climatiques.
-Rendre l’achat de plantations accessible et rapide.
-Assurer un suivi minimal des commandes (MVP).
-Mettre en place une architecture évolutive (ajout futur de suivi interactif, partenaires, etc.).

---

## 2 Cible du projet

-Particuliers : achat ponctuel ou cadeau (ex. Léa, 28 ans).
-Entreprises : achat en volume, besoin de justificatifs (ex. Karim, Responsable RSE).
-Associations : relais de communication sur leurs actions (ex. Guillaume reponsable association).
-Administrateur GreenRoots : gestion des stocks, commandes et communication (ex. Éloise).

---

## 3 Périmètre fonctionnel (MVP)

**3.1 Site vitrine**

Landing page avec présentation de GreenRoots et arbres mis en avant.
Page /about /contact /boutique

**3.2 Gestion utilisateurs**

Inscription et connexion.

Rôles :
-Visiteur : accès catalogue et ajout panier,
-Membre : passage de commande, suivi commandes.
-Admin : gestion des produits/utilisateurs et (BONUS HORS MVP : et des commandes).

Statut pour les membres :
-Particulier
-Entreprise
-Association

**3.3 Catalogue et produits**
Consulter la liste des arbres disponibles et pouvoir filtrer.
Voir la fiche détaillée d’un arbre (nom, description, prix, image, stock...).

**3.4 Panier et commandes**
Ajouter un arbre au panier.
Passer une commande via un tunnel d’achat fictif.
Consulter ses commandes passées.

**3.5 Back-office admin**
gestion des produits : CRUD sur les arbres (ajout, modification, suppression).
Gestion des utilisateurs
(BONUS HORS MVP : gestion des commandes)

---

## 4 Évolutions possibles

- ajouter des critères sur les arbres : CARBONE CO2 , croissance, besoin d'eau, types fruitiers
- Pouvoir suivre l’évolution des arbres que l’on a achetés : lieu, croissance, photos potentielles, etc.
- Système de suivi interactif : carte interactive pour visualiser les lieux exacts de plantation des arbres achetés.
- Back-office pour l'administration, la gestion des profils utilisateurs, le suivi des arbres, etc.
- Ajout de fonctionnalités avancées pour les partenaires : via un rôle spécifique, pouvoir proposer en tant qu’externe un lot d’arbres à planter, etc.
- Système de parrainage : pour chaque arbre acheté, possibilité d'inviter des amis ou entreprises à planter des arbres avec récompenses symboliques.
- Programme de fidélité et badges : récompenses virtuelles en fonction des contributions (nombre d’arbres plantés, régularité des commandes, etc.).
- Événements et campagnes : gestion des campagnes spéciales ou saisonnières de plantation avec compteur d'objectifs collectifs.
- Système de notifications : avertir les utilisateurs d’événements significatifs (plantation réussie, anniversaire d’un arbre, campagnes spéciales, etc.).
- Intégration d'une API pour le paiement sécurisé, comme [Stripe](https://stripe.com/fr).
- Support multilingue : au moins anglais et français.
- M'avertir en cas de retour en stock d'un produit.

---

## 5 JUSTIFICATION CHOIX TECHNOLOGIQUES

**5.1 Frontend**

- Next.js : choisi pour sa capacité à faire du Server-Side Rendering (SSR) et du Static Site Generation (SSG), ce qui améliore le SEO (important pour être visible avec notre catalogue de produits) et les performances. C’est un standard moderne largement utilisé dans l’écosystème React.

- React : librairie de composants réutilisables et dynamiques, il permet de développer une interface utilisateur fluide et interactive. C’est ce que nous avons appris à l’école, ce qui garantit une bonne maîtrise.

- TypeScript : améliore la robustesse du code en ajoutant du typage statique, ce qui réduit les erreurs en production et facilite la maintenance.

- Tailwind CSS : choisi pour gagner du temps sur le design responsive avec des classes utilitaires, tout en gardant la possibilité de personnaliser la charte graphique. (librairie CSS type SHADCN)

=============================> Justification pédagogique : Ce sont les technologies modernes que nous avons vues à l’école, donc nous pouvons les appliquer concrètement dans ce projet tout en respectant les standards de l’industrie.

---

**5.2 Backend**

- Express.js : framework Node.js léger, flexible et facile à utiliser, qui permet de créer rapidement une API REST. C’est un choix pédagogique car c’est celui qui a été enseigné.

- TypeScript : même justification que côté front : fiabilité, réduction des bugs, meilleure lisibilité du code.

- Prisma ORM : simplifie les interactions avec la base de données PostgreSQL grâce à un mapping objet-relationnel clair et un générateur de types automatiques (sécurité supplémentaire au niveau du code et bonne synergie avec TypeScript ).

- Swagger : documentation automatique de l’API pour faciliter les tests et la communication entre développeurs.

- Winston : gestion centralisée des logs (erreurs, événements importants, monitoring) → bon pour le suivi et le débogage en production.

=============================> Justification pédagogique : Nous avons appris Express et Prisma en cours, ce qui garantit que nous savons les utiliser. C’est aussi un choix cohérent avec la stack full JS/TS.

---

**5.3 Base de données**

- PostgreSQL : SGBD relationnel robuste, open source, adapté aux projets qui demandent de la cohérence et de l’intégrité des données (contraintes, clés étrangères).

- Méthodologie MERISE : permet de structurer la base en passant par MCD → MLD → MPD.

- Passage en modèle relationnel : cohérent avec PostgreSQL et facilite l’évolution du schéma.

- les logs auraient pu être stocker dans une base de données SQL ou un outil spécialisé, mais dans le cadre d'un projet scolaire nous avons choisis de ne pas nous éparpiller

=============================> Justification pédagogique : PostgreSQL est le SGBD étudié en cours et utilisé dans de nombreux projets réels. MERISE fait partie des méthodes enseignées et permet de justifier un vrai processus de conception.

---

**5.4 Autres contraintes**

- Sécurité : respect des bonnes pratiques OWASP TOP 10 (prévention contre injections SQL, XSS, CSRF, etc.).

- Authentification : via JWT + gestion des rôles (admin/member) pour sécuriser l’accès.

- RGPD : protection des données personnelles (ANONYMISATION OU SUPPRESSION ????).

- Accessibilité (RGAA) : garantir que l’application soit utilisable par tous (contraste, navigation clavier, aria-labels, etc.).

- Hébergement Cloud :

  - Vercel pour le frontend → intégré nativement avec Next.js.

  - Docker pour backend + BDD → simplicité de déploiement, scalabilité, gratuit.

=============================> Justification pédagogique : Ces contraintes sont inspirées à la fois des cours et des standards professionnels. Même si le projet reste scolaire, cela nous entraîne à respecter des normes réelles de développement web.

---

## 6 JUSTIFICATION ARCHITECTURE PROJET (cf UML : Diagramme architecture)

**1 Modèle Frontend : MVVM**

    - Model = données reçues de l’API (Prisma/PostgreSQL).
    - ViewModel = hooks/états/contexts qui préparent ces données.
    - View = composants React/Tailwind.

L’interface utilisateur, développée avec React/Next.js, s’appuie sur une approche inspirée du MVVM.
Le Model correspond aux données reçues depuis l’API.
La View correspond aux composants React, qui se contentent d’afficher ces données.
Le ViewModel est assuré par la gestion d’état (hooks, context, stores), qui prépare et formate les données avant de les transmettre aux composants.

Nous avons fait ce choix car il est particulièrement adapté à React, car il facilite la réutilisation des composants, améliore la clarté de la logique d’affichage et permet une gestion efficace de l’état de l’application.

---

**1 Modèle Backend : MVC**

    - Model = Prisma + PostgreSQL.
    - View = JSON envoyé en réponse à l’API.
    - Controller = routes Express.

L'API sous Express.js suit une logique de type MVC.
Le Model est représenté par la base de données relationnelle PostgreSQL, manipulée via Prisma ORM.
La View est ici remplacée par les réponses JSON envoyées au frontend.
Le Controller correspond aux routes et middlewares Express, responsables de recevoir les requêtes HTTP, d’appeler la logique métier et de renvoyer une réponse.

Nous avons fait ce choix car il nous permet une séparation claire des responsabilités, une meilleure testabilité du code et une évolution facilitée de l’API.

---

**1 Modèle BDD : Relationnel (SQL/PostgreSQL)**

Nous avons fait ce choix car :

- nos données sont fortement structurées (utilisateurs,produits,commandes,logs)
- nous avons besoin de relations complexes (commande contient plusieurs produits)
- nous devons garantir l'intégrité des données (commande doit toujours être liée à un utilisateur)

Le modèle relationnel nous permet également de respecter la structure métier définie dans le MCD tout en restant compatible avec des évolutions futures

---

## 7 ARBORESCENCE FRONT (LE CHEMIN DE L'UTILISATEUR, CORRESPONDRA AUX ROUTES FRONT)

- /
  - /produits
    - /produits/[:slug]
  - /auth
    - /auth/connexion
    - /auth/inscription
  - /panier
  - /paiement
  - /profil
    - /profil/commandes
    - /profil/commandes/[:id]
  - /contact
  - /a-propos
  - /mentions-legales
  - /termes-et-conditions
  - /utilisation-des-cookies
  - /politique-confidentialite
  - /404
  - /admin
    - /admin/produits
    - /admin/commandes
    - /admin/utilisateurs

---

## 8 ARBORESCENCE BACK (ENDPOINTS API)

**Auth**

- POST /api/auth/register → inscription d’un utilisateur
- POST /api/auth/login → connexion email MDP (JWT)
- POST /api/auth/logout → déconnexion
- GET /api/auth/me → récupérer l’utilisateur si JWT stocké dans LocalSorage / CookieSécurisé

**Users**

- GET /api/users → liste des utilisateurs (admin uniquement)
- GET /api/users/:id → détail d’un utilisateur
- PUT /api/users/:id → modifier un utilisateur
- DELETE /api/users/:id → supprimer un compte utilisateur (Utilisateur si possede compte + admin )

**User_Types**

- GET /api/user-types → liste des types particulier, association… (admin uniquement)
- GET /api/user-types/:id → détail d’un type (admin uniquement)
- POST /api/user-types → créer un type (admin uniquement)
- PUT /api/user-types/:id → mettre à jour (admin uniquement)
- DELETE /api/user-types/:id → supprimer (admin uniquement)

**Products**

- GET /api/products → liste des produits (arbres)
- GET /api/products/:id → détail d’un produit
- POST /api/products → créer un produit (admin uniquement)
- PUT /api/products/:id → modifier un produit (admin uniquement)
- DELETE /api/products/:id → supprimer un produit (admin uniquement)

**Locations**

- GET /api/locations → liste des terrains (admin uniquement)
- GET /api/locations/:id → détail d’un terrain (admin uniquement)
- POST /api/locations → créer un terrain (admin uniquement)
- PUT /api/locations/:id → modifier un terrain (admin uniquement)
- DELETE /api/locations/:id → supprimer un terrain (admin uniquement)

**Orders**

- GET /api/orders → utilisateur peut consulter historique de ses commandes
- GET /api/orders/:id → détail d’une commande
- POST /api/orders → créer une commande
- PUT /api/orders/:id → mettre à jour une commande ex: statut (admin uniquement)
- DELETE /api/orders/:id → supprimer une commande (admin uniquement)

**Order_Items**

- GET /api/orders/:orderId/items → liste des items d’une commande (admin uniquement)
- POST /api/orders/:orderId/items → ajouter un produit à une commande (admin uniquement)
- PUT /api/orders/:orderId/items/:itemId → modifier quantité ou prix (admin uniquement)
- DELETE /api/orders/:orderId/items/:itemId → supprimer un produit d’une commande (admin uniquement)

**Logs**

- GET /api/logs → liste des logs (admin uniquement)
- GET /api/logs/:id → détail d’un log (admin uniquement)

---

## 9 PLANNING PRÉVISIONNEL (MACRO)

| Sprint   | Durée     | Objectifs                                                                                                                                    |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | 1 semaine | Conception (user-stories + recueil de données + dictionnaires de données + Merise + UML + ERD + wireframes + maquettes + chartre graphique ) |

---

SPRINT 0 https://github.com/O-clock-Athenes/Projects-CDA/blob/main/.github/ISSUE_TEMPLATE/sp0-suivi-conception.md

**_ !!!!!!!!!!!!!!!!!!! SP 0 RESTE A FAIRE !!!!!!!!!!!!!!!!!!! _**

- Les navigateurs compatibles (ECOSIA FRIENDLY ?????????????? )

- Wireframes
- Maquettes
- Charte graphique

---

---

---

---

## 10 LIVRABLES

- Application MVP fonctionnelle déployée.
- Application avec système de TEST unitaire/fonctionnel + LOG
- Cahier des charges (présent document).
- User stories
- Dictionnaire de données.
- Recueil de données
- Diagrammes UML :
  - diagramme de cas d'utilisation,
  - diagramme de séquence (validation commande),
- Modèle ERD
- Merise : MCD + MLD + MPD

---

## 11 GESTION DES RISQUES

**8.1 Risques techniques**
| ....Risque.... | ....Impact.... | ....Probabilité.... | ....Mesures préventives / correctives.... |

- Failles de sécurité (injection SQL, XSS, fuites données personnelles) | ÉLEVÉ | MOYEN | Utilisation d’ORM, validation des entrées NTUI, chiffrement des mots de passe (bcrypt), JWT sécurisé, controle input BACK + BDD + FRONT |
- Difficultés d’intégration entre front et back
- Choix technologique inadapté (ex. Next.js/Express/Prisma mal maîtrisés)

**8.2 Risques organisationnels**
| Risque | Impact | Probabilité | Mesures préventives / correctives |

- Retards dans le planning
- Mauvaise répartition des rôles dans l’équipe
- Difficultés de communication interne
- Départ ou indisponibilité d’un membre clé
- mort subite du nouveau née

## 12 LISTE DES RÔLES DE CHACUN

- Oumaïma : Product Owner : tranche sur les questions de produit
- Saliha : Scrum Master : tranche sur les questions d'organisation
- Adrien : Lead Devs : tranche sur les question techniques
- Tarig : Lead Devs : tranche sur les question techniques

## 13 SECURITE A LIRE SOUVENT

- faire controle tableau images car pas de max images en BDD (controler en front avant le create / update de l'admin) et en backend via le controlleur avant envoie BDD
- revoir RGBD suppression de données Database et voir si compte utilisateur supprimé si commande supprimé ou set nul ? commande orpheline VOIR CREATE_TABLE.SQL DELETE ON CASCADE OR SET NULL
