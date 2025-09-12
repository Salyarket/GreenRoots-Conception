### CAHIER DES CHARGES – PROJET GREENROOTS

## 1 Présentation du projet

**1.1 Contexte**

GreenRoots est une plateforme e-commerce permettant de financer la plantation symbolique d’arbres.
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

## 5 Contraintes techniques + Choix technologiques **\*\*\***JUSTIFIER LA PERTINENCE ET LE CHOIX\***\*\*\*\*\*\*\***

**5.1 Frontend**
-Next.js (SSR pour SEO et performance).
-React pour les composants interactifs.
-Tailwind CSS (ou MUI) pour le style.

**5.2 Backend**
Express.js (API REST).
TypeScript pour la robustesse.
Prisma ORM avec PostgreSQL.
Swagger pour la documentation de l’API.
Winston (ou équivalent) pour les logs.

**5.3 Base de données**
PostgreSQL
Modélisation MERISE → passage en modèle relationnel.

**5.4 Autres contraintes**
Authentification via JWT.
Respect RGPD (gestion des données personnelles) + ACCESSIBILITE RGAA.
Hébergement cloud (Vercel pour le front, Railway/Render/Docker pour l’API et la BDD).

---

## 6 Planning prévisionnel (macro) \***\*\*\*\***A REVOIRRRRRRRRRR \***\*\*\*\*\*\***

| Sprint   | Durée     | Objectifs                                                                                                  |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| Sprint 0 | 1 semaine | Mise en place du repo, environnement, base Next.js + Express + PostgreSQL                                  |
| Sprint 1 | 1 semaine | Authentification (inscription / login), création du modèle BDD                                             |
| Sprint 2 | 1 semaine | Catalogue produits (CRUD côté admin, affichage côté client) , Panier + commande (fictive), suivi commandes |
| Sprint 3 | 1 semaine | Tests, déploiement MVP, documentation (UML + cahier des charges)                                           |

---

---

---

SPRINT 0 https://github.com/O-clock-Athenes/Projects-CDA/blob/main/.github/ISSUE_TEMPLATE/sp0-suivi-conception.md

## SP 0 A FAIRE

- Le choix et la justification de l'architecture du projet (front, back, BDD)
- Les navigateurs compatibles (ECOSIA FRIENDLY ? )
- L'arborescence de l'application (le chemin de l'utilisateur, correspondra aux routes front)
- La liste des routes prévues (les routes front sont couvertes par l'arborescence en toute logique, restent les endpoints de votre API)
- La liste des rôles de chacun
- Wireframes
- Maquettes
- Charte graphique
- BONUS : un diagramme de l'architecture de l'application (front, back, BDD, etc.)

---

---

---

---

## 7 Livrables

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

## 8 Gestion des risques

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

## 9 SECURITE A LIRE SOUVENT

- faire controle tableau images car pas de max images en BDD (controler en front avant le create / update de l'admin) et en backend via le controlleur avant envoie BDD
- revoir RGBD suppression de données Database et voir si compte utilisateur supprimé si commande supprimé ou set nul ? commande orpheline VOIR CREATE_TABLE.SQL DELETE ON CASCADE OR SET NULL
