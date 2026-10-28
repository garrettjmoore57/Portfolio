/* CONFIG: Fill both email parts to reveal the email link. Keep the parts separate. */
const CONFIG = Object.freeze({
  emailLocal: "",
  emailDomain: ""
});

/* Email: not rendered in page source when unconfigured. This deters basic scrapers, not determined ones. */
const emailLink = document.getElementById("email-link");
if (emailLink && CONFIG.emailLocal.trim() && CONFIG.emailDomain.trim()) {
  const address = `${CONFIG.emailLocal.trim()}@${CONFIG.emailDomain.trim()}`;
  emailLink.href = `mailto:${address}`;
  emailLink.hidden = false;
}

/* Theme: follow the visitor's preference unless a theme was chosen here. */
const themeButton = document.getElementById("theme-toggle");
const root = document.documentElement;
const storageKey = "garrett-portfolio-theme";
let chosenTheme = null;
try { chosenTheme = localStorage.getItem(storageKey); } catch (_) { /* Storage may be unavailable. */ }
if (chosenTheme !== "dark" && chosenTheme !== "light") {
  chosenTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function setTheme(theme) {
  root.dataset.theme = theme;
  if (!themeButton) return;
  const dark = theme === "dark";
  themeButton.textContent = dark ? "Soft White" : "Soft Black";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", `Switch to ${dark ? "Soft White" : "Soft Black"} theme`);
}
setTheme(chosenTheme);
themeButton?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
  try { localStorage.setItem(storageKey, next); } catch (_) { /* Optional preference only. */ }
});

/* Footer year. */
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
