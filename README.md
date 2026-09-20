# Shivansh Kumar — Portfolio

React 19 + Vite + Tailwind CSS 4 + Motion (TypeScript).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build
```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy (Vercel / Netlify)
Import the repo, framework preset **Vite**, build command `npm run build`, output directory `dist`.

## Contact form -> your email
The form sends real emails through [Web3Forms](https://web3forms.com) (free, ~250 messages/month).
The access key lives in `src/data.ts` (`CONTACT_FORM`); set `VITE_WEB3FORMS_KEY` to override it (e.g. after rotating the key).
If a visitor's browser blocks the request, the form falls back to opening their mail app addressed to you.

## Where things live
- `src/data.ts` — all content (skills, experience, achievements, certifications, projects, stats…)
- `src/components/` — one component per section; `src/components/ui/` — cursor, tilt cards, headings, "TO TOP"
- `src/assets/resume/` — your resume PDF + its page previews (replace the PDF and re-export the 2 page images to update the popup)
- `src/assets/projects/` — drop a screenshot named after a project id (e.g. `proj-flashbook.png`) and it shows on the card
- `src/assets/deco/` and `hero-*.webp` — pre-rendered painted decorations and backdrop
