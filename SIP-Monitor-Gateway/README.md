# SIP Monitor Gateway

NestJS + Prisma bootstrap service for the SIP Monitor platform. Business endpoints are not yet implemented; only health checking and project wiring are provided.

## Requirements
- Node.js 20.x and npm 10+
- Docker Desktop (or compatible) to run PostgreSQL locally

## Environment
1. Copy `.env.example` to `.env`.
2. Set `DATABASE_URL` to point to your database and adjust `PORT` if required.

## Local Database
```bash
docker compose -f docker/docker-compose.dev.yml up -d
```
This starts PostgreSQL (user/password `postgres`) and pgAdmin at http://localhost:5050.

## Installation and Development
```bash
npm install
npm run prisma:generate
npm run start:dev
```

## Quality Tooling
- `npm run lint` runs ESLint using the strict TypeScript configuration.
- `npm run format` executes Prettier in check mode.
- `npm run build` compiles the project to `dist/`.
- Husky installs a pre-commit hook via `npm run prepare` to run `lint-staged`.

## Project Structure
```
src/
  app.module.ts
  health/
    health.controller.ts
    health.module.ts
  main.ts
prisma/
  schema.prisma
docker/
  docker-compose.dev.yml
```

> TODO: Define Prisma models, add authentication, and implement mission-related endpoints.
