# 🛡️ Credyx

> **Own your credentials. Verify your identity. Share with confidence.**

Credyx is a decentralized **Professional Identity Vault** that enables individuals and organizations to securely issue, store, verify, and manage digital credentials on-chain.

Built for the **Monad Hackathon**, Credyx reimagines how professional identities are created and trusted by combining modern web technologies with blockchain-powered credential verification.

---

## ✨ The Problem

Professional credentials are fragmented, difficult to verify, and easy to forge.

Recruiters, institutions, and organizations spend significant time verifying certificates, while professionals repeatedly upload the same documents across different platforms.

Traditional systems rely on centralized databases that can become unavailable, manipulated, or disconnected across institutions.

---

## 💡 Our Solution

Credyx provides a secure digital identity vault where credentials become verifiable blockchain-backed assets.

Instead of asking:

> "Can you send me your certificate?"

Organizations can simply verify a credential's authenticity through its immutable on-chain record.

Professionals remain in control of their own identity while institutions retain trust in what they issue.

---

# 🚀 Core Features

### 🔐 Professional Identity Vault

Store digital credentials in a secure personal vault with an intuitive interface.

### ⛓️ Blockchain Credential Issuance

Issue credentials whose authenticity can be verified on-chain.

### ✅ Credential Verification

Instantly verify whether a credential is genuine without contacting the issuing organization.

### 👛 Wallet Integration

Every user has an associated blockchain wallet capable of interacting with issued credentials.

### 🪪 Credential Collections

Organize credentials into categories for easier management.




---

# 🧱 Architecture

```
                React + TypeScript
                       │
                 REST API (Express)
                       │
                  PostgreSQL Database
                       │
                Smart Contract Layer
                       │
                   Monad Testnet
```

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Zustand
- React Router
- Axios
- Framer Motion

## Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL (Supabase)
- JWT Authentication
- Zod Validation

## Blockchain

- Solidity Smart Contract
- Ethers.js
- Monad Testnet

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: Supabase

---

# 📂 Project Structure

```
Credyx
│
├── apps/
│   └── web/
│
├── server/
│
├── contracts/
│
└── docs/
```

---

# ⚙️ Running Locally

## Clone

```bash
git clone https://github.com/YOUR_USERNAME/Credyx.git
cd Credyx
```

## Backend

```bash
cd server

npm install

npx prisma generate

npm run build

npm run dev
```

## Frontend

```bash
cd apps/web

npm install

npm run dev
```

---

# 🌐 Live Demo

**Frontend**

```
https://credyx-smoky.vercel.app
```

**Backend API**

```
https://credyx-api.onrender.com
```

---

# 🎯 Hackathon Vision

Credyx is designed to become the trust layer for professional identity.

Potential applications include:

- Universities issuing tamper-proof certificates
- Professional licensing bodies
- Healthcare certifications
- Government-issued credentials
- Corporate training certificates
- Recruitment verification
- Digital resumes
- Cross-border identity verification

---

# 🛣 Roadmap

- Full authentication flow
- Multi-issuer support
- QR-based credential verification
- WalletConnect integration
- DID (Decentralized Identity)
- Verifiable Credentials (W3C)
- Mobile application
- Credential sharing via secure links

---

# 🏆 Why Credyx?

Traditional verification systems are slow, fragmented, and vulnerable to fraud.

Credyx replaces manual trust with cryptographic proof, allowing credentials to be issued once, owned by users, and verified instantly from anywhere.

---

# 👨‍💻 Author

**Godswill Ijeoma Eboka**

Computer Engineer • Full Stack Developer 

Built with ❤️ for the Monad Hackathon.

---

## ⭐ If you like the project

Give the repository a star and follow the journey as Credyx evolves into a production-ready decentralized identity platform.
