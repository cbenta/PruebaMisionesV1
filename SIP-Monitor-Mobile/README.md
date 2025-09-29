# SIP Monitor Mobile

Base Expo + React Native project scaffold for the SIP Monitor initiative. Business logic, UI design, and data integrations are intentionally omitted.

## Requirements
- Node.js 20.x and npm 10+
- Expo CLI (installed globally or run with `npx`)
- Android Studio with an Android Virtual Device, or a physical Android/iOS device with the Expo Go app

## Environment
1. Copy `.env.example` to `.env`.
2. Provide the `API_BASE_URL` value according to your backend environment.

## Installation and Development
```bash
npm install
npx expo start
```

### Platform Shortcuts
```bash
npm run android
npm run ios
npm run web
```

## Quality Tooling
- `npm run lint` executes ESLint with TypeScript rules.
- `npm run format` runs Prettier in check mode.
- `npm run typecheck` validates TypeScript types without emitting outputs.
- Husky installs a pre-commit hook via `npm install` (triggered through `npm run prepare`).
- `lint-staged` auto-formats and lints staged files before each commit.

## Project Structure
```
app/
  login.tsx
  missions/
    detail.tsx
    list.tsx
assets/
```

> TODO: Wire navigation, implement mission flows, connect to the SIP Monitor backend, and design production-ready UI.
