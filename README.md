# NextJS Production Setup

**A production-ready Next.js starter template** This repository provides a
robust foundation for building scalable, secure, and maintainable Next.js
applications — complete with modern tooling, developer experience enhancements,
and best practices for deployment.

---

## 🚀 Features

### 🧩 Core

- **Next.js** (App Router / TypeScript setup) — scalable and future-proof.
- **TypeScript** support for strong typing and fewer runtime bugs.
- **ESLint + Prettier** configuration for consistent code quality.
- **Husky + Commitlint** pre-commit and pre-push hooks to enforce standards.

### 🛠 Infrastructure & Tooling

- **Dockerfile** included for production containerization.
- **CI/CD Workflows** (GitHub Actions) — automated testing, linting, and
  production deploys.
- **Prisma** ORM with sample configuration for database integration.
- **Vitest & RTL** for Unit Testing.
- **Playwright** for end-to-end test automation.
- **Sentry integration** (Edge & Server configs) for error monitoring and
  observability.

### ⚡ Developer Experience

- Opinionated config files for scalable architecture.
- **VSCode config** for consistent workspace setup.
- **Utility scripts** for building & testing locally or in pipelines.

---

## 📦 Getting Started

> Ensure you have [Node.js](https://nodejs.org) (16+ recommended), Docker, and
> your preferred package manager (npm / yarn / pnpm) installed.

### 1. Clone the repository

```bash
git clone https://github.com/ZaryabKhan001/NextJS-Production-Setup.git
cd NextJS-Production-Setup
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env` file from the provided example:

```bash
cp .env.example .env
```

Configure the values (database URL, API keys, Sentry DSN, etc.).

---

## 🧪 Local Development

Run the development server with hot-reload:

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

---

## 🧱 Database (Prisma)

Migrate your database using Prisma:

```bash
npx prisma migrate dev --name init
```

Generate Prisma client:

```bash
npx prisma generate
```

---

## 🧰 Linting & Formatting

Check for linting issues:

```bash
npm run lint
```

Format code:

```bash
npm run format:fix
```

> Pre-commit checks are handled by **Husky** and **Commitlint**, ensuring
> quality and conventional commits.

---

## 🧪 Testing

### Playwright E2E

```bash
npm run test:e2e
```

### Vitest (if included)

```bash
npm run test
```

---

## 📦 Production Build

Build the optimized production app:

```bash
npm run build
```

Preview locally:

```bash
npm run start
```

The production build will output optimized assets, server functions, and static
pages.

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t nextjs-production .
```

### Run Container

```bash
docker run -p 3000:3000 nextjs-production
```

This is ideal for deployment via container platforms (AWS ECS, DigitalOcean App
Platform, Fly.io, etc.).

---

## 📍 Deployment

### Vercel (Recommended)

Install the Vercel CLI and deploy:

```bash
npx vercel
```

Follow the prompts to connect your GitHub repo and configure environment
variables. Vercel automatically builds and deploys your app on every push.
([Next.js][1])

### Other Platforms

You can also deploy using:

- **Docker host / Kubernetes**
- **Netlify** or **AWS Amplify**
- **Custom server / Node.js host** with:

```bash
npm run build
npm run start
```

---

## 🧠 Best Practices (Included)

- **CI/CD workflows** run tests, linting, and builds on push.
- **Commitlint** ensures semantic commit messages for version history.
- **Monitoring & Logging** via Sentry integration.
- Docker-optimized multi-stage builds for small production images.

---

## 🧩 Folder Structure

- `.github/workflows` — CI/CD configs.
- `.husky` — Git hooks.
- `src/` — main app source (Next.js pages & components).
- `prisma/` — schema + migrations.
- `playwright/` — end-to-end tests.
- `Dockerfile` — container definition.

---

## 🛡️ Contributing

Contributions are welcome! Please:

1. Fork the repo.
2. Create a feature branch.
3. Write tests & ensure formatting.
4. Submit a pull request aligned with project conventions.

---

## 📜 License

This project is **MIT Licensed** — feel free to use it in personal or commercial
applications.

---

## 💬 Contact

If you use this template — let me know! Provide feedback or open issues to
improve this starter.
