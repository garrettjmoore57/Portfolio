# Design research / portfolio v2

Research reviewed October 2026. These are **references and principles**, not images or code copied into this site.

## Selected references
- [Framer: marketing portfolio examples](https://www.framer.com/blog/marketing-portfolio-examples/) — show marketing judgement, what shipped, and results only where evidence exists.
- [UXfolio: State of UX Portfolios 2026](https://uxfol.io/state-of-ux-portfolios-2026/report) — hiring-review research emphasizing case-study credibility.
- [Alex Valcarcel, Behance](https://www.behance.net/gallery/232486581/Alex-Valcarcel-Portfolio-Website) — editorial grid structure and clear navigation.
- [Editorial Layout & Publication Design, Behance](https://www.behance.net/gallery/247948171/Editorial-Layout-Publication-Design) — consistent hierarchy and deliberate white space across a system.
- [Davide Baratta, MaxiBestOf](https://maxibestof.one/websites/71614-davide-baratta) — confident type scale and disciplined project ordering.
- [Parth Lashkari, GitHub](https://github.com/parthlashkari/portfolio) — multiple purposeful directions without a build step; this site keeps one consistent identity instead.
- [Hitesh Nandakumar, GitHub](https://github.com/hiteshwired/PortfolioWebsite) — static portfolio structure and testing habits.
- [Portfolio best practices by role, Colorlib](https://colorlib.com/wp/best-portfolio-websites/) — prioritize a few strong studies over a long gallery.

## Decisions for this iteration
1. Bring selected work before the personal bio. Hiring managers should see evidence early.
2. Improve the opening promise: connect strategy and hands-on execution, not vague adjectives.
3. Add four CSS-only conceptual illustrations to make case cards distinguishable and scannable, clearly labeled as explanations rather than employer deliverables.
4. Add `work.html` with deeper context, actual scope, decision logic, and explicit boundaries on outcome claims.
5. Keep both themes, the G OS palette, no-build architecture, one résumé CTA, and one primary contact destination.
6. Use absolute canonical/social URLs for the current GitHub Pages address and add both pages to the sitemap.

## Highest-value future additions (require owner-supplied evidence)
- One approved, redacted real project artifact per case study: cover, deck spread, collateral photo, campaign outline or site screenshot. Label the actual contribution accurately.
- Verified outcomes with attribution and date windows. Without those, leave outcome fields blank rather than substitute impressive-looking numbers.
- A genuine portrait instead of the typographic GM space.
- An approved public email address.
- Clarification of the documented employment timeline gap and chapter board start date if owner wants them visible.

## Testing checklist
Check mobile and desktop width, both themes, all anchors, no broken asset paths, keyboard links, reduced motion, page titles and metadata, sitemap, and no unpublished claims. Run Lighthouse on the deployed site; do not claim a score without a run.

## Studio edition / research and design decisions (28 October 2026)

**Research inspected**:
- [Studio K95 interactive portfolio on Behance](https://www.behance.net/gallery/251405469/K95-Portfolio-Website): one strong visual idea, clear art-directed layout, and controlled movement across work samples. We used a modest layered-paper stage instead of 3D.
- [Mat Voyce portfolio on Behance](https://www.behance.net/gallery/241733429/Mat-Voyce): bold typographic navigation and visually separated work categories. We introduced a real interactive four-discipline console.
- [Kris Nord brand and product portfolio](https://www.behance.net/gallery/245037153/Personal-Design-Portfolio-Brand-and-Product): connected narrative from introduction to actual work, relevant scope and a clear next action.
- [Creative Director Web / UX strategy portfolio](https://www.behance.net/gallery/244241017/Creative-Director-Web-UX-Strategy-Visual-Design): calm high-end composition alongside strategy and visible intent.
- [Gionatan Nese portfolio editorial review](https://dokle.design/awards/gionatan-nese-portfolio-homepage-pile-of-thumbnails): an unexpected arrangement of visual work with understated navigation.
- [Léo Parpeix 2026 Awwwards teardown](https://rickcreates.com/r/2026-09-28-leo-parpeix-portfolio): inventive interactions were distinguished from accessibility limitations; a useful reminder not to sacrifice hiring usability for novelty.
- [Awwwards interaction and storytelling design presentation](https://assets.awwwards.com/assets/files/live-presentation.pdf): microinteractions and memorable voice can add delight, provided the work remains legible and accessible.

**Original concept chosen**: The Working Studio. Garrett's approved background connects real logistics experience to brand, sales, digital and event execution. The visual metaphor is a working desk with layered printed studies, not a shiny dashboard or a fake screenshot. The interface lets visitors compare four disciplines without adding a framework or video.

**Implementation**: `studio.css` and `studio.js` extend the existing two-page static site. Hero uses a CSS-only layered-paper object. The console uses four real buttons with visible state, clear text and keyboard arrow navigation. Motion is a handful of pixels on fine pointers only, respecting reduced-motion preferences. All conceptual pieces are disclosed as illustrations.

**Avoided**: WebGL, loading screens, scroll hijacking, fake client mockups, auto-rotating slides, user tracking, invented results, and click-to-reveal career facts.

**What real evidence would improve the site**: an approved brochure or deck excerpt, a screenshot of the HTML/CSS layout, a redacted conference sign/booth photo, and an approved campaign sequence or strategy artifact. Actual project materials would replace conceptual visual specimens rather than sit on top of them.
