# Garrett Moore / marketing director portfolio

A deliberately small, editorial portfolio built with semantic HTML, hand-written CSS and vanilla JavaScript. It deploys on GitHub Pages from `main`. No dependencies, install command, framework or build step.

## Start here

- **Live portfolio:** https://garrettjmoore57.github.io/Portfolio/
- **Work archive:** https://garrettjmoore57.github.io/Portfolio/work.html
- **Repository:** https://github.com/garrettjmoore57/Portfolio
- **Editing:** `index.html` is the home page; `work.html` holds the deeper case studies; `styles.css` controls both color themes and responsive layouts; `main.js` controls the theme and optional email link.
- **Resume:** replace `assets/Garrett_Moore_Resume.pdf` with a current approved copy at the same path.
- **Photo:** the initials panel in `index.html` works until a real headshot is provided. No fabricated portrait.
- **Social preview:** `assets/social-card.png`.

## A one-sentence request is enough

If using connected GitHub tools or a coding agent, ask: "Read the current files in garrettjmoore57/Portfolio, make [requested change] without inventing claims, test the result, and prepare the update."

For full directions on safe editing and design decisions, see `AGENTS.md`. Research notes and reference links are in `DESIGN-RESEARCH.md`.

## Editorial rules

Only publish career facts from Garrett's approved resume and claims register. These source documents are not published in the repository. Never turn a planned item into a delivered result or imply that a conceptual diagram is an actual client artifact. Do not add client names, confidential work, numerical performance results, or quotations without explicit supporting evidence. The visual project previews in the homepage are editorial illustrations and labeled as such.

## Deploy on GitHub Pages

GitHub **Settings → Pages → Deploy from a branch → main → /(root)**. Merging a pull request to `main` triggers deployment automatically. The website uses relative links so both pages work from the `/Portfolio/` path. If you add a custom domain, update the canonical tags, social URLs and sitemap first.

## Quick checks before publishing

1. Open both pages and verify every navigation, project, LinkedIn and résumé link.
2. Test mobile and desktop: no clipped cards or sideways scrolling.
3. Confirm keyboard navigation, visible focus and reduced-motion behavior.
4. Check both light and dark themes.
5. Audit Lighthouse on the deployed site. 95+ is a goal, not an audited promise.
6. Read case-study copy against the source documents. No invented results.

## Email and privacy

The email is deliberately empty in `main.js` CONFIG until the owner supplies one. The site does not publish a phone number or street address in HTML. Review the PDF for contact information before sharing it: PDF content is publicly downloadable. JavaScript email assembly deters basic scrapers only.
