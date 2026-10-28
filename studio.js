/* STUDIO / progressive enhancement.
   No site content depends on pointer movement or scroll listeners.
   The selected panel begins visible in static HTML. */
(() => {
  "use strict";

  /* 01. Interactive portfolio workbench; button state remains keyboard-readable. */
  const buttons = [...document.querySelectorAll("[data-studio-tab]")];
  const panels = [...document.querySelectorAll("[data-studio-panel]")];
  const choose = (name, moveFocus = false) => {
    const selected = buttons.find(b => b.dataset.studioTab === name);
    if (!selected) return;
    buttons.forEach(button => {
      const active = button === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.studioPanel === name;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
    if (moveFocus) selected.focus();
  };
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => choose(button.dataset.studioTab));
    button.addEventListener("keydown", event => {
      let next = null;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % buttons.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + buttons.length - 1) % buttons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = buttons.length - 1;
      if (next === null) return;
      event.preventDefault();
      choose(buttons[next].dataset.studioTab, true);
    });
  });

  /* 02. A paper object that moves by a few pixels, not a competing 3D experience. */
  const desk = document.querySelector(".folio-desk");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (desk && !reduced.matches && finePointer.matches) {
    let frame = 0;
    desk.addEventListener("pointermove", event => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const bounds = desk.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        desk.style.setProperty("--dx", `${(x * 8).toFixed(1)}px`);
        desk.style.setProperty("--dy", `${(y * 8).toFixed(1)}px`);
      });
    }, {passive:true});
    desk.addEventListener("pointerleave", () => {
      desk.style.setProperty("--dx", "0px");
      desk.style.setProperty("--dy", "0px");
    });
  }

  /* 03. Quiet reading-progress rule, updated no more than once per frame. */
  const bar = document.getElementById("reading-progress-bar");
  if (bar && !reduced.matches) {
    let queued = false;
    const update = () => {
      queued = false;
      const root = document.documentElement;
      const total = root.scrollHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(100, Math.max(0, window.scrollY / total * 100)) : 0;
      bar.style.width = `${progress.toFixed(2)}%`;
    };
    const request = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", request, {passive:true});
    window.addEventListener("resize", request, {passive:true});
    update();
  }
})();
