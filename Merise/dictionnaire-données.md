# Dictionnaire de données

## User

| Champ          | Type                   | Unique | Not null | Référence     | Par défaut | Exemple de valeur                         | Explication                                                  |
| -------------- | ---------------------- | -----: | -------: | ------------- | ---------- | ----------------------------------------- | ------------------------------------------------------------ |
| `id`           | GENERATED              |      ✅ |        ✅ | -             | -          | 1                                         | Identifiant unique de l’utilisateur                          |
| `firstname`    | VARCHAR(255)           |      ❌ |        ✅ | -             | -          | "Alice"                                   | Prénom de l’utilisateur                                      |
| `lastname`     | VARCHAR(255)           |      ❌ |        ✅ | -             | -          | "Durand"                                  | Nom de famille de l’utilisateur                              |
| `email`        | VARCHAR(320)           |      ✅ |        ✅ | -             | -          | "[alice@mail.com](mailto:alice@mail.com)" | Adresse email de l’utilisateur                               |
| `password`     | VARCHAR(255)           |      ❌ |        ✅ | -             | -          | "$2a$10$..."                              | Mot de passe hashé (bcrypt)                                  |
| `role`         | ENUM('member','admin') |      ❌ |        ✅ | -             | 'member'   | "admin"                                   | Rôle de l’utilisateur                                        |
| `user_type_id` | INT                    |      ❌ |        ✅ | user_type(id) | -          | 2                                         | Référence vers le type (particulier/asso)                    |
| `created_at`   | TIMESTAMPTZ            |      ❌ |        ✅ | -             | now()      | 2025-09-11 14:32:00                       | Date de création                                             |
| `updated_at`   | TIMESTAMPTZ            |      ❌ |        ✅ | -             | now()      | 2025-09-11 14:35:00                       | Dernière mise à jour                                         |
| `deleted_at`   | TIMESTAMPTZ            |      ❌ |        ❌ | -             | NULL       | NULL / 2025-09-12 10:00:00                | Soft delete : l’utilisateur n’est jamais supprimé physiquement en usage normal, ce champ permet de désactiver le compte tout en conservant l’historique      |
| `entity_name`  | VARCHAR(255)           |      ❌ |        ❌ | -             | NULL       | "GreenPeace"                              | Nom de l’entité si l’utilisateur représente une organisation |
                              |                                           |

## User_type

| Champ        | Type         | Unique | Not null | Référence | Par défaut | Exemple de valeur      | Explication                              |
| ------------ | ------------ | -----: | -------: | --------- | ---------- | ---------------------- | ---------------------------------------- |
| `id`         | GENERATED    |      ✅ |        ✅ | -         | -          | 1                      | Identifiant unique du type d’utilisateur |
| `code`       | VARCHAR(50)  |      ✅ |        ✅ | -         | -          | "particulier"          | Code technique                           |
| `label`      | VARCHAR(255) |      ❌ |        ✅ | -         | -          | "Association loi 1901" | Libellé                                  |
| `tva_rate`   | DECIMAL(5,2) |      ❌ |        ✅ | -         | -          | 5.50                   | Taux de TVA applicable (%)               |
| `created_at` | TIMESTAMPTZ  |      ❌ |        ✅ | -         | now()      | 2025-09-11 14:32:00    | Date de création                         |
| `updated_at` | TIMESTAMPTZ  |      ❌ |        ✅ | -         | now()      | 2025-09-11 14:35:00    | Dernière mise à jour                     |
                       |

## Refresh_token

| Champ        | Type        | Unique | Not null | Référence | Par défaut | Exemple de valeur   | Explication         |
| ------------ | ----------- | -----: | -------: | --------- | ---------- | ------------------- | ------------------- |
| `id`         | GENERATED   |      ✅ |        ✅ | -         | -          | 1                   | Identifiant unique  |
| `token`      | TEXT        |      ❌ |        ✅ | -         | -          | "eyJhbGciOi..."     | Refresh token       |
| `user_id`    | INT         |      ❌ |        ✅ | user(id)  | -          | 15                  | Lien vers l’utilisateur ; en cas de hard delete exceptionnel (maintenance), les tokens sont supprimés automatiquement car ils n’ont aucune valeur métier |
| `created_at` | TIMESTAMPTZ |      ❌ |        ✅ | -         | now()      | 2025-09-11 14:32:00 | Date de création    |
| `expired_at` | TIMESTAMPTZ |      ❌ |        ✅ | -         | -          | 2025-10-11 14:32:00 | Date d’expiration   |


## Product

| Champ             | Type           | Unique | Not null | Référence | Par défaut | Exemple de valeur   | Explication                    |
| ----------------- | -------------- | -----: | -------: | --------- | ---------- | ------------------- | ---------------------------------- |
| `id`              | GENERATED      |      ✅ |        ✅ | -         | -          | 101                 | Identifiant unique du produit      |
| `name`            | VARCHAR(255)   |      ❌ |        ✅ | -         | -          | "Chêne vert"        | Nom du produit                     |
| `slug`            | VARCHAR(255)   |      ✅ |        ✅ | -         | -          | "chene-vert"        | Identifiant SEO                    |
| `price`           | DECIMAL(10,2)  |      ❌ |        ✅ | -         | 0.0        | 15.50               | Prix unitaire                      |
| `description`     | VARCHAR(2500)  |      ❌ |        ✅ | -         | -          | "Arbre robuste…"    | Description                        |
| `image_urls`      | VARCHAR(100)[] |      ❌ |        ✅ | -         | -          | ["https://cdn/..."] | Liste d’URLs d’images (maximum 10) |
| `available`       | BOOLEAN        |      ❌ |        ✅ | -         | true       | true                | Produit actif/inactif              |
| `stock`           | INT            |      ❌ |        ✅ | -         | 0          | 120                 | Quantité disponible                |
| `scientific_name` | VARCHAR(255)   |      ❌ |        ❌ | -         | NULL       | "Quercus ilex"      | Nom scientifique                   |
| `carbon`          | DECIMAL(10,2)  |      ❌ |        ❌ | -         | NULL       | 50                  | Absorption estimée de CO₂          |
| `created_at`      | TIMESTAMPTZ    |      ❌ |        ✅ | -         | now()      | 2025-09-11          | Date de création                   |
| `updated_at`      | TIMESTAMPTZ    |      ❌ |        ✅ | -         | now()      | 2025-09-11          | Dernière mise à jour               |


## Location

| Champ        | Type             | Unique | Not null | Référence | Par défaut | Exemple de valeur        | Explication                |
| ------------ | ---------------- | -----: | -------: | --------- | ---------- | ------------------------ | -------------------------- |
| `id`         | GENERATED        |      ✅ |        ✅ | -         | -          | 5                        | Identifiant unique du lieu |
| `name`       | VARCHAR(255)     |      ❌ |        ✅ | -         | -          | "Forêt de Fontainebleau" | Nom du terrain             |
| `latitude`   | DOUBLE PRECISION |      ❌ |        ✅ | -         | -          | 48.4042                  | Coordonnée GPS (latitude)  |
| `longitude`  | DOUBLE PRECISION |      ❌ |        ✅ | -         | -          | 2.7023                   | Coordonnée GPS (longitude) |
| `created_at` | TIMESTAMPTZ      |      ❌ |        ✅ | -         | now()      | 2025-09-11               | Date de création           |
| `updated_at` | TIMESTAMPTZ      |      ❌ |        ✅ | -         | now()      | 2025-09-11               | Dernière mise à jour       |



## Order

| Champ        | Type                               | Unique | Not null | Référence | Par défaut | Exemple de valeur | Explication                                                                                                                  |
| ------------ | ---------------------------------- | -----: | -------: | --------- | ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | GENERATED                          |      ✅ |        ✅ | -         | -          | 5001              | Identifiant unique de la commande                                                                                                |
| `status`     | ENUM('pending','paid','cancelled') |      ❌ |        ✅ | -         | "pending"  | "paid"            | État de la commande                                                                                                              |
| `user_id`    | INT                                |      ❌ |        ✅ | user(id)  | -          | 15                | Lien obligatoire vers l’utilisateur ; la suppression physique est bloquée tant que des commandes existent (intégrité métier) |
| `total`      | DECIMAL(10,2)                      |      ❌ |        ✅ | -         | 0.0        | 45.00             | Montant total                                                                                                                    |
| `created_at` | TIMESTAMPTZ                        |      ❌ |        ✅ | -         | now()      | 2025-09-11        | Date de création                                                                                                                 |
| `updated_at` | TIMESTAMPTZ                        |      ❌ |        ✅ | -         | now()      | 2025-09-11        | Dernière mise à jour                                                                                                             |



## Order_item

| Champ        | Type          | Unique | Not null | Référence   | Par défaut | Exemple de valeur | Explication                            |
| ------------ | ------------- | -----: | -------: | ----------- | ---------- | ----------------- | -------------------------------------- |
| `id`         | GENERATED     |      ✅ |        ✅ | -           | -          | 701               | Identifiant ligne                      |
| `order_id`   | INT           |      ❌ |        ✅ | order(id)   | -          | 5001              | Commande                               |
| `product_id` | INT           |      ❌ |        ✅ | product(id) | -          | 101               | Produit                                |
| `quantity`   | INT           |      ❌ |        ✅ | -           | 1          | 2                 | Quantité                               |
| `unit_price` | DECIMAL(10,2) |      ❌ |        ✅ | -           | -          | 15.50             | Prix unitaire au moment de la commande |


## Product_location

| Champ         | Type        | Unique | Not null | Référence    | Par défaut | Exemple de valeur   | Explication |
| ------------- | ----------- | -----: | -------: | ------------ | ---------- | ------------------- | ----------- |
| `product_id`  | INT         |      ❌ |        ✅ | product(id)  | -          | 101                 | Produit     |
| `location_id` | INT         |      ❌ |        ✅ | location(id) | -          | 5                   | Lieu        |
| `created_at`  | TIMESTAMPTZ |      ❌ |        ✅ | -            | now()      | 2025-09-11 14:32:00 | Création    |
| `updated_at`  | TIMESTAMPTZ |      ❌ |        ✅ | -            | now()      | 2025-09-11 14:35:00 | Mise à jour |

**Clé primaire composée** : (`product_id`, `location_id`)

## Log

| Champ        | Type                                   | Unique | Not null | Référence | Par défaut | Exemple de valeur  | Explication                                                                                               |
| ------------ | -------------------------------------- | -----: | -------: | --------- | ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `id`         | GENERATED                              |      ✅ |        ✅ | -         | -          | 9001               | Identifiant unique du log                                                                                     |
| `level`      | ENUM('info','warning','error','debug') |      ❌ |        ✅ | -         | "info"     | "error"            | Niveau de gravité                                                                                             |
| `message`    | VARCHAR(2500)                          |      ❌ |        ✅ | -         | -          | "Commande validée" | Message                                                                                                       |
| `source`     | ENUM('API','CRON','FRONT','BACK')      |      ❌ |        ❌ | -         | "BACK"     | "API"              | Origine du log                                                                                                |
| `user_id`    | INT                                    |      ❌ |        ❌ | user(id)  | NULL       | 15                 | Référence facultative ; en cas de hard delete exceptionnel, le lien est supprimé mais le log est conservé |
| `context`    | JSONB                                  |      ❌ |        ❌ | -         | NULL       | {"order_id":987}   | Données contextuelles                                                                                         |
| `created_at` | TIMESTAMPTZ                            |      ❌ |        ✅ | -         | now()      | 2025-09-11         | Date/heure                                                                                                    |

