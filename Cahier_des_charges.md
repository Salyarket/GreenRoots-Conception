### CAHIER DES CHARGES – PROJET GREENROOTS

## GLOSSAIRE TECHNIQUE

| Terme | Définition |
| --- | --- |
| MVP	| Minimum Viable Product : version minimale fonctionnelle du projet |
| SSR	| Server Side Rendering : rendu côté serveur pour améliorer le SEO |
| ORM	| Object Relational Mapping : outil facilitant l’accès à la base de données |
| JWT	| JSON Web Token : jeton d’authentification sécurisé |
| CRUD	| Create, Read, Update, Delete |
| API REST	| Interface de communication basée sur requêtes HTTP |
| OWASP	| Organisation publiant les standards de sécurité web |
| RGPD	| Règlement Général sur la Protection des Données |
| MERISE	| Méthode de modélisation de base de données |
| UML	| Langage de modélisation logicielle |

## 1. Présentation du projet

**1.1 Contexte**

GreenRoots est une plateforme e-commerce permettant de financer la plantation de plants d’arbres.
L’acheteur ne reçoit pas physiquement l’arbre, mais il contribue à un projet écologique de reforestation.

La plateforme doit :
- servir de vitrine (valeurs, missions, arbres proposés),
- proposer un catalogue de produits (arbres à planter),
- offrir un tunnel d’achat simple,
- mettre à disposition un espace membre pour le suivi des commandes,
- permettre à l’administrateur de gérer le catalogue + utilisateurs et (Bonus : les commandes).

**1.2 Objectifs**
- Sensibiliser aux enjeux climatiques.
- Rendre l’achat de plantations accessible et rapide.
- Assurer un suivi minimal des commandes (MVP).
- Mettre en place une architecture évolutive (ajout futur de suivi interactif, partenaires, etc.).

---

## 2. Cible du projet

- Particuliers : achat ponctuel ou cadeau (ex. : Bob, 28 ans).
- Entreprises : achat en volume, besoin de justificatifs (ex. : Lina, Responsable RSE).
- Associations : relais de communication sur leurs actions (ex. : Guillaume, Responsable d'association).
- Administrateur GreenRoots : gestion des stocks, commandes et communication (ex. : Éloise).

**2.1 Hypothèses et contraintes**

_Hypothèses de départ_
- La plantation réelle des arbres est gérée par des partenaires externes non modélisés dans le MVP.
- Le paiement en ligne est simulé ou effectué via Stripe en mode test dans le cadre pédagogique.
- L’utilisateur ne reçoit pas physiquement l’arbre : l’achat correspond à un financement symbolique.
- Les localisations affichées sur la carte Leaflet peuvent être fictives ou représentatives dans la version MVP.
- Le projet est destiné à un usage web moderne (desktop et mobile), sans application native.

_Contraintes techniques_
- Stack imposée par le cadre pédagogique : React / Next.js / Express / PostgreSQL.
- Hébergement du frontend sur Vercel.
- Backend et base de données conteneurisés via Docker.
- Authentification JWT obligatoire pour toutes les routes protégées.
- Respect des bonnes pratiques OWASP Top 10.

_Contraintes pédagogiques_
- Utilisation de MERISE pour la modélisation des données.
- Rédaction d’un cahier des charges complet.
- Mise en place d’une API documentée via Swagger.
- Travail en équipe avec rôles Scrum définis.

---

## 3. Périmètre fonctionnel (MVP)

**3.1 Site vitrine**

Landing Page avec présentation de GreenRoots et arbres mis en avant.
Accueil / À propos / Catalogue / Connexion

**3.2 Gestion utilisateurs**

_Inscription et connexion_
Rôles :
- Visiteur : accès catalogue et ajout panier,
- Membre : passage de commande, suivi commandes.
- Admin : gestion des produits/utilisateurs et (Bonus hors MVP : et des commandes).

Statut pour les membres :
- Particulier
- Entreprise
- Association

**3.3 Catalogue et produits**
- Consulter la liste des arbres disponibles et pouvoir filtrer.
- Voir la fiche détaillée d’un arbre (nom, description, prix, image, stock...).

**3.4 Panier et commandes**
- Ajouter un arbre au panier.
- Passer une commande via un tunnel d’achat fictif.
- Consulter ses commandes passées.

**3.5 Back-office admin**
- Gestion des produits : CRUD sur les arbres (ajout, modification, suppression).
- Gestion des utilisateurs
(Bonus hors MVP : gestion des commandes)

**3.6 Règles de gestion métier**

_Utilisateurs_
- Un utilisateur peut être : Particulier, Entreprise ou Association.
- Un utilisateur possède un seul compte.
- Un utilisateur peut passer plusieurs commandes.
- Un administrateur peut gérer les produits et les utilisateurs.

_Produits (arbres)_
- Chaque arbre possède un nom, une description, un prix et un stock.
- Un arbre peut être associé à une localisation de plantation.
- Un arbre ne peut pas être commandé si son stock est insuffisant.
- Un administrateur peut créer, modifier ou supprimer un arbre.

_Panier_
- Un panier est lié à une session utilisateur.
- Le panier ne peut contenir qu’une quantité inférieure ou égale au stock disponible.
- Le panier est sauvegardé temporairement dans le navigateur (LocalStorage).

_Commandes_
- Une commande est obligatoirement liée à un utilisateur.
- Une commande contient un ou plusieurs produits.
- Lorsqu’une commande est validée, le stock des produits est décrémenté.
- Une commande possède un statut :
  - pending
  - paid
  - cancelled

_Sécurité_
- Les mots de passe sont stockés hâchés.
- Les routes admin sont accessibles uniquement au rôle administrateur.
- Les utilisateurs ne peuvent consulter que leurs propres commandes.

---

## 4. Évolutions possibles

- Ajouter des critères sur les arbres : carbone CO2 , croissance, besoin d'eau, types fruitiers
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
- Avertir en cas de retour en stock d'un produit.

---

## 5. Justification de choix technologiques

**5.1 Frontend**

- Next.js : choisi pour sa capacité à faire du Server-Side Rendering (SSR) et du Static Site Generation (SSG), ce qui améliore le SEO (important pour être visible avec notre catalogue de produits) et les performances. C’est un standard moderne largement utilisé dans l’écosystème React.

- React : librairie de composants réutilisables et dynamiques, il permet de développer une interface utilisateur fluide et interactive. C’est ce que nous avons appris à l’école, ce qui garantit une bonne maîtrise.

- TypeScript : améliore la robustesse du code en ajoutant du typage statique, ce qui réduit les erreurs en production et facilite la maintenance.

- Tailwind CSS : choisi pour gagner du temps sur le design responsive avec des classes utilitaires, tout en gardant la possibilité de personnaliser la charte graphique. (librairie CSS type SHADCN)

=> Justification pédagogique : Ce sont les technologies modernes que nous avons vues à l’école, donc nous pouvons les appliquer concrètement dans ce projet tout en respectant les standards de l’industrie.

---

**5.2 Backend**

- Express.js : framework Node.js léger, flexible et facile à utiliser, qui permet de créer rapidement une API REST. C’est un choix pédagogique car c’est celui qui a été enseigné.

- TypeScript : même justification que côté front : fiabilité, réduction des bugs, meilleure lisibilité du code.

- Prisma ORM : simplifie les interactions avec la base de données PostgreSQL grâce à un mapping objet-relationnel clair et un générateur de types automatiques (sécurité supplémentaire au niveau du code et bonne synergie avec TypeScript).

- Swagger : documentation automatique de l’API pour faciliter les tests et la communication entre développeurs.

- Winston : gestion centralisée des logs (erreurs, événements importants, monitoring) → bon pour le suivi et le débogage en production.

=> Justification pédagogique : Nous avons appris Express et Prisma en cours, ce qui garantit que nous savons les utiliser. C’est aussi un choix cohérent avec la stack full JS/TS.

---

**5.3 Base de données**

- PostgreSQL : SGBD relationnel robuste, open source, adapté aux projets qui demandent de la cohérence et de l’intégrité des données (contraintes, clés étrangères).

- Méthodologie MERISE : permet de structurer la base en passant par MCD → MLD → MPD.

- Passage en modèle relationnel : cohérent avec PostgreSQL et facilite l’évolution du schéma.

- les logs auraient pu être stockés dans une base de données SQL ou un outil spécialisé, mais dans le cadre d'un projet scolaire nous avons choisi de ne pas nous disperser.

=> Justification pédagogique : PostgreSQL est le SGBD étudié en cours et utilisé dans de nombreux projets réels. MERISE fait partie des méthodes enseignées et permet de justifier un vrai processus de conception.

---

**5.4 Autres contraintes**

- Compatibilité navigateur : Chrome et Safari en priorité, tout en assurant la compatibilité avec Edge et Firefox.

- Sécurité : respect des bonnes pratiques OWASP TOP 10 (prévention contre injections SQL, XSS, CSRF, etc.).

- Authentification : mise en place d’une authentification via JWT avec gestion des rôles (membre / administrateur) pour sécuriser l’accès aux ressources.

- RGPD : possibilité pour l’utilisateur de demander la suppression de son compte et de ses données personnelles. Les données liées aux commandes peuvent être anonymisées afin de conserver des statistiques sans conserver d’informations personnelles.

- Accessibilité (RGAA) : garantir que l’application soit utilisable par tous (contraste, navigation clavier, aria-labels, etc.).

- Hébergement Cloud :

  - Front déployé sur Vercel, plateforme optimisée pour Next.js.

  - Back et base de données PostgreSQL déployés sur Railway, solution Platform as a Service (PaaS) permettant un déploiement simplifié et une gestion automatique des environnements.
  
  (- Docker pour backend + BDD → simplicité de déploiement, scalabilité, gratuit.)

=> Justification pédagogique : Ce choix d’hébergement permet de se concentrer sur le développement applicatif sans complexifier inutilement la gestion d’infrastructure, tout en utilisant des outils modernes proches des pratiques professionnelles.

---

## 6. Justification d'architecture de projet (cf UML : Diagramme architecture)

**6.1 Modèle Frontend : MVVM**

    - Model = données reçues de l’API .
    - View = composants affichés React/Tailwind (UI).
    - ViewModel = hooks/états/contexts qui préparent ces données


Nous avons fait ce choix car il est particulièrement adapté à React, car il facilite la réutilisation des composants, améliore la clarté de la logique d’affichage et permet une gestion efficace de l’état de l’application.

Pourquoi pas MVC ? : Parce que la vue (UI) est directement liée à l’état et non pilotée par un contrôleur unique.

---

**6.2 Modèle Backend : MVC**

    - Model = gérer les données (Models = DB via Prisma + PostgreSQL)
    - View = pas de view mais du JSON envoyé
    - Controller = organise logique métier (controllers, routes + MDW).

Nous avons fait ce choix car il nous permet :

- une séparation claire des responsabilités
- une meilleure testabilité du code
- une évolution facilitée de l’API.

---

**6.3 Modèle BDD : Relationnel (SQL/PostgreSQL)**

Nous avons fait ce choix car :

- nos données sont fortement structurées (utilisateurs, produits, commandes,logs)
- nous avons besoin de relations complexes (commande contient plusieurs produits)
- nous devons garantir l'intégrité des données (commande doit toujours être liée à un utilisateur)

Le modèle relationnel nous permet également de respecter la structure métier définie dans le MCD tout en restant compatible avec des évolutions futures

---

## 7. Arborescence Front-End

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

## 8 Arborescence Back-End

**Auth**

- POST /api/auth/register → inscription d’un utilisateur
- POST /api/auth/login → connexion email MDP (JWT)
- POST /api/auth/logout → déconnexion
- GET /api/auth/me → récupérer l’utilisateur si JWT stocké dans LocalStorage / Cookie Sécurisé

**Users**

- GET /api/users → liste des utilisateurs (admin uniquement)
- GET /api/users/:id → détail d’un utilisateur
- PUT /api/users/:id → modifier un utilisateur
- DELETE /api/users/:id → supprimer un compte utilisateur (Utilisateur si possède compte + admin )

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

## 9. Planning prévisionnel(macro)

| Sprint   | Durée     | Objectifs                                                                                                                                    |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Sprint 0 | 1 semaine | Conception (Cahier des charges + user-stories + recueil de données + dictionnaire de données + Merise + UML + ERD + wireframes + maquettes + charte graphique ) |

---

## 10. Livrables

- Application MVP fonctionnelle déployée.
- Application avec système de TESTS unitaires/fonctionnels + LOG
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

## 11. Gestion des risques

**11.1 Risques techniques**
| ....Risque.... | ....Impact.... | ....Probabilité.... | ....Mesures préventives / correctives.... |

- Failles de sécurité (injection SQL, XSS, fuite des données personnelles) | ÉLEVÉ | MOYEN | Utilisation d’un ORM, validation des entrées NTUI, chiffrement des mots de passe (bcrypt), JWT sécurisé, controle input BACK + BDD + FRONT |
- Difficultés d’intégration entre front et back
- Choix technologique inadapté (ex. Next.js/Express/Prisma mal maîtrisés)

**11.2 Risques organisationnels**
| Risque | Impact | Probabilité | Mesures préventives / correctives |

- Retards dans le planning
- Mauvaise répartition des rôles dans l’équipe
- Difficultés de communication interne
- Départ ou indisponibilité d’un membre clé

## 12. Liste des rôles de chacun

- Oumaïma : Product Owner : tranche sur les questions de produit ;
- Saliha : Scrum Master : tranche sur les questions d'organisation ;
- Adrien : Lead Devs : tranche sur les question techniques ;
- Tarig : Lead Devs : tranche sur les question techniques.

## 13. Points de vigilance technique

- Limitation du nombre d’images uploadées côté front et back.
- Politique de suppression en base : ON DELETE CASCADE ou SET NULL selon les relations.
- Vérification de la suppression conforme RGPD.