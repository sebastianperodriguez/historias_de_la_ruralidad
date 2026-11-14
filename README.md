# Historias de Ruralidad Carmelitana

Archivo vivo comunitario: memorias, voces y territorios de El Carmen de Viboral, Antioquia.
SPA en React + TypeScript que presenta el proyecto etnográfico de la vereda La Aurora.

## Stack

- **Build**: Vite + React + TypeScript (strict)
- **Estilos**: Tailwind CSS v4 con tokens de diseño propios
- **Rutas**: React Router
- **Testing**: Vitest + React Testing Library + Playwright (E2E)
- **Calidad**: ESLint, Prettier, husky, lint-staged, commitlint (Conventional Commits)
- **CI**: GitHub Actions (lint → format:check → typecheck → test → build)
- **Deploy**: Vercel

## Scripts

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run lint       # eslint
npm run typecheck  # typescript
npm test           # tests unitarios (vitest)
npm run e2e        # tests end-to-end (playwright)
```

## Estructura

```
src/
  components/   # UI reutilizable (media, layout, primitivas)
  layouts/      # Layouts de página
  pages/        # Rutas: Home, La Aurora, Historias, Revista, Documental
  data/         # Contenido tipado (veredas, historias, revista, media)
  hooks/        # useTheme, useAudioPlayer
  test/         # Setup de pruebas
```

## Convención de commits

[Conventional Commits](https://www.conventionalcommits.org/es/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`, `revert:`
