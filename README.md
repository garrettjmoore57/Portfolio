# Garrett Moore — portfolio site

A static portfolio built with hand-editable HTML, CSS and vanilla JavaScript. No framework, npm, build command or stock imagery. Designed with G OS. The included résumé is the original one-page PDF.

## Edit the site

- `index.html` — every page section is marked with an HTML comment. Change the text here.
- `styles.css` — theme tokens appear first. Both Soft White and Soft Black are supported.
- `main.js` — enter the local part and domain of your email in the `CONFIG` object at the top. Until both are supplied, the email link stays hidden.
- `assets/Garrett_Moore_Resume.pdf` — replace with an updated PDF using the same file name.
- The About panel currently uses an `GM` typographic treatment. Replace `.portrait-initials` with a descriptive `<img>` element if you want to add a headshot.
- `assets/social-card.png` — the social sharing image, 1200 × 630.

## Publish on GitHub Pages

1. Create a **public** GitHub repository and upload the **contents** of this folder, with `index.html` at the repository root.
2. Commit and push the files to the `main` branch.
3. Open the repository's **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
4. Open the URL shown by Pages. Test navigation, the PDF download and mobile layout.
5. Once your public URL is confirmed, add it as an absolute `<loc>` inside `sitemap.xml`, and add absolute `og:url`, `og:image` and `twitter:image` URLs to `index.html`. Relative links were retained for project-repository compatibility rather than inventing a domain.
6. If using a custom domain, configure it in Pages, follow GitHub's DNS instructions and enable HTTPS after validation.

A sitemap cannot honestly contain a page URL until you know the final domain. The included `sitemap.xml` is valid XML and deliberately empty until publication. For SEO and social previews, finalize those URLs after the site is live. `robots.txt` allows crawling.

## Quality checks

Open `index.html` locally to edit, but test from an HTTPS Pages URL. In browser DevTools, audit the published site with Lighthouse for performance, accessibility, best practices and SEO; check the result on mobile as well as desktop. 95+ is the design goal, not a guaranteed score. Social link previews also need a deployed absolute image URL. The visible email link offers light anti-scraping protection only; it is not secure against a crawler that runs JavaScript.

The PDF may include contact details that are not present in the public HTML. Review that document before publishing.
