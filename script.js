const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeNav = () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "メニューを開く");
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeNav();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeNav();
    navToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("is-open") && !header.contains(event.target)) {
    closeNav();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    closeNav();
  }
});

// Reveal sections as they scroll into view
const revealTargets = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
  );
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

// Interactive NAND gate
const gate = document.querySelector("[data-gate]");

if (gate) {
  const inputs = gate.querySelectorAll("[data-input]");
  const output = gate.querySelector("[data-output]");
  const status = gate.querySelector("[data-gate-status]");
  const rows = gate.querySelectorAll("[data-row]");

  const render = (announce) => {
    const a = gate.dataset.a;
    const b = gate.dataset.b;
    const out = a === "1" && b === "1" ? "0" : "1";

    gate.dataset.out = out;
    output.textContent = out;
    rows.forEach((row) => row.classList.toggle("is-active", row.dataset.row === a + b));

    if (announce) {
      status.textContent = `入力A ${a}、入力B ${b}、出力 ${out}`;
    }
  };

  inputs.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.input;
      const next = gate.dataset[key] === "1" ? "0" : "1";

      gate.dataset[key] = next;
      button.setAttribute("aria-pressed", String(next === "1"));
      button.querySelector("[data-value]").textContent = next;
      render(true);
    });
  });

  render(false);
}
