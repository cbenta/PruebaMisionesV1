# SIP Monitor Mobile

Base Expo + React Native project scaffold for the SIP Monitor initiative. Business logic, UI design, and data integrations remain as future work.

## Requirements
- Node.js 20.x and npm 10+
- Expo CLI (installed globally or run with `npx`)
- Android Studio with an Android Virtual Device, or a physical Android/iOS device with the Expo Go app

## Setup & Development
```bash
npm install
npx expo start
```
- Within the Expo CLI interface press `a` to launch the Android emulator, or scan the QR code with Expo Go on a device.

### Navegación actual
1. La app inicia en la pantalla de bienvenida (`/`).
2. Toca el botón "Ir a Misiones" para abrir la pantalla `/missions`.
3. Se muestra un listado placeholder de misiones estáticas.

## Scripts útiles
- `npm run android` abre el proyecto directamente en Android.
- `npm run ios` inicia el simulador de iOS (macOS requerido).
- `npm run web` lanza la versión web experimental.
- `npm run lint`, `npm run format`, y `npm run typecheck` ejecutan validaciones de calidad.

## Project Structure
```
App.tsx
src/
  navigation/
    types.ts
  screens/
    MissionsListScreen.tsx
    WelcomeScreen.tsx
```

> TODO: Conectar los datos reales, implementar autenticación y diseñar la UI final.
