# Portfolio editing rules

You are maintaining a live, public, two-page marketing director portfolio. The audience is recruiters, executives, and hiring managers. This repository is plain HTML, CSS and JavaScript; do not introduce a build step, framework, tracker or dependency without a clear reason and owner approval.

## Content / source of truth
- Get factual claims from the owner's approved `resume.md` and `claims-register.md`, provided separately. If those files aren't available, preserve the existing approved facts and ask for source evidence before adding any new claim.
- Never invent customer names, performance results, awards, team scope, testimonials, software proficiency, launch outcomes, or professional dates.
- Planned work stays described as a plan. A designed website layout is not a launched website. Campaign audience size is not campaign performance.
- Use first-person, plain English, short sentences. Avoid jargon and inflated adjectives.
- The diagrams in `index.html` are original explanatory illustrations, not scans or reproductions of employer collateral. Keep the nearby disclosure visible.
- Do not publish employer confidential information, personal telephone numbers, street address or private source documents.
- Never infer missing dates, metrics, or hobbies. Leave them out.

## Brand / visual direction
- G OS: calm architectural editorial style, square shapes, warm off-white and charcoal, muted brass as a restrained accent.
- Type: Playfair Display for name, monogram and numerals; Poppins for headlines, body and UI.
- Preserve white space. Favor large project previews and useful case-study writing over decorative effects.
- No stock photos, made-up logos, fake project screenshots, icons-as-decoration, testimonial fabrication or flashy animations.
- Mobile behavior, low-JS rendering, good keyboard focus and reduced-motion support matter more than a visual effect.

## Technical rules
- Pages: `index.html`, `work.html`; shared `styles.css`, `main.js`; relative asset paths; canonical URLs assume GitHub Pages path `/Portfolio/`.
- Keep one h1 per document, semantic sections, functioning anchor links, descriptive titles and accessible focus indication.
- Change only relevant files, inspect existing behavior before modifying it, and test light/dark themes plus mobile.
- Treat `main` as production; make substantial changes on a branch first, review, and merge after checks.
- Do not silently modify the PDF or enable analytics. Leave the email `CONFIG` blank until provided.
- If editing copy from a request, preserve the current factual boundaries rather than reusing unverified text from outside portfolio examples.

## Studio edition specifics
- The paper-object hero and four switchable marketing discipline views are original diagrams, not employer project screenshots.
- `studio.css` and `studio.js` contain the optional visual and interaction layer. The site must remain readable without either script.
- If adding motion, limit it, avoid scroll hijacking, keep `prefers-reduced-motion` supported and preserve visible focus.
- Prefer swapping in approved redacted authentic marketing deliverables rather than adding further decorative concepts.
