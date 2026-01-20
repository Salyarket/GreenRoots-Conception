# GreenRoots

## Présentation Générale

- **Quoi ?** Développement d'une plateforme d'e-commerce permettant d'acheter des arbres à planter (par GreenRoots et demain des associations tierces) pour contribuer à la reforestation.
- **Qui ?** GreenRoots (fictif) est née de l’urgence de prendre des mesures concrètes pour préserver notre planète face à la déforestation et au changement climatique.
- **Pour qui ?** Public éco-conscient, entreprises responsables, associations engagées, etc.
- **Comment ?** En équipe à définir (positionnement via un formulaire de voeux) par l'équipe pédagogique. Organisation en méthode agile pour la gestion de projet.
- **Quand ?** En plusieurs sprints qui inclueront des tâches de : conception, code, déploiement, recettage, etc.
- **Pourquoi ?** Pour la réalisation d'un projet fictif à but pédagogique visant l'obtention du Titre Professionnel.

## Présentation du Projet de Développement

### Besoins Fonctionnels (Minimum Viable Product - MVP)

- Landing page avec la présentation de GreenRoots et certains arbres à planter.
- Système d'inscription et de connexion.
- Avoir la possibilité (en tant que GreenRoots) de gérer les arbres à proposer : création, édition, suppression, etc.
- Pouvoir consulter les détails d’un arbre disponible à l’achat.
- Pouvoir acheter un arbre (avec un faux tunnel d’achat pour le MVP).
- Pouvoir suivre ses commandes passées en tant qu’utilisateur.

### Propositions d’évolutions possibles

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

### Contraintes Techniques (notamment liées au TP)

- **Technologies** : choix libres mais justifiés.
- **Sécurité :** authentification sécurisée, protection contre les failles courantes (XSS, injections SQL, etc.).
- **Déploiement :** rédaction a minima d'une procédure de déploiement (CI/CD en bonus).
- **Responsive :** application développée en mobile first et responsive.
- **Accessibilité :** respect des normes d'accessibilité web [WCAG](https://www.w3.org/Translations/WCAG20-fr/).
- **RGPD et mentions légales :** mettre en place les mentions légales liées au règlement général sur la protection des données (RGPD).
- **Versionning :** utilisation de Git et GitHub.
- **API** : en consommer au moins une (qu’elle soit interne ou externe). Un seul appel peut être suffisant, l’API ne doit pas forcément être utilisée pour tout le projet.
- **SEO** : appliquer les bonnes pratiques visant à maximiser le référencement du projet.
- **Tests** : plan de tests couvrant les fonctionnalités principales du projet.
- **Conteneurisation (Docker)** : pour l'environnement de développement voire pour le déploiement
- **Démarche d'éco-conception** (optimisation des images, minification des fichiers, etc.).
