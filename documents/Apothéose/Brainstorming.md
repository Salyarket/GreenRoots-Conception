### Idées

- nom de parcel (client à partir de X arbres)

### Outils

- carte interactive : https://leafletjs.com/
- palettes de couleurs : https://colorhunt.co/
- exemple de templates : https://dribbble.com/
- outil de maquettage : https://www.figma.com/design/mytgwat5YvBouavvztXiTj/GreenRoots?node-id=0-1&p=f&t=nQc5KCW9oGEsgQCj-0

### structure

A VOIR

---

🛠️ 2. Où mettre ton back-office admin ?
Tu as 2 choix principaux :
Option A – Back-office dans Next.js
Tu crées un sous-espace dans Next : ex. /admin.
Authentification + rôles (via JWT ou session).
Si user.role === "ADMIN" → accès à des pages CRUD (arbres, commandes, utilisateurs).
Tu continues à appeler ton API REST Express pour manipuler les données.

👉 Avantage :
Tout est React (pas besoin d’EJS).
UX homogène (admin et public ont le même framework).
Moins de stack différente à apprendre.

👉 Inconvénient :
Ton bundle Next grossit (mais gérable).

/backend (Express + Prisma/Sequelize + PostgreSQL)
└── /api/products
└── /api/orders
└── /api/users

/frontend (Next.js)
└── pages/
├── index.js -> Landing + catalogue (SSR)
├── product/[id].js -> Détail produit (SSR)
├── login.js -> Auth
├── admin/
│ ├── index.js -> Dashboard admin
│ ├── products.js -> CRUD arbres
│ └── orders.js -> CRUD commandes
