# Historias de Ruralidad Carmelitana

Archivo vivo comunitario: memorias, voces y territorios de El Carmen de Viboral, Antioquia.
SPA en React + TypeScript que presenta la revista **"La Aurora: memorias de una vereda construida en comunidad"**, su documental y la banda sonora del proyecto.

## Stack

- **Build**: Vite + React + TypeScript (strict)
- **Estilos**: Tailwind CSS v4 con tokens de diseño propios (fiel a la revista)
- **Rutas**: React Router
- **Testing**: Vitest + React Testing Library (unit) + Playwright (E2E)
- **Calidad**: ESLint, Prettier, husky, lint-staged, commitlint (Conventional Commits)
- **CI**: GitHub Actions (lint → format → typecheck → test → build + E2E)
- **Deploy**: Vercel

## Scripts

```bash
npm install              # instalar dependencias
npm run dev              # servidor de desarrollo
npm run build            # build de producción
npm run preview          # previsualizar el build
npm run lint             # eslint
npm run typecheck        # typescript
npm test                 # tests unitarios (vitest)
npm run e2e              # tests end-to-end (playwright)
npm run magazine:convert # convertir PNG de la revista a WebP optimizados
```

## Estructura

```
src/
  components/   # UI reutilizable (media, layout, primitivas)
  layouts/      # Layouts de página
  pages/        # Rutas: Home, La Aurora, Historias, Revista, Documental
  data/         # Contenido tipado de la revista (capítulos, citas, créditos)
  hooks/ lib/   # Utilidades (formato, páginas de la revista)
  assets/       # Páginas de la revista en WebP
scripts/        # Pipeline de conversión de la revista
e2e/            # Tests end-to-end de Playwright
```

## Contenido

Todo el contenido editorial vive en `src/data/` y proviene de la revista impresa:

- `revista.ts` — capítulos completos con citas textuales de la comunidad
- `aurora.ts` — ficha de la vereda, hitos comunitarios y testimonios
- `suite.ts` — banda sonora ("Suite para la Aurora")
- `veredas.ts` — cuadernos de campo del archivo

## Convención de commits

[Conventional Commits](https://www.conventionalcommits.org/es/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `build:`, `ci:`, `chore:`, `revert:`
