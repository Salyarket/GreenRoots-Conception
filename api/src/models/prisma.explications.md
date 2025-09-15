### A faire avant initilisation prisma

VIA PSQL LINUX/OSX : sudo -i -u postgres psql 
// Créer un utilisateur: CREATE USER greenroots WITH ENCRYPTED PASSWORD 'greenroots';
// Créer une base de données: CREATE DATABASE greenroots OWNER greenroots;
// Donner la permission à l'utilisateur de create une DB shadow (propre à prisma) : ALTER USER greenroots CREATEDB;

---

A partir de notre MPD : create_tables.sql (create table User xxxxx )
Nous devons convertir ce fichier SQL en fichier prisma. Car prisma n'a pas la même syntaxte que du SQL pur.
Cela va nous permettre de générer la structure de la BDD et de pouvoir gérer les migrations lorsque nous souhaitons changer la BDD

Quand tu fais :

_npm run db:generate_ ( "db:generate": "prisma generate --schema=./src/models/schema.prisma",)

➡️ Prisma ne crée pas de nouveau dossier dans ton projet (sauf si tu changes la config).
Ce qu’il fait c’est générer du code TypeScript/JavaScript dans node_modules/@prisma/client.

Concrètement ça veut dire :

Dans ton projet tu n’auras pas de fichiers visibles générés.

Tout le code est compilé dans node_modules, car @prisma/client est la librairie que tu utilises pour interagir avec la base.

---

Ensuite nous devons créer le dossier de migrations ce qui nous permet de garder un historique sur les modifications apportées à la BDD

_npm run db:migrate:dev_ ( "db:migrate:dev": "prisma migrate dev --schema=./src/models/schema.prisma --name auto" )

---
