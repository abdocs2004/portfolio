# Abdelrahman Ibrahim — Portfolio

A premium, multi-page Full-Stack Developer portfolio built with Next.js (App Router).

## Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Self-hosted variable fonts (Space Grotesk + Inter) — no external font requests

## Structure
```
src/
├── app/
│   ├── page.js              Home (hero, What I Build, featured projects, Build Process, CTA)
│   ├── about/page.js         About + Training & Education
│   ├── skills/page.js        Full tech stack, grouped by category
│   ├── projects/page.js      Project grid with category filter
│   ├── projects/[slug]/page.js   Case study pages (auto-generated for projects with caseStudy: true)
│   ├── contact/page.js        Contact methods
│   ├── sitemap.js / robots.js
│   └── fonts/                 Self-hosted .ttf font files
├── components/                 Reusable UI (Navbar, Footer, ProjectCard, BuildProcess, TechIcon, ...)
└── data/                        ← Edit content here, not in components
    ├── site.js                  Name, contact info, links — single source of truth
    ├── projects.js               All project content + images
    ├── skills.js                  Skills grouped by category
    ├── experience.js              Training & education entries
    ├── process.js                 The 7-step "Build Process" section content
    └── whatIBuild.js               "What I Build" homepage grid
```

## Editing content
Almost everything is data-driven — you should rarely need to touch a component:
- **Contact info / links**: `src/data/site.js`
- **Add or edit a project**: `src/data/projects.js` — set `caseStudy: true` to automatically get a dedicated `/projects/<slug>` page
- **Skills**: `src/data/skills.js`
- **Training entries**: `src/data/experience.js`

## Replacing placeholder images
Every image referenced in `src/data/projects.js` and the homepage/about photo lives under `public/images/`. The current files are generated placeholder mockups (browser-chrome style cards with an icon and title) — replace them directly with real screenshots/photos using the **same filenames**, and nothing else needs to change:
- `public/images/profile-photo.png` — your photo
- `public/images/projects/<slug>.png` — one per project (filenames match each project's `slug` in `projects.js`)

Recommended real dimensions: profile photo square (e.g. 900×900), project screenshots 4:3 (e.g. 1200×900).

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Deploy
Deploy as a standard Next.js app (e.g. Vercel). No environment variables are required — all content lives in `src/data/`.
