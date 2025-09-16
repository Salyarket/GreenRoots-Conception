# Stratégie d'authentification

## 🔐 1. **Authentification par mot de passe (classique)**

### ✅ Principe :

L'utilisateur s'authentifie avec un identifiant (souvent un e-mail) et un mot de passe.

### ✅ Avantages :

* Facile à implémenter
* Courant pour les utilisateurs

### ❌ Inconvénients :

* Vulnérable aux attaques (phishing, bruteforce)
* Nécessite une bonne gestion des mots de passe (hash, salt, etc.)

### 🛠️ Exemples :

* Utilisation d'algorithme (`bcrypt`, `argon2`, `scrypt`)` pour hasher les mots de passe
* Formulaire de login simple sur un site Laravel, Django ou Node.js

---

## 🔑 2. **Authentification via tokens (JWT, OAuth)**

### ✅ Principe :

Après login, un **token** (ex: JWT) est émis et utilisé pour les requêtes futures (stateless auth).

**Stateless** = pas de stockage du token, ni des données de connexion en base de données. Le backend analyse le token d'accès, confirme qu'il est encore valide et non falsifié, le tout sans consulter la base de données.

### ✅ Avantages :

* Stateless, scalable (surtout pour les API REST)
* Facile à utiliser côté frontend (React, Vue, etc.)

### ❌ Inconvénients :

* Les JWT ne peuvent pas être invalidés facilement (sauf via blacklist)
* Attention à la durée de vie et au stockage (ex : localStorage ≠ sécurisé)

### 🛠️ Exemples :

* API Express + JWT
* Auth0 ou Firebase Auth qui utilisent JWT

---

## 🧾 3. **Authentification OAuth2 / OpenID Connect**

### ✅ Principe :

L’utilisateur s’authentifie via un **provider tiers** (Google, Facebook, GitHub, etc.).

### ✅ Avantages :

* Pas de gestion d’identifiants en local
* UX fluide pour les utilisateurs déjà connectés à ces services

### ❌ Inconvénients :

* Complexité d’intégration (redirections, scopes, tokens…)
* Dépendance à des tiers

### 🛠️ Exemples :

* "Connexion avec Google" via Google OAuth 2.0
* GitHub OAuth pour des apps développeur

---

## 📱 4. **Authentification à deux facteurs (2FA/MFA)**

### ✅ Principe :

Ajoute une couche après le mot de passe : code SMS, email, ou application (TOTP = Time based One Time Password). (ex: Duomobile)

### ✅ Avantages :

* Sécurité renforcée
* Protège contre les accès même si le mot de passe est compromis

### ❌ Inconvénients :

* Complexité pour l’utilisateur
* Nécessite gestion des OTP, temps, synchronisation

### 🛠️ Exemples :

* Code SMS via Twilio
* QR code TOTP avec Google Authenticator (librairies : `speakeasy`, `pyotp`)

---

## 📧 5. **Authentification par lien magique (Magic Link)**

### ✅ Principe :

Un lien est envoyé par e-mail pour se connecter (pas de mot de passe).

### ✅ Avantages :

* UX simple
* Pas besoin de retenir un mot de passe

### ❌ Inconvénients :

* Dépendance à l’e-mail
* Vulnérable si boîte mail compromise

### 🛠️ Exemples :

* Supabase ou Firebase Auth avec login par lien magique

---

## 🧬 6. **Authentification biométrique**

### ✅ Principe :

Utilise empreinte digitale, reconnaissance faciale, etc., souvent via WebAuthn.

### ✅ Avantages :

* Expérience utilisateur fluide
* Très sécurisé (données stockées localement)

### ❌ Inconvénients :

* Nécessite matériel compatible
* Complexe à intégrer sans service tiers

### 🛠️ Exemples :

* WebAuthn avec Passkeys (FIDO2)
* Intégration avec Apple Face ID via Safari

---

## 📊 Comparatif synthétique

| Méthode              | Sécurité      | UX                 | Complexité  | Idéal pour                              |
| -------------------- | ------------- | ------------------ | ----------- | --------------------------------------- |
| Mot de passe         | 🟠 Moyen     | 🟢 Facile         | 🟢 Faible  | Sites classiques, MVP                   |
| JWT / Token          | 🟢 Bon       | 🟢 Facile         | 🟠 Moyenne | API REST, apps frontend séparé          |
| OAuth2 / OpenID      | 🟢 Bon       | 🟢 Facile         | 🟠 Moyenne | Apps sociales, pro (SSO)                |
| 2FA / MFA            | 🟢 Très bon  | 🔴 Plus difficile | 🟠 Moyenne | App bancaires, admin, données sensibles |
| Magic Link           | 🟠 Moyen     | 🟢 Très bon       | 🟠 Moyenne | Apps mobiles, SaaS                      |
| Biométrie / WebAuthn | 🟢 Excellent | 🟢 Fluide         | 🔴 Haute   | Apps modernes, fintech, SSO entreprises |

