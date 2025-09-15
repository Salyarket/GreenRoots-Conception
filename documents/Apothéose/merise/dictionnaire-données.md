# Dictionnaire de données

_*MODIFICATIONS*_

## User

| Champ           | Type                   | Unique | Not null | Référence     | Par défaut | Exemple de valeur                         | Explication                               |
| --------------- | ---------------------- | ------ | -------- | ------------- | ---------- | ----------------------------------------- | ----------------------------------------- |
| `id`            | GENERATED              | ✅     | ✅       | -             | -          | 1                                         | Identifiant unique de l’utilisateur       |
| `firstname`     | VARCHAR(255)           | ❌     | ✅       | -             | -          | "Alice"                                   | Prénom de l’utilisateur                   |
| `lastname`      | VARCHAR(255)           | ❌     | ✅       | -             | -          | "Durand"                                  | Nom de famille de l’utilisateur           |
| `email`         | VARCHAR(320)           | ✅     | ✅       | -             | -          | "[alice@mail.com](mailto:alice@mail.com)" | Adresse email de l’utilisateur            |
| `password`      | VARCHAR(255)           | ❌     | ✅       | -             | -          | "\$2a\$10\$..."                           | Mot de passe hashé (bcrypt)               |
| `role`          | ENUM('member','admin') | ❌     | ✅       | -             | 'member'   | "admin"                                   | Rôle de l’utilisateur                     |
| `user_type_id`  | INT                    | ❌     | ✅       | user_type(id) | 1          | 2                                         | Référence vers le type (particulier/asso) |
| `created_at`    | TIMESTAMPTZ            | ❌     | ✅       | -             | now()      | 2025-09-11 14:32:00                       | Date de création                          |
| `updated_at`    | TIMESTAMPTZ            | ❌     | ✅       | -             | now()      | 2025-09-11 14:35:00                       | Dernière mise à jour                      |
| _*entity_name*_ | VARCHAR(255)           | ❌     | ❌       | -             | -          | GreenPeace                                |                                           |

## User_type

| Champ        | Type         | Unique | Not null | Référence | Par défaut | Exemple de valeur      | Explication                                    |
| ------------ | ------------ | ------ | -------- | --------- | ---------- | ---------------------- | ---------------------------------------------- |
| `id`         | GENERATED    | ✅     | ✅       | -         | -          | 1                      | Identifiant unique du type d’utilisateur       |
| `code`       | VARCHAR(50)  | ✅     | ✅       | -         | -          | "particulier"          | Code technique (particulier, association, etc) |
| `label`      | VARCHAR(255) | ❌     | ✅       | -         | -          | "Association loi 1901" | Libellé lisible                                |
| `tva_rate`   | DECIMAL(5,2) | ❌     | ✅       | -         | 20.00      | 5.50                   | Taux de TVA applicable (%)                     |
| `created_at` | TIMESTAMPTZ  | ❌     | ✅       | -         | now()      | 2025-09-11 14:32:00    | Date de création                               |
| `updated_at` | TIMESTAMPTZ  | ❌     | ✅       | -         | now()      | 2025-09-11 14:35:00    | Dernière mise à jour                           |

## Product

| Champ             | Type           | Unique | Not null | Référence | Par défaut | Exemple de valeur             | Explication                                   |
| ----------------- | -------------- | ------ | -------- | --------- | ---------- | ----------------------------- | --------------------------------------------- |
| `id`              | GENERATED      | ✅     | ✅       | -         | -          | 101                           | Identifiant unique du produit (arbre)         |
| `name`            | VARCHAR(255)   | ❌     | ✅       | -         | -          | "Chêne vert"                  | Nom de l’arbre                                |
| `slug`            | VARCHAR(255)   | ✅     | ✅       | -         | -          | "chene-vert"                  | Identifiant lisible dans l’URL (SEO friendly) |
| `price`           | DECIMAL(10,2)  | ❌     | ✅       | -         | 0.0        | 15.50                         | Prix unitaire                                 |
| `description`     | VARCHAR(2500)  | ❌     | ✅       | -         | -          | "Arbre robuste méditerranéen" | Description du produit                        |
| _*image_urls*_    | VARCHAR(100)[] | ❌     | ✅       | -         | -          | ["https://cdn/trees/oak.png"] | tableau de string avec max 100 char each      |
| `available`       | BOOLEAN        | ❌     | ✅       | -         | true       | true                          | Disponibilité (actif / désactivé)             |
| `stock`           | INT            | ❌     | ✅       | -         | 0          | 120                           | Quantité disponible                           |
| `scientific_name` | VARCHAR(255)   | ❌     | ❌       | -         | NULL       | "Quercus ilex"                | Nom scientifique de l’arbre (latin)           |
| `carbon`          | DECIMAL(10,2)  | ❌     | ❌       | -         | NULL       | 50                            | Absorption estimée de CO₂ (kg/an par arbre)   |
| `created_at`      | TIMESTAMPTZ    | ❌     | ✅       | -         | now()      | 2025-09-11 14:32:00           | Date de création                              |
| `updated_at`      | TIMESTAMPTZ    | ❌     | ✅       | -         | now()      | 2025-09-11 14:35:00           | Dernière mise à jour                          |

## Location

| Champ       | Type                  | Unique | Not null | Référence | Par défaut | Exemple de valeur        | Explication                   |
| ----------- | --------------------- | ------ | -------- | --------- | ---------- | ------------------------ | ----------------------------- | --- |
| `id`        | GENERATED             | ✅     | ✅       | -         | -          | 5                        | Identifiant unique du terrain |
| `name`      | VARCHAR(255)          | ❌     | ✅       | -         | -          | "Forêt de Fontainebleau" | Nom du terrain de plantation  |
| <!--        | `gps_point DELETEE ?` | POINT  | ❌       | ✅        | -          | -                        | "48.4042, 2.7023"             | --> |
| `latitude`  | POINT                 | ❌     | ✅       | -         | -          | "48.4042, 2.7023"        |
| `longitude` | POINT                 | ❌     | ✅       | -         | -          | "48.4042, 2.7023"        |

Coordonnées GPS |
| `created_at` | TIMESTAMPTZ | ❌ | ✅ | - | now() | 2025-09-11 14:32:00 | Date de création |
| `updated_at` | TIMESTAMPTZ | ❌ | ✅ | - | now() | 2025-09-11 14:35:00 | Dernière mise à jour |

## Order

| Champ        | Type                                 | Unique | Not null | Référence | Par défaut | Exemple de valeur   | Explication                                 |
| ------------ | ------------------------------------ | ------ | -------- | --------- | ---------- | ------------------- | ------------------------------------------- |
| `id`         | GENERATED                            | ✅     | ✅       | -         | -          | 5001                | Identifiant unique de la commande           |
| `status`     | ENUM('pending', 'paid', 'cancelled') | ❌     | ✅       | -         | "pending"  | "paid", "cancelled" | État de la commande                         |
| `user_id`    | INT                                  | ❌     | ✅       | user(id)  | -          | 15                  | Référence vers l’utilisateur ayant commandé |
| `total`      | DECIMAL(10,2)                        | ❌     | ✅       | -         | 0.0        | 45.00               | Prix total de la commande                   |
| `created_at` | TIMESTAMPTZ                          | ❌     | ✅       | -         | now()      | 2025-09-11 14:32:00 | Date de création                            |
| `updated_at` | TIMESTAMPTZ                          | ❌     | ✅       | -         | now()      | 2025-09-11 14:35:00 | Dernière mise à jour                        |

## Order_item

| Champ        | Type          | Unique | Not null | Référence   | Par défaut | Exemple de valeur | Explication                                                     |
| ------------ | ------------- | ------ | -------- | ----------- | ---------- | ----------------- | --------------------------------------------------------------- |
| `id`         | GENERATED     | ✅     | ✅       | -           | -          | 701               | Identifiant unique de la ligne                                  |
| `order_id`   | INT           | ❌     | ✅       | order(id)   | -          | 5001              | Référence vers la commande                                      |
| `product_id` | INT           | ❌     | ✅       | product(id) | -          | 101               | Référence vers le produit                                       |
| `quantity`   | INT           | ❌     | ✅       | -           | 1          | 2                 | Nombre d’arbres commandés                                       |
| `unit_price` | DECIMAL(10,2) | ❌     | ✅       | -           | 0.0        | 15.50             | Prix unitaire au moment de la commande + garder historique prix |

## Product_location

| Champ         | Type        | Unique | Not null | Référence    | Par défaut | Exemple de valeur   | Explication                                   |
| ------------- | ----------- | ------ | -------- | ------------ | ---------- | ------------------- | --------------------------------------------- |
| `product_id`  | INT         | ❌     | ✅       | product(id)  | -          | 101                 | Référence vers un produit (arbre)             |
| `location_id` | INT         | ❌     | ✅       | location(id) | -          | 5                   | Référence vers un lieu de plantation possible |
| `created_at`  | TIMESTAMPTZ | ❌     | ✅       | -            | now()      | 2025-09-11 14:32:00 | Date de création                              |
| `updated_at`  | TIMESTAMPTZ | ❌     | ✅       | -            | now()      | 2025-09-11 14:35:00 | Dernière mise à jour                          |

**Clé primaire composée** : (`product_id`, `location_id`)

## Log

| Champ        | Type                                      | Unique | Not null | Référence | Par défaut | Exemple de valeur                  | Explication                                      |
| ------------ | ----------------------------------------- | ------ | -------- | --------- | ---------- | ---------------------------------- | ------------------------------------------------ |
| `id`         | GENERATED                                 | ✅     | ✅       | -         | -          | 9001                               | Identifiant unique du log                        |
| `level`      | ENUM('info', 'warning', 'error', 'debug') | ❌     | ✅       | -         | "info"     | "error"                            | Niveau de gravité du log                         |
| `message`    | VARCHAR(2500)                             | ❌     | ✅       | -         | -          | "Commande validée"                 | Message lisible                                  |
| `source`     | ENUM('API','CRON','FRONT','BACK')         | ❌     | ❌       | -         | 'BACK'     | "API"                              | Origine du log                                   |
| `user_id`    | INT                                       | ❌     | ❌       | user(id)  | NULL       | 15                                 | Utilisateur concerné (nullable)                  |
| `context`    | JSONB                                     | ❌     | ❌       | -         | NULL       | { "order_id": 987, "status": "ok"} | Données supplémentaires contextuelles (payload…) |
| `created_at` | TIMESTAMPTZ                               | ❌     | ✅       | -         | now()      | 2025-09-11 14:32:00                | Date/heure du log                                |
