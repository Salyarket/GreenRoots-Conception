# Dictionnaire de données

## User

| Champ       | Type      | Unique | Not null | Référence | Par défaut    | Exemple de valeur                         | Explication                                     |
| ----------- | --------- | ------ | -------- | --------- | ------------- | ----------------------------------------- | ----------------------------------------------- |
| `id`        | GENERATED | ✅     | ✅       | -         | -             | 1                                         | Identifiant unique de l’utilisateur             |
| `firstname` | TEXT      | ❌     | ✅       | -         | -             | "Alice"                                   | Prénom de l’utilisateur                         |
| `lastname`  | TEXT      | ❌     | ✅       | -         | -             | "Durand"                                  | Nom de famille de l’utilisateur                 |
| `email`     | TEXT      | ✅     | ✅       | -         | -             | "[alice@mail.com](mailto:alice@mail.com)" | Adresse email de l’utilisateur                  |
| `password`  | TEXT      | ❌     | ✅       | -         | -             | "\$2a\$10\$..."                           | Mot de passe chiffré (bcrypt)                   |
| `status`    | TEXT      | ❌     | ✅       | -         | 'particulier' | "association"                             | Statut : particulier / association / entreprise |
| `role`      | TEXT      | ❌     | ✅       | -         | 'member'      | "admin"                                   | Rôle : admin ou membre                          |

## Product

| Champ         | Type      | Unique | Not null | Référence    | Par défaut | Exemple de valeur                                          | Explication                             |
| ------------- | --------- | ------ | -------- | ------------ | ---------- | ---------------------------------------------------------- | --------------------------------------- |
| `id`          | GENERATED | ✅     | ✅       | -            | -          | 101                                                        | Identifiant unique du produit (arbre)   |
| `name`        | TEXT      | ❌     | ✅       | -            | -          | "Chêne vert"                                               | Nom de l’arbre                          |
| `price`       | DECIMAL   | ❌     | ✅       | -            | 0.0        | 15.50                                                      | Prix unitaire                           |
| `description` | TEXT      | ❌     | ✅       | -            | -          | "Arbre robuste méditerranéen"                              | Description du produit                  |
| `image_url`   | TEXT[]    | ❌     | ✅       | -            | -          | ["https://cdn/trees/oak.png", "https://cdn/trees/oak.png"] | URL d’image du produit                  |
| `available`   | BOOLEAN   | ❌     | ✅       | -            | true       | true                                                       | Disponibilité (actif / désactivé)       |
| `stock`       | INT       | ❌     | ✅       | -            | 0          | 120                                                        | Quantité disponible                     |
| `location_id` | INT       | ❌     | ❌       | location(id) | NULL       | 5                                                          | Référence vers un terrain de plantation |

## Location

| Champ       | Type      | Unique | Not null | Référence | Par défaut | Exemple de valeur        | Explication                   |
| ----------- | --------- | ------ | -------- | --------- | ---------- | ------------------------ | ----------------------------- |
| `id`        | GENERATED | ✅     | ✅       | -         | -          | 5                        | Identifiant unique du terrain |
| `name`      | TEXT      | ❌     | ✅       | -         | -          | "Forêt de Fontainebleau" | Nom du terrain de plantation  |
| `gps_point` | TEXT      | ✅     | ✅       | -         | -          | "48.4042, 2.7023"        | Coordonnées GPS               |

## Order

| Champ     | Type      | Unique | Not null | Référence | Par défaut | Exemple de valeur   | Explication                                 |
| --------- | --------- | ------ | -------- | --------- | ---------- | ------------------- | ------------------------------------------- |
| `id`      | GENERATED | ✅     | ✅       | -         | -          | 5001                | Identifiant unique de la commande           |
| `date`    | TIMESTAMP | ❌     | ✅       | -         | now()      | 2025-09-10 14:30:00 | Date de création de la commande             |
| `status`  | TEXT      | ❌     | ✅       | -         | "pending"  | "paid", "cancelled" | État de la commande                         |
| `total`   | DECIMAL   | ❌     | ✅       | -         | 0.0        | 45.00               | Prix total de la commande                   |
| `user_id` | INT       | ❌     | ✅       | user(id)  | -          | 15                  | Référence vers l’utilisateur ayant commandé |

## Order_item

| Champ        | Type      | Unique | Not null | Référence   | Par défaut | Exemple de valeur | Explication                            |
| ------------ | --------- | ------ | -------- | ----------- | ---------- | ----------------- | -------------------------------------- |
| `id`         | GENERATED | ✅     | ✅       | -           | -          | 701               | Identifiant unique de la ligne         |
| `order_id`   | INT       | ❌     | ✅       | order(id)   | -          | 5001              | Référence vers la commande             |
| `product_id` | INT       | ❌     | ✅       | product(id) | -          | 101               | Référence vers le produit              |
| `quantity`   | INT       | ❌     | ✅       | -           | 1          | 2                 | Nombre d’arbres commandés              |
| `unit_price` | DECIMAL   | ❌     | ✅       | -           | 0.0        | 15.50             | Prix unitaire au moment de la commande |

## Log

| Champ       | Type      | Unique | Not null | Référence | Par défaut | Exemple de valeur                  | Explication                           |
| ----------- | --------- | ------ | -------- | --------- | ---------- | ---------------------------------- | ------------------------------------- |
| `id`        | GENERATED | ✅     | ✅       | -         | -          | 9001                               | Identifiant du log                    |
| `timestamp` | TIMESTAMP | ❌     | ✅       | -         | now()      | 2025-09-10 15:05:00                | Date/heure du log                     |
| `level`     | TEXT      | ❌     | ✅       | -         | "info"     | "error"                            | Niveau de gravité du log              |
| `message`   | TEXT      | ❌     | ✅       | -         | -          | "Commande validée"                 | Message lisible                       |
| `user_id`   | INT       | ❌     | ❌       | user(id)  | NULL       | 15                                 | Utilisateur concerné (nullable)       |
| `context`   | JSONB     | ❌     | ❌       | -         | NULL       | { "order_id": 987, "status": "ok"} | Données supplémentaires contextuelles |
