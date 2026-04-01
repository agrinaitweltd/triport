# Tripport Agro Multi-Page Website

Multi-page Vite + TypeScript website that mirrors the provided Tripport Agro reference screenshots with reusable components and responsive layouts.

## Tech Stack

- Vite
- TypeScript
- Modular component/page architecture
- Plain CSS with responsive breakpoints and animations

## Project Structure

- dist
- node_modules
- public (all placeholder images)
- src/components
- src/pages
- src/styles
- index.html and additional page entries
- package.json
- package-lock.json
- vite.config.ts
- netlify.toml
- .env.example
- tsconfig.json
- README.md
- .gitignore

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Netlify

Build command: `npm run build`
Publish directory: `dist`

Configured in `netlify.toml`.

## Placeholder + Auto Image Detection

No real image files are required in the repository by default. The UI shows visible placeholder labels when an image file is missing.

When you add a file into `/public` with one of the base names below, it is auto-detected and used immediately (supported extensions: png, jpg, jpeg, webp, avif, gif, svg).

- `logo-tripport`
- `hero-coffee`
- `about-farm`
- `market-network`
- `cta-texture`
- `product-coffee`
- `product-fruits`
- `product-vegetables`
- `product-foods`

Examples:

- `/public/about-farm.jpg`
- `/public/about-farm.png`
- `/public/about-farm.webp`

All will be resolved automatically without code changes.
