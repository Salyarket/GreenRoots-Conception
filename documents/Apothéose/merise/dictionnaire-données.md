# Dictionnaire de données

## User

| Champ       | Type                                             | Unique | Not null | Référence | Par défaut    | Exemple de valeur                         | Explication                                     |
| ----------- | ------------------------------------------------ | ------ | -------- | --------- | ------------- | ----------------------------------------- | ----------------------------------------------- |
| `id`        | GENERATED                                        | ✅     | ✅       | -         | -             | 1                                         | Identifiant unique de l’utilisateur             |
| `firstname` | VARCHAR(255)                                     | ❌     | ✅       | -         | -             | "Alice"                                   | Prénom de l’utilisateur                         |
| `lastname`  | VARCHAR(255)                                     | ❌     | ✅       | -         | -             | "Durand"                                  | Nom de famille de l’utilisateur                 |
| `email`     | VARCHAR(320)                                     | ✅     | ✅       | -         | -             | "[alice@mail.com](mailto:alice@mail.com)" | Adresse email de l’utilisateur                  |
| `password`  | VARCHAR(255)                                     | ❌     | ✅       | -         | -             | "\$2a\$10\$..."                           | Mot de passe chiffré (bcrypt)                   |
| `status`    | ENUM('particulier', 'association', 'entreprise') | ❌     | ✅       | -         | 'particulier' | "association"                             | Statut : particulier / association / entreprise |
| `role`      | ENUM('member', 'admin')                          | ❌     | ✅       | -         | 'member'      | "admin"                                   | admin/membre                                    |

## Product

| Champ         | Type           | Unique | Not null | Référence | Par défaut | Exemple de valeur                                          | Explication                           |
| ------------- | -------------- | ------ | -------- | --------- | ---------- | ---------------------------------------------------------- | ------------------------------------- |
| `id`          | GENERATED      | ✅     | ✅       | -         | -          | 101                                                        | Identifiant unique du produit (arbre) |
| `name`        | VARCHAR(255)   | ❌     | ✅       | -         | -          | "Chêne vert"                                               | Nom de l’arbre                        |
| `price`       | DECIMAL(10,2)  | ❌     | ✅       | -         | 0.0        | 15.50                                                      | Prix unitaire                         |
| `description` | VARCHAR(10000) | ❌     | ✅       | -         | -          | "Arbre robuste méditerranéen"                              | Description du produit                |
| `image_url`   | TEXT[]         | ❌     | ✅       | -         | -          | ["https://cdn/trees/oak.png", "https://cdn/trees/oak.png"] | URL d’image du produit                |
| `available`   | BOOLEAN        | ❌     | ✅       | -         | true       | true                                                       | Disponibilité (actif / désactivé)     |
| `stock`       | INT            | ❌     | ✅       | -         | 0          | 120                                                        | Quantité disponible                   |

| `scientific_name` | VARCHAR(255) | ❌ | ✅ | - | - | "Chêne vert" | Nom de l’arbre |
| `Carbon` | INT | ❌ | ✅ | - | - | "Chêne vert" | Nom de l’arbre |

## Location

| Champ       | Type         | Unique | Not null | Référence | Par défaut | Exemple de valeur        | Explication                   |
| ----------- | ------------ | ------ | -------- | --------- | ---------- | ------------------------ | ----------------------------- |
| `id`        | GENERATED    | ✅     | ✅       | -         | -          | 5                        | Identifiant unique du terrain |
| `name`      | VARCHAR(255) | ❌     | ✅       | -         | -          | "Forêt de Fontainebleau" | Nom du terrain de plantation  |
| `gps_point` | POINT        | ✅     | ✅       | -         | -          | "48.4042, 2.7023"        | Coordonnées GPS               |

## Order

| Champ     | Type                                 | Unique | Not null | Référence | Par défaut | Exemple de valeur   | Explication                                 |
| --------- | ------------------------------------ | ------ | -------- | --------- | ---------- | ------------------- | ------------------------------------------- |
| `id`      | GENERATED                            | ✅     | ✅       | -         | -          | 5001                | Identifiant unique de la commande           |
| `date`    | TIMESTAMP WITH TIME ZONE             | ❌     | ✅       | -         | now()      | 2025-09-10 14:30:00 | Date de création de la commande             |
| `status`  | ENUM('pending', 'paid', 'cancelled') | ❌     | ✅       | -         | "pending"  | "paid", "cancelled" | État de la commande                         |
| `user_id` | INT                                  | ❌     | ✅       | user(id)  | -          | 15                  | Référence vers l’utilisateur ayant commandé |
| `total`   | DECIMAL(10,2)                        | ❌     | ✅       | -         | 0.0        | 45.00               | Prix total de la commande                   |

## Order_item

| Champ        | Type          | Unique | Not null | Référence   | Par défaut | Exemple de valeur | Explication                                                     |
| ------------ | ------------- | ------ | -------- | ----------- | ---------- | ----------------- | --------------------------------------------------------------- |
| `id`         | GENERATED     | ✅     | ✅       | -           | -          | 701               | Identifiant unique de la ligne                                  |
| `order_id`   | INT           | ❌     | ✅       | order(id)   | -          | 5001              | Référence vers la commande                                      |
| `product_id` | INT           | ❌     | ✅       | product(id) | -          | 101               | Référence vers le produit                                       |
| `quantity`   | INT           | ❌     | ✅       | -           | 1          | 2                 | Nombre d’arbres commandés                                       |
| `unit_price` | DECIMAL(10,2) | ❌     | ✅       | -           | 0.0        | 15.50             | Prix unitaire au moment de la commande + garder historique prix |

## Product_location

| Champ         | Type | Unique | Not null | Référence    | Par défaut | Exemple de valeur | Explication                                   |
| ------------- | ---- | ------ | -------- | ------------ | ---------- | ----------------- | --------------------------------------------- |
| `product_id`  | INT  | ❌     | ✅       | product(id)  | -          | 101               | Référence vers un produit (arbre)             |
| `location_id` | INT  | ❌     | ✅       | location(id) | -          | 5                 | Référence vers un lieu de plantation possible |

**Clé primaire composée** : (`product_id`, `location_id`)

## Log

| Champ       | Type                             | Unique | Not null | Référence | Par défaut | Exemple de valeur                  | Explication                           |
| ----------- | -------------------------------- | ------ | -------- | --------- | ---------- | ---------------------------------- | ------------------------------------- |
| `id`        | GENERATED                        | ✅     | ✅       | -         | -          | 9001                               | Identifiant du log                    |
| `timestamp` | TIMESTAMP                        | ❌     | ✅       | -         | now()      | 2025-09-10 15:05:00                | Date/heure du log                     |
| `level`     | ENUM('info', 'warning', 'error') | ❌     | ✅       | -         | "info"     | "error"                            | Niveau de gravité du log              |
| `message`   | VARCHAR(10000)                   | ❌     | ✅       | -         | -          | "Commande validée"                 | Message lisible                       |
| `user_id`   | INT                              | ❌     | ❌       | user(id)  | NULL       | 15                                 | Utilisateur concerné (nullable)       |
| `context`   | JSONB                            | ❌     | ❌       | -         | NULL       | { "order_id": 987, "status": "ok"} | Données supplémentaires contextuelles |
