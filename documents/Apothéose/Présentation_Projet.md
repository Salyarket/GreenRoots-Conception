### MVP :
- Besoins Fonctionnels (Minimum Viable Product - MVP).
- Landing page avec la présentation de GreenRoots et certains arbres à planter.
- Système d'inscription et de connexion.
- Avoir la possibilité (en tant que GreenRoots) de gérer les arbres à proposer : création, édition, suppression, etc.
- Pouvoir consulter les détails d’un arbre disponible à l’achat.
- Pouvoir acheter un arbre (avec un faux tunnel d’achat pour le MVP).
- Pouvoir suivre ses commandes passées en tant qu’utilisateur.
- Avoir un sytème de logs (hors MVP)
- Test unitaires et/ou fonctionnels (hors MVP)

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

# Présentation du projet :

1.  QUOI ?
    Plateforme e-commerce pour le financement d'arbres à planter (symbolique, l'acheteur ne reçoit jamais l'arbre)et le suivi des plantations.
    une partie site vitrine : présentation de GreenRoots ce que l'on vend, les valeurs, à qui on s'adresse.
    Une partie e-commerce : catalogue de produits.
    Une partie "Social" : Les personnes ayant acheté des arbres peuvent suivre l'évolution de la vie de ceux-ci en ce connectant à leur compte (non prioritaire dans le MVP).
    Une partie Administration (GreenRoots avec possibilité future pour des assos partenaires) : de faire la gestion des produits et des news au sujet des arbres plantés.

2.  QUI est la cible du projet ?  
    Particuliers, entreprises, associations.

    - "Léa (Particulier, 28 ans) : veut offrir 5 arbres pour un anniversaire. Mobile first, achat rapide, confiance/impact.

    - Karim (Responsable RSE, 38 ans) : souhaite commander 100 arbres et obtenir une facture + attestation. Besoin d’un compte pro (post‑MVP). Accorde une importance particulière a s'entourer d'acteur engagé, il peut de ce fait avoir une sencibilité à l'éco-conception

    - Guillaume (reponsable d'association) : souhaite souhaite avoir un relais de communication pour les actions de son association qui plante des arbres le long de la Green Belt

    -Éloise (Admin GreenRoots) : publie de nouvelles essences, corrige les stocks, consulte les commandes, suivi clientèle."

### La liste des technologies utilisées pour le projet, avec justification (spécifications techniques)

3.  Comment ?
    Choix des techno :
    Back :
    Express / Typescript
    Swagger pour documenter l'API
    Prisma ORM : plus simple et adapté à TypeScript + sécurité
    XXXX pour les Tests
    XXXX pour les logs
    BDD : PostgreSQL (AU TP SAVOIR : pk pas noSQL ex : mongoDB)
    Front : EJS car rendu SSR plus performant le SEO (Eventullement que la landing page pour le SEO à voir)
    NEXT JS SSR ? MVC ? MVVM ?
    React en complément pour certains éléments interactifs

                Tailwind / MUI ???

### La définition des besoins et des objectifs du projet

## Problèmes auxquels répond le projet :

- Urgence de préserver notre planète , reforestation, lute contre le réchauffement climatique, lutte contre la perte de la biodiversité.
- Sensibiliser les utilisateurs aux enjeux climatiques / faciliter leur implication en la rendant la plus accessible possible.
- Transparence avec un suivi en temps réel des plantations.
- Plateforme claire et facile d'utilisation qui permet un financement sécurisé des plantations
- Aider les particuliers et les entreprises à réduire leur empreinte carbone à leur échelle
- Necessité pour certaines entreprises d'avoir un bilan carbon positif, et pour cela elle passe par des associations / entreprises qui plantes des arbres compensant des activité polluantes.
- Besoin pour des entreprises, de (dé)montrer leur valeurs ecologiques à travers des actions concrètes et sur lequels ils peuvent communiquer.

## Soutions qu'apportent le projet :

- plantations d'arbres , création d'écosystèmes sains, sensibilisation à la préservation de notre planète
