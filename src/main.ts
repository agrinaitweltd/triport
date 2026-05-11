import "./styles/main.css";
import { enableMobileMenu, enableMobileProductSearch, renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";
import { wireAutoAssets } from "./components/assetResolver";

type RecaptchaApi = {
  render: (container: string | HTMLElement, parameters: { sitekey: string; theme?: "light" | "dark" }) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

export function mountPage(activePage: string, body: string, afterMain?: string): void {
  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) {
    return;
  }

  const shouldShowCookie = shouldRenderCookieBanner();
  app.innerHTML = `${renderHeader(activePage)}<main>${body}</main>${afterMain || ""}${renderFooter()}${shouldShowCookie ? renderCookieBanner() : ""}`;
  enableMobileMenu();
  enableMobileProductSearch();
  wireAutoAssets();
  wireProductsSearchResults(activePage);
  wireRevealAnimations();
  wireNumberAnimations();
  wireMobileMicroAnimations();
  wireQuoteForm();
  wireTeamModal();
  wireScrollShadow();

  if (shouldShowCookie) {
    wireCookieBanner();
  }
}

function wireProductsSearchResults(activePage: string): void {
  if (activePage !== "products") {
    return;
  }

  const grid = document.querySelector<HTMLElement>(".products-grid");

  if (!grid) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll<HTMLElement>(".product-card"));

  if (!cards.length) {
    return;
  }

  const query = (new URLSearchParams(window.location.search).get("q") || "").trim().toLowerCase();

  if (!query) {
    return;
  }

  let matches = 0;

  cards.forEach((card) => {
    const text = (card.textContent || "").toLowerCase();
    const isMatch = text.includes(query);

    card.classList.toggle("product-filter-hidden", !isMatch);

    if (isMatch) {
      matches += 1;
    }
  });

  const summary = document.createElement("div");
  summary.className = "products-search-summary";
  const count = document.createElement("strong");
  count.textContent = `${matches}`;
  const queryValue = document.createElement("em");
  queryValue.textContent = `"${query}"`;
  const clear = document.createElement("a");
  clear.href = "products";
  clear.textContent = "Clear search";

  summary.append(count, ` product${matches === 1 ? "" : "s"} found for `, queryValue, ". ", clear);
  grid.insertAdjacentElement("beforebegin", summary);

  if (matches > 0) {
    return;
  }

  const empty = document.createElement("p");
  empty.className = "products-search-empty";
  empty.textContent = "No matching products found. Try keywords like coffee, fruits, vegetables, or grains.";
  grid.insertAdjacentElement("afterend", empty);
}

function wireQuoteForm(): void {
  const form = document.getElementById("quoteForm") as HTMLFormElement | null;

  if (!form) return;

  const statusEl = document.getElementById("quoteFormStatus") as HTMLParagraphElement | null;
  const submitBtn = document.getElementById("quoteSubmitBtn") as HTMLButtonElement | null;
  const recaptchaHost = document.getElementById("recaptchaWidget") as HTMLDivElement | null;

  const recaptchaSiteKey =
    (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) || "6LeqveQsAAAAAPI0BHdk-4BuZIIbGIKglMmTR-f2";
  let recaptchaWidgetId: number | null = null;

  const regionRow = document.getElementById("regionRow") as HTMLDivElement | null;
  const country = document.getElementById("country") as HTMLSelectElement | null;
  const stateSelect = document.getElementById("stateSelect") as HTMLSelectElement | null;
  const regionSelect = document.getElementById("regionSelect") as HTMLSelectElement | null;
  const citySelect = document.getElementById("citySelect") as HTMLSelectElement | null;
  const townSelect = document.getElementById("townSelect") as HTMLSelectElement | null;
  const commonFields = document.getElementById("commonFields") as HTMLDivElement | null;
  const budgetGroup = document.getElementById("budgetGroup") as HTMLLabelElement | null;

  const typeRadios = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="businessType"]'));
  const conditionalBlocks = Array.from(form.querySelectorAll<HTMLElement>(".conditional-fields"));

  const locationData: Record<string, { states: string[]; regions: string[]; cities: string[]; towns: string[] }> = {
    uganda: {
      states: ["Central", "Western", "Eastern", "Northern"],
      regions: ["Kampala", "Wakiso", "Mbarara", "Gulu", "Mbale", "Arua"],
      cities: ["Kampala", "Entebbe", "Mbarara", "Gulu", "Jinja"],
      towns: ["Ntinda", "Mukono", "Kasese", "Fort Portal", "Lira"]
    },
    kenya: {
      states: ["Nairobi", "Mombasa", "Kiambu", "Nakuru"],
      regions: ["Nairobi County", "Mombasa County", "Kisumu County", "Uasin Gishu"],
      cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
      towns: ["Westlands", "Thika", "Eldoret", "Naivasha"]
    }
  };

  const gradeOptions: Record<string, string[]> = {
    "coffee-arabica": ["AA", "A", "AB", "PB", "Specialty Microlot"],
    "coffee-robusta": ["Screen 18", "Screen 15", "FAQ", "Clean Cup"],
    "coffee-specialty": ["Washed", "Natural", "Honey Process", "Single Origin"],
    avocado: ["Hass Grade A", "Hass Grade B", "Fuerte"],
    mango: ["Kent", "Keitt", "Apple Mango"],
    sesame: ["99.95% purity", "99.5% purity", "Conventional"],
    maize: ["Grade 1", "Grade 2"],
    beans: ["Red Kidney", "Sugar Beans", "Navy Beans"]
  };

  const setFieldsetState = (root: HTMLElement, disabled: boolean) => {
    root.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea").forEach((el) => {
      if (el.name === "businessType") {
        return;
      }

      if (disabled) {
        el.dataset.wasRequired = el.required ? "1" : "0";
        el.required = false;
        el.disabled = true;
      } else {
        el.disabled = false;
        if (el.dataset.wasRequired === "1") {
          el.required = true;
        }
      }
    });
  };

  const setOptions = (select: HTMLSelectElement | null, options: string[], placeholder: string) => {
    if (!select) {
      return;
    }

    select.innerHTML = `<option value="">${placeholder}</option>${options
      .map((item) => `<option value="${item.toLowerCase().replace(/\s+/g, "-")}">${item}</option>`)
      .join("")}`;
  };

  const handleCountry = () => {
    if (!country || !regionRow) {
      return;
    }

    const key = country.value;
    const shouldShowRegion = key === "uganda" || key === "kenya";
    regionRow.style.display = shouldShowRegion ? "block" : "none";

    const regionFields = [stateSelect, regionSelect, citySelect, townSelect];

    if (!shouldShowRegion) {
      regionFields.forEach((field) => {
        if (!field) {
          return;
        }

        field.required = false;
        field.disabled = true;
        field.innerHTML = `<option value="">Select...</option>`;
      });
      return;
    }

    const data = locationData[key] || locationData.uganda;
    setOptions(stateSelect, data.states, "Select state or county...");
    setOptions(regionSelect, data.regions, "Select region or district...");
    setOptions(citySelect, data.cities, "Select city...");
    setOptions(townSelect, data.towns, "Select town...");

    regionFields.forEach((field) => {
      if (!field) {
        return;
      }

      field.required = true;
      field.disabled = false;
    });
  };

  const handleBusinessType = () => {
    const selected = typeRadios.find((radio) => radio.checked)?.value;

    conditionalBlocks.forEach((block) => {
      const isMatch = block.id === `fields-${selected}`;
      block.style.display = isMatch ? "block" : "none";
      setFieldsetState(block, !isMatch);
    });

    if (commonFields) {
      const showCommon = Boolean(selected);
      commonFields.style.display = showCommon ? "block" : "none";
      setFieldsetState(commonFields, !showCommon);
    }

    if (budgetGroup) {
      const showBudget = selected !== "farmer" && selected !== "cooperative" && Boolean(selected);
      budgetGroup.style.display = showBudget ? "grid" : "none";
      const budgetSelect = budgetGroup.querySelector<HTMLSelectElement>("select");
      if (budgetSelect) {
        budgetSelect.disabled = !showBudget;
      }
    }
  };

  const wireProductGrades = () => {
    const pickers = Array.from(form.querySelectorAll<HTMLElement>(".product-picker"));
    pickers.forEach((picker) => {
      const productSelect = picker.querySelector<HTMLSelectElement>(".product-select");
      const gradeSelect = picker.querySelector<HTMLSelectElement>(".grade-select");
      const gradeWrap = gradeSelect?.closest<HTMLElement>(".form-group");

      if (!productSelect || !gradeSelect || !gradeWrap) {
        return;
      }

      const updateGrade = () => {
        const options = gradeOptions[productSelect.value] || [];
        const hasOptions = options.length > 0;
        gradeWrap.style.display = hasOptions ? "grid" : "none";
        gradeSelect.disabled = !hasOptions;
        gradeSelect.required = false;
        gradeSelect.innerHTML = `<option value="">Select grade...</option>${options
          .map((item) => `<option value="${item.toLowerCase().replace(/\s+/g, "-")}">${item}</option>`)
          .join("")}`;
      };

      productSelect.addEventListener("change", updateGrade);
      updateGrade();
    });
  };

  const setStatus = (message: string, tone: "idle" | "ok" | "error" = "idle") => {
    if (!statusEl) {
      return;
    }

    statusEl.textContent = message;
    statusEl.classList.remove("is-ok", "is-error");

    if (tone === "ok") {
      statusEl.classList.add("is-ok");
    }

    if (tone === "error") {
      statusEl.classList.add("is-error");
    }
  };

  const loadRecaptcha = async (): Promise<void> => {
    if (!recaptchaHost) {
      return;
    }

    const existingApi = window.grecaptcha as RecaptchaApi | undefined;

    if (existingApi) {
      recaptchaWidgetId = existingApi.render(recaptchaHost, {
        sitekey: recaptchaSiteKey,
        theme: "light"
      });
      return;
    }

    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
      document.head.appendChild(script);
    });

    const loadedApi = window.grecaptcha as RecaptchaApi | undefined;

    if (!loadedApi) {
      throw new Error("reCAPTCHA is unavailable");
    }

    recaptchaWidgetId = loadedApi.render(recaptchaHost, {
      sitekey: recaptchaSiteKey,
      theme: "light"
    });
  };

  country?.addEventListener("change", handleCountry);
  typeRadios.forEach((radio) => radio.addEventListener("change", handleBusinessType));

  wireProductGrades();
  handleCountry();
  handleBusinessType();
  setStatus("");

  void loadRecaptcha().catch(() => {
    setStatus("Could not load reCAPTCHA. Please refresh and try again.", "error");
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const recaptchaApi = window.grecaptcha as RecaptchaApi | undefined;

    if (!recaptchaApi || recaptchaWidgetId === null) {
      setStatus("reCAPTCHA is still loading. Please wait a moment and try again.", "error");
      return;
    }

    const recaptchaToken = recaptchaApi.getResponse(recaptchaWidgetId);

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA challenge.", "error");
      return;
    }

    const fd = new FormData(form);
    const fields: Record<string, string> = {};

    fd.forEach((value, key) => {
      const text = String(value).trim();
      if (text) {
        fields[key] = text;
      }
    });

    submitBtn?.setAttribute("disabled", "true");
    if (submitBtn) {
      submitBtn.textContent = "Sending...";
    }
    setStatus("Sending your enquiry...");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields,
          recaptchaToken,
          source: window.location.href
        })
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your enquiry. Please try again.");
      }

      setStatus("Thanks. Your enquiry was sent successfully. A confirmation email is on its way.", "ok");
      form.reset();
      handleBusinessType();
      handleCountry();
      recaptchaApi.reset(recaptchaWidgetId);
    } catch (error) {
      const message = error instanceof Error ? error.message : "We could not send your enquiry. Please try again.";
      setStatus(message, "error");
    } finally {
      submitBtn?.removeAttribute("disabled");
      if (submitBtn) {
        submitBtn.textContent = "Send Enquiry";
      }
    }
  });
}

function shouldRenderCookieBanner(): boolean {
  try {
    const consent = window.localStorage.getItem("triport_cookie_choice");
    return !consent;
  } catch {
    return true;
  }
}

function renderCookieBanner(): string {
  return `
    <div class="cookie-overlay" id="cookieOverlay" role="dialog" aria-modal="true" aria-label="Cookie settings">
      <article class="cookie-card">
        <button class="cookie-close" id="cookieClose" aria-label="Close cookie settings">×</button>
        <span class="cookie-eyebrow">Privacy</span>
        <h3>Cookie Settings</h3>
        <p>We use cookies and similar technologies to improve site performance, personalize content, and better understand traffic. Choose what works for you.</p>
        <div class="cookie-actions">
          <button class="cookie-btn cookie-preferences" id="cookiePreferences" type="button">Preferences</button>
          <button class="cookie-btn cookie-accept" id="cookieAccept" type="button">Accept All</button>
        </div>
      </article>
    </div>
  `;
}

function wireCookieBanner(): void {
  const overlay = document.getElementById("cookieOverlay");
  const close = document.getElementById("cookieClose");
  const accept = document.getElementById("cookieAccept");
  const preferences = document.getElementById("cookiePreferences");

  if (!overlay || !close || !accept || !preferences) {
    return;
  }

  const dismiss = (choice: "accepted" | "preferences" | "dismissed") => {
    try {
      window.localStorage.setItem("triport_cookie_choice", choice);
    } catch {
      // Ignore storage restrictions and still dismiss the modal.
    }

    overlay.classList.add("is-hidden");
    window.setTimeout(() => overlay.remove(), 260);
  };

  close.addEventListener("click", () => dismiss("dismissed"));
  accept.addEventListener("click", () => dismiss("accepted"));
  preferences.addEventListener("click", () => dismiss("preferences"));
}

function wireTeamModal(): void {
  const overlay = document.getElementById("teamModal");
  const closeBtn = document.getElementById("teamModalClose");
  const dataEl = document.getElementById("teamData");

  if (!overlay || !closeBtn || !dataEl) return;

  // Move modal to document.body so no ancestor can clip it
  document.body.appendChild(overlay);

  let members: { slug: string; name: string; role: string; qualifications: string; image: string; bio: string; responsibilities: string[]; quote: string }[] = [];
  try {
    members = JSON.parse(dataEl.textContent || "[]");
  } catch {
    return;
  }

  const photoEl = document.getElementById("teamModalPhoto") as HTMLImageElement | null;
  const nameEl = document.getElementById("teamModalName");
  const roleEl = document.getElementById("teamModalRole");
  const qualsEl = document.getElementById("teamModalQuals");
  const bodyEl = document.getElementById("teamModalBody");
  const respEl = document.getElementById("teamModalResponsibilities");
  const quoteEl = document.getElementById("teamModalQuote");

  if (!photoEl || !nameEl || !roleEl || !qualsEl || !bodyEl || !respEl || !quoteEl) return;

  const openModal = (index: number) => {
    const m = members[index];
    if (!m) return;

    photoEl.src = m.image;
    photoEl.alt = m.name;
    nameEl.textContent = m.name;
    roleEl.textContent = m.role;
    qualsEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;flex-shrink:0"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> ${m.qualifications}`;
    bodyEl.innerHTML = m.bio.split("\n\n").map(p => `<p>${p}</p>`).join("");
    respEl.innerHTML = m.responsibilities.map(r => `<li>${r}</li>`).join("");
    quoteEl.textContent = m.quote;

    history.replaceState(null, "", `#team-${m.slug}`);
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    history.replaceState(null, "", window.location.pathname);
  };

  document.querySelectorAll<HTMLButtonElement>(".team-link[data-team-index]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = parseInt(btn.dataset.teamIndex || "0", 10);
      openModal(idx);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
  });

  // Auto-open if the URL hash matches a team member on page load
  const hash = window.location.hash; // e.g. "#team-micah"
  if (hash.startsWith("#team-")) {
    const slug = hash.slice(6);
    const idx = members.findIndex(m => m.slug === slug);
    if (idx !== -1) {
      // Modal is position:fixed so no scroll needed — open immediately
      openModal(idx);
    }
  }

  // Auto-open if the URL path matches /team-:slug (static team pages)
  const pathMatch = window.location.pathname.match(/^\/team-([^/]+)\/?$/);
  if (pathMatch) {
    const slug = pathMatch[1];
    const idx = members.findIndex(m => m.slug === slug);
    if (idx !== -1) {
      openModal(idx);

      // Update meta tags so search engines index this profile
      const m = members[idx];
      const title = `${m.name} – ${m.role} | Triport Agro International Limited`;
      const desc = m.quote;
      const url = `https://triportagro.com/team-${m.slug}`;
      const img = `https://triportagro.com${m.image}`;

      document.title = title;

      const setMeta = (attr: string, key: string, content: string) => {
        let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
        if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
        el.setAttribute("content", content);
      };

      setMeta("name", "description", desc);
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", desc);
      setMeta("property", "og:url", url);
      setMeta("property", "og:image", img);
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", desc);
      setMeta("name", "twitter:image", img);

      let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (canonical) canonical.href = url;
    }
  }
}

function wireScrollShadow(): void {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function wireRevealAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function wireNumberAnimations(): void {
  const counters = Array.from(
    document.querySelectorAll<HTMLElement>(".hero-kpi strong, .proof-item strong, .metrics strong")
  );

  if (!counters.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const animateCounter = (el: HTMLElement, order: number) => {
    if (el.dataset.counted === "1") {
      return;
    }

    const raw = (el.textContent || "").trim();
    const match = raw.match(/\d[\d,]*(?:\.\d+)?/);

    if (!match) {
      return;
    }

    const cleanMatch = match[0].replace(/,/g, "");
    const numeric = Number(cleanMatch);

    if (!Number.isFinite(numeric) || numeric <= 0) {
      return;
    }

    const hasDecimal = cleanMatch.includes(".");
    const decimalPlaces = hasDecimal ? (cleanMatch.split(".")[1]?.length ?? 0) : 0;
    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: hasDecimal ? decimalPlaces : 0,
      maximumFractionDigits: hasDecimal ? decimalPlaces : 0
    });

    const startIdx = match.index ?? 0;
    const endIdx = startIdx + match[0].length;
    const prefix = raw.slice(0, startIdx);
    const suffix = raw.slice(endIdx);
    const duration = window.innerWidth <= 780 ? 1400 : 1100;

    el.dataset.counted = "1";

    window.setTimeout(() => {
      const startedAt = performance.now();
      el.classList.add("number-animating");

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = hasDecimal
          ? Number((numeric * eased).toFixed(decimalPlaces))
          : Math.round(numeric * eased);

        el.textContent = `${prefix}${formatter.format(value)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${prefix}${formatter.format(numeric)}${suffix}`;
          el.classList.remove("number-animating");
          el.classList.add("number-revealed");
        }
      };

      requestAnimationFrame(tick);
    }, order * 100);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const order = counters.indexOf(el);
          animateCounter(el, Math.max(0, order));
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: window.innerWidth <= 780 ? 0.2 : 0.45,
      rootMargin: window.innerWidth <= 780 ? "0px 0px -8%" : "0px"
    }
  );

  counters.forEach((el) => observer.observe(el));
}

function wireMobileMicroAnimations(): void {
  if (window.innerWidth > 780) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const animated = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".hero .btn, .hero-kpi, .product-card, .step-card, .testimonial-card, .about-value-card, .faq-item, .quote-step-card"
    )
  );

  if (!animated.length) {
    return;
  }

  document.body.classList.add("mobile-motion-ready");

  animated.forEach((el, index) => {
    el.style.setProperty("--mobile-stagger", `${Math.min(index, 10) * 55}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("mobile-in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10%" }
  );

  animated.forEach((el) => observer.observe(el));
}
