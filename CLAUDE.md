# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config via `eslint.config.mjs`)

## Architecture

Next.js 16 app using the App Router with TypeScript, Tailwind CSS v4, and React 19.

- **`src/app/`** — App Router directory. Pages are `page.tsx`, layouts are `layout.tsx`. File-based routing.
- **`public/`** — Static assets served at root path.
- **`@/*`** — Path alias mapped to `./src/*` (configured in tsconfig.json).
- Tailwind is configured via PostCSS (`postcss.config.mjs` with `@tailwindcss/postcss`).
- Global styles in `src/app/globals.css`.
