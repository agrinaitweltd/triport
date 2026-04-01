export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/quote", label: "Contact" }
];

export function renderHeader(activePage: string): string {
  const isHome = activePage === "home";
  const links = navItems
    .map(
      (item) => {
        const itemKey = item.label.toLowerCase();
        const active =
          (isHome && item.label === "Home") ||
          (!isHome &&
            ((itemKey.includes("about") && (activePage === "about" || activePage === "team-profile")) ||
              (itemKey.includes("products") && activePage === "products") ||
              (itemKey.includes("contact") && activePage === "quote")));

        return `<a class="nav-link ${active ? "active" : ""}" href="${item.href}">${item.label}</a>`;
      }
    )
    .join("");

  return `
    <header class="site-header ${isHome ? "hero-mode" : ""}">
      <div class="container nav-shell">
        <a href="/" class="brand" aria-label="Triport Agro International Limited Home">
          <span class="brand-logo auto-bg" role="img" aria-label="Triport Agro International Limited logo placeholder" data-image-base="logo-tripport">
            <span class="asset-placeholder-label">IMAGE PLACEHOLDER</span>
          </span>
        </a>
        <div class="mobile-actions">
          <button class="mobile-icon" type="button" tabindex="-1" aria-label="Accessibility options">♿</button>
          <button class="mobile-icon" id="mobileSearchTrigger" type="button" aria-label="Search products">⌕</button>
        </div>
        <button class="menu-toggle" id="menuToggle" type="button" aria-label="Toggle navigation" aria-controls="mainNav" aria-expanded="false">☰</button>
        <nav class="nav" id="mainNav">
          ${links}
        </nav>
        <div class="nav-end">
          <span class="nav-phone">+256 780 391916</span>
          <a class="quote-btn" href="/quote">Request Quote</a>
        </div>
      </div>
    </header>
  `;
}

export function enableMobileMenu(): void {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    if (!nav.classList.contains("open")) {
      return;
    }

    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll<HTMLAnchorElement>("a.nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("open")) {
      return;
    }

    const target = event.target as Node;

    if (!nav.contains(target) && !toggle.contains(target)) {
      closeMenu();
    }
  });
}

export function enableMobileProductSearch(): void {
  const trigger = document.getElementById("mobileSearchTrigger") as HTMLButtonElement | null;

  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const currentQuery = new URLSearchParams(window.location.search).get("q") || "";
    const value = window.prompt("Search products", currentQuery);

    if (value === null) {
      return;
    }

    const query = value.trim();
    const next = new URL(window.location.origin + "/products");

    if (query) {
      next.searchParams.set("q", query);
    }

    const targetUrl = `${next.pathname}${next.search}`;
    const currentUrl = `${window.location.pathname}${window.location.search}`;

    if (currentUrl === targetUrl) {
      return;
    }

    window.location.href = targetUrl;
  });
}
