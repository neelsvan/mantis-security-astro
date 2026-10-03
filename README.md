# Mantis Security — Astro site (Cloudflare Pages)

Rebuild of the Mantis Security marketing site in [Astro](https://astro.build), targeting
**Cloudflare Pages**. This project is fully independent of the previous Next.js build
(`mantis-security-website` / `nextjs_space`), which remains untouched.

## Stack

- **Astro 5** — fully static output (zero JS by default; small vanilla scripts for nav, gallery lightbox, counters, carousel)
- **Tailwind CSS v4** with the site's exact brand tokens (legacy Mantis palette: yellow `#FFD700`, charcoal `#1D1D1D`, red `#8B1A1A`) — see `src/styles/global.css`
- **Fonts**: Montserrat (headings) + Roboto (body) via Fontsource
- **Content**:
  - Services (8) & Industries (6): data files in `src/data/` rendered through shared templates
  - Testimonials, FAQs, team, careers: JSON in `src/data/` (exported from the previous site's database)
  - Blog posts & case studies: **Sanity CMS** (`zxqjs2qh` / production), fetched at build time via `src/lib/sanity.ts`
- **Contact form**: `functions/api/contact.ts` — a Cloudflare Pages Function with Turnstile spam protection, delivered by email via Resend

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npx wrangler pages dev dist` | Preview the build *with* the Pages Function locally |

## Deployment (Cloudflare Pages)

1. Connect this repo to a Cloudflare Pages project (build command `npm run build`, output `dist`, Node 22+).
2. **Build-time variables** (Settings → Environment variables):
   - `PUBLIC_SANITY_PROJECT_ID=zxqjs2qh`
   - `PUBLIC_SANITY_DATASET=production`
   - `PUBLIC_TURNSTILE_SITE_KEY=<from Cloudflare Turnstile dashboard>`
3. **Runtime variables** for the contact function (Production + Preview):
   - `TURNSTILE_SECRET_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO=info@mantissecurity.co.za`
   - `CONTACT_EMAIL_FROM=<verified Resend sender>`

## Editing content

- **Testimonials / FAQs / team / careers**: edit the JSON files in `src/data/`.
- **Services / Industries page copy**: edit `src/data/services.ts` / `src/data/industries.ts`.
- **Blog & case studies**: publish in Sanity Studio (lives in the old workspace at
  `mantis-security-website/studio/`); new posts appear on the next site build.

Note: PSIRA Regulation 12(b) wording in the footer is prescribed verbatim — do not reword.
