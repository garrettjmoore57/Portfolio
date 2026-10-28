# Garrett Moore / marketing director portfolio

A deliberately small, editorial portfolio built with semantic HTML, hand-written CSS and vanilla JavaScript. It deploys on GitHub Pages from `main`. No dependencies, install command, framework or build step.

## Start here

- **Live portfolio:** https://garrettjmoore57.github.io/Portfolio/
- **Work archive:** https://garrettjmoore57.github.io/Portfolio/work.html
- **Repository:** https://github.com/garrettjmoore57/Portfolio
- **Editing:** `index.html` is the home page; `work.html` holds the deeper case studies; `styles.css` contains G OS tokens and core layout; `studio.css` controls the signature layered-paper hero and interactive showcase; `main.js` controls the theme and optional email link; `studio.js` adds keyboard controls and restrained motion.
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

## Working Studio experience

The homepage's interactive studio offers four switchable concept views: brand, sales, digital and events. All visuals are purpose-made portfolio illustrations, **not** literal employer work samples. To modify a discipline, edit its matching `data-studio-panel` block in `index.html`; keep the `data-studio-tab` value in sync and edit styling under `.studio-visual-*` in `studio.css`. Keyboard arrows and Home/End switch views. No build step or analytics.

## Evidence upgrade

Replace concept boards with actual, approved work when available. Candidate items: a redacted brochure spread, 2–3 deck slides, an HTML/CSS site layout screenshot, a conference installation image, a redacted email plan, and before/after brand style examples. Confirm approval to publish, remove school/client names and internal information, and never imply a conceptual study was a delivered project.


## Authentic-work edition (October 2026)

- `real-work.css` extends the existing G OS layout with actual project photography, an employer logo comparison, brochure and presentation spreads, and a photo-led hero.
- `assets/cte-space.webp`, `assets/college-prep-space.webp`: on-location photos supplied by Garrett and credited as his photography. Furniture delivery/design is not attributed to him.
- `assets/collateral-cover.webp`: cover of a real collaboration brochure Garrett produced.
- `assets/sales-deck-excerpt.webp`: non-client-specific page from a custom sales presentation; no client contact pages are published.
- `assets/brand-old.webp`, `assets/brand-new.webp`: former and updated employer identity supplied for a before/after comparison. Leadership of the larger refresh does not establish sole authorship of the logo.
- `assets/portrait-editorial.webp`: AI-assisted, photo-based professionalized portrait derived from user-supplied selfies. It is an edited/generated interpretation, not an untouched photograph.

The Marketing Review document supplied with this update documents **20+ custom sales presentations** and **15+ collateral variations**. Those are work-volume measures, not sales conversions or independent outcomes.

Digital/SEO work remains a supporting skill. The main portfolio narrative prioritizes sales enablement, decks, brochures, print, brand strategy, event execution and photography.

**Review before sharing publicly:** Any employer intellectual property or real school photography should only be shared with the user's authorization or appropriate permission. The original 31-page presentation, 17-page report, contact directories and individual school names have not been uploaded to this public repository.


## Director edition — evidence and image quality

- `director.css` is loaded last on both pages. It governs the Director's View, consistent photo crops, presentation and brochure fitting, and responsive image layouts.
- The current pages load five optimized higher-resolution files: `portrait-editorial-v2.webp` (820×1230), `cte-space-hd.webp` (2048×1365), `college-prep-space-hd.webp` (1280×1365), `collateral-cover-hd.webp` (1224×1224), and `sales-deck-excerpt-hd.webp` (2000×1125).
- All larger originals are based on owner-supplied sources. The portrait is AI-assisted, with the beard appearance refined; inspect it carefully before sharing publicly.
- These files are **not 4K resolution**. Dimensions were chosen to improve clarity at normal retina display sizes while retaining fast downloads. Avoid forcing 4K image downloads where the site only displays a 400–700px tile.
- Photography uses `object-fit:cover`, where careful crops preserve the subject; brochure and presentation content uses source-matched aspect ratios so words are not clipped. Click project photos and documents to open their larger file.
- `assets/portrait-editorial.webp` and the original lower-resolution files remain in the repository for rollback. The live pages use the `-hd` and `-v2` versions.
- The Director's View synthesizes documented brand work, 20+ custom presentations, collateral formats and conference execution. It does not claim revenue responsibility, hiring/management authority or returns that were not measured.
