/* ==========================================================================
   A.A. Mudanya & Co. Advocates — site behaviour
   Vanilla JS, no build step, no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- small icon set (inline SVG paths, currentColor) ---------- */
  const ICONS = {
    gavel: '<path d="M14.5 12.5l-8 8M17.5 2.5l4 4-3 3-4-4 3-3zM11.5 8.5l6 6-3 3-6-6 3-3zM3 21h9" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    home: '<path d="M3 11l9-8 9 8M5 10v10h14V10" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    briefcase: '<rect x="2.5" y="7.5" width="19" height="12" rx="1.5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M8 7.5V5.5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="1.8" fill="none"/>',
    users: '<circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M2.5 20c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6M16 8.3a3 3 0 110 5.9M17.5 14.4c2.6.5 4.3 2.2 4.8 5.1" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    family: '<circle cx="7" cy="6.5" r="2.5" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="17" cy="6.5" r="2.5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M2 20c.4-3.2 2.3-5 5-5s4.6 1.8 5 5M12 20c.4-3.2 2.3-5 5-5s4.6 1.8 5 5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    document: '<path d="M6 2.5h8l4 4V21a1 1 0 01-1 1H6a1 1 0 01-1-1V3.5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M14 2.5V7h4M8 12h8M8 16h8M8 8h3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
    coins: '<ellipse cx="8" cy="7" rx="5.5" ry="3" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M2.5 7v4c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3V7M2.5 11v4c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M13.5 9.3c2.9.2 5 1.4 5 2.8s-2.5 2.7-5.5 2.7c-.9 0-1.8-.1-2.5-.3M13.5 14.8c2.9.2 5 1.4 5 2.8s-2.5 2.7-5.5 2.7c-1.7 0-3.2-.4-4.2-1" stroke="currentColor" stroke-width="1.8" fill="none"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 2a6.5 6.5 0 00-3.8 11.8c.6.4 1 1.1 1 1.9V16h5.6v-.3c0-.8.4-1.5 1-1.9A6.5 6.5 0 0012 2z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    handshake: '<path d="M2 12l4.5-4.5a2 2 0 012.8 0L11 9M22 12l-4.5-4.5a2 2 0 00-2.8 0L13 9M8 13l2.3 2.3a1.6 1.6 0 002.3-2.3L11 11M16 13l-2.3 2.3a1.6 1.6 0 01-2.3-2.3" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    experience: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    clients: '<circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.8" fill="none"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M2.5 20c.5-3.4 2.8-5.3 6.5-5.3s6 1.9 6.5 5.3M15.8 15c2.5.3 4.3 1.8 4.7 4.6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    solutions: '<path d="M12 3a6.5 6.5 0 00-3.8 11.8c.6.4 1 1.1 1 1.9V17h5.6v-.3c0-.8.4-1.5 1-1.9A6.5 6.5 0 0012 3z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M9.5 20.5h5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M9 8.5l2 2 4-4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    integrity: '<path d="M12 2l8 3.5v5c0 5-3.4 8.7-8 10.5-4.6-1.8-8-5.5-8-10.5v-5L12 2z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><path d="M9 12l2.2 2.2L15.5 9.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    location: '<path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8" fill="none"/>',
    pin: '<path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4" stroke="currentColor" stroke-width="1.8" fill="none"/>',
    phone: '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 011.12 4.18 2 2 0 013.1 2h3a2 2 0 012 1.72c.12.9.35 1.79.68 2.63a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.45-1.25a2 2 0 012.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  };

  const svg = (name, size = 24) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  function buildPracticeUrl(areaId) {
    return `practice.html?id=${encodeURIComponent(areaId)}`;
  }

  function buildPracticeContactUrl(areaTitle) {
    return `index.html?practice=${encodeURIComponent(areaTitle)}#contact-form`;
  }

  function getPracticeById(areaId) {
    return PRACTICE_AREAS.find((item) => item.id === areaId) || PRACTICE_AREAS[0];
  }

  function getPracticeGallery(area) {
    const galleryById = {
      family: [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
      ],
      litigation: [
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
      ],
      conveyancing: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
      ],
      corporate: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
      ],
      employment: [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
      ],
      succession: [
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      ],
      "debt-recovery": [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
      ],
      ip: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
      ],
      arbitration: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
      ]
    };

    const gallery = galleryById[area.id] || [area.image, area.image];
    return gallery.filter(Boolean).slice(0, 3);
  }

  /* ---------- render: practice area cards ---------- */
  function renderPracticeAreas() {
    const grid = document.getElementById("practiceGrid");
    if (!grid) return;
    grid.innerHTML = PRACTICE_AREAS.map(
      (area, i) => `
      <article class="practice-card reveal" id="${area.id}" data-practice-id="${area.id}">
        <div class="practice-card-visual">
          <img src="${area.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'}" alt="${area.title}" loading="lazy">
        </div>
        <div class="practice-card-body">
          <span class="practice-index">${String(i + 1).padStart(2, "0")}</span>
          <div class="practice-icon">${svg(area.icon, 26)}</div>
          <h3>${area.title}</h3>
          <p>${area.summary || area.text || ''}</p>
          <a class="learn-more" href="${buildPracticeUrl(area.id)}" data-practice-id="${area.id}" data-practice="${area.title}">
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </article>`
    ).join("");
  }

  function initChatbot() {
    const toggle = document.getElementById("chatbotToggle");
    const panel = document.getElementById("chatbotPanel");
    const close = document.getElementById("chatbotClose");
    const form = document.getElementById("chatbotForm");
    const input = document.getElementById("chatbotInput");
    const messages = document.getElementById("chatbotMessages");
    if (!toggle || !panel || !form || !input || !messages) return;

    const addMessage = (text, sender = "bot") => {
      const bubble = document.createElement("div");
      bubble.className = `chatbot-message ${sender}`;
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    };

    const botReply = (message) => {
      const text = message.toLowerCase();
      if (!text.trim()) return "Please tell us a little more about your matter.";
      if (text.includes("hello") || text.includes("hi")) return "Hello! We are here to help with your legal matter. How can our team assist you today?";
      if (text.includes("consult") || text.includes("appointment") || text.includes("book")) return "You can book a consultation with our advocates by calling +254 720 847 047 or sending your details through the contact form on this site.";
      if (text.includes("land") || text.includes("property") || text.includes("title") || text.includes("lease")) return "That sounds like a conveyancing and real estate matter. We can assist with title review, land transfers, lease agreements, and due diligence.";
      if (text.includes("family") || text.includes("divorce") || text.includes("custody") || text.includes("children")) return "We can assist with family law matters such as divorce, maintenance, custody, and mediation. We handle these matters with care and discretion.";
      if (text.includes("business") || text.includes("company") || text.includes("contract") || text.includes("commercial")) return "Our team advises on corporate and commercial law, including contracts, company governance, compliance, and business transactions.";
      if (text.includes("court") || text.includes("litigation") || text.includes("dispute")) return "We can support you with dispute resolution, pleadings, negotiations, and court representation across Kenyan courts and tribunals.";
      if (text.includes("employment") || text.includes("labour") || text.includes("termination") || text.includes("redundancy")) return "Employment matters such as contracts, disciplinary issues, redundancy, and unfair termination can be reviewed and managed by our team.";
      if (text.includes("estate") || text.includes("succession") || text.includes("probate") || text.includes("will")) return "Succession and probate matters include wills, estate administration, inheritance disputes, and probate applications.";
      if (text.includes("thank")) return "You are welcome. We are happy to help.";
      return "Our legal team can assist with that. Please share a few details, and we will guide you to the right practice area or appointment.";
    };

    addMessage("Hello and welcome to A.A. Mudanya & Co. Advocates. How can we help you today?");

    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) input.focus();
    });

    if (close) {
      close.addEventListener("click", () => {
        panel.hidden = true;
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      addMessage(value, "user");
      input.value = "";
      window.setTimeout(() => addMessage(botReply(value)), 250);
    });

    document.querySelectorAll(".chatbot-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const text = chip.dataset.message || "";
        if (!text) return;
        addMessage(text, "user");
        window.setTimeout(() => addMessage(botReply(text)), 250);
      });
    });
  }

  function renderPracticeDetail(areaId) {
    const detailRoot = document.getElementById("practiceDetailPage");
    if (!detailRoot) return;

    const area = getPracticeById(areaId);
    const gallery = getPracticeGallery(area);
    const detailStats = [
      { label: "What we handle", value: (area.bullets && area.bullets[0]) || '' },
      { label: "How we assist", value: area.focus || '' },
      { label: "Expected outcome", value: area.details || area.text || '' }
    ];

    detailRoot.innerHTML = `
      <div class="container practice-detail-wrap">
        <div class="practice-detail-back">
          <a href="#practice-areas">← Back to Practice Areas</a>
        </div>
        <div class="practice-detail-grid">
          <div class="practice-detail-copy">
            <p class="section-tag">Practice Area</p>
            <h2>${area.title}</h2>
            <p class="practice-detail-summary">${area.summary || area.text || ''}</p>
            <p class="practice-detail-focus">${area.focus || ''}</p>
            <ul class="practice-detail-list">
              ${(area.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="practice-detail-actions">
              <a href="tel:+254720847047" class="btn btn-primary">Speak to an Advocate</a>
              <a href="${buildPracticeContactUrl(area.title)}" class="btn btn-outline-dark practice-book" data-practice="${area.title}">Book an Appointment</a>
            </div>
          </div>
          <div class="practice-detail-visual">
            <img src="${area.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'}" alt="${area.title} legal illustration" loading="lazy">
          </div>
        </div>
        <div class="practice-detail-gallery">
          ${gallery.map((image) => `
            <div class="practice-detail-gallery-item">
              <img src="${image}" alt="${area.title} legal services" loading="lazy">
            </div>
          `).join("")}
        </div>
        <div class="practice-detail-panel">
          <h3>How We Help</h3>
          <p>${area.details || area.text || ''}</p>
          <div class="practice-detail-metrics">
            ${detailStats.map((stat) => `
              <div class="practice-detail-stat">
                <span>${stat.label}</span>
                <strong>${stat.value}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    detailRoot.classList.add("active");
    detailRoot.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderPracticeDetailPage() {
    const root = document.getElementById("practicePage");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const areaId = params.get("id") || PRACTICE_AREAS[0].id;
    const area = getPracticeById(areaId);
    const gallery = getPracticeGallery(area);
    const detailStats = [
      { label: "What we handle", value: (area.bullets && area.bullets[0]) || '' },
      { label: "How we assist", value: area.focus || '' },
      { label: "Expected outcome", value: area.details || area.text || '' }
    ];

    root.innerHTML = `
      <section class="practice-detail-page practice-detail-page--full active">
        <div class="container practice-detail-wrap">
          <div class="practice-detail-back">
            <a href="index.html#practice-areas">← Back to Practice Areas</a>
          </div>
          <div class="practice-detail-grid">
            <div class="practice-detail-copy">
              <p class="section-tag">Practice Area</p>
              <h2>${area.title}</h2>
              <p class="practice-detail-summary">${area.summary || area.text || ''}</p>
              <p class="practice-detail-focus">${area.focus || ''}</p>
              <ul class="practice-detail-list">
                ${(area.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
              <div class="practice-detail-actions">
                <a href="tel:+254720847047" class="btn btn-primary">Speak to an Advocate</a>
                <a href="${buildPracticeContactUrl(area.title)}" class="btn btn-outline-dark practice-book" data-practice="${area.title}">Book an Appointment</a>
              </div>
            </div>
            <div class="practice-detail-visual">
              <img src="${area.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'}" alt="${area.title} legal illustration" loading="lazy">
            </div>
          </div>
          <div class="practice-detail-gallery">
            ${gallery.map((image) => `
              <div class="practice-detail-gallery-item">
                <img src="${image}" alt="${area.title} legal services" loading="lazy">
              </div>
            `).join("")}
          </div>
          <div class="practice-detail-panel">
            <h3>How We Help</h3>
            <p>${area.details || area.text || ''}</p>
            <div class="practice-detail-metrics">
              ${detailStats.map((stat) => `
                <div class="practice-detail-stat">
                  <span>${stat.label}</span>
                  <strong>${stat.value}</strong>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>
    `;

    root.classList.add("active");
  }

  /* ---------- render: nav "Practice Areas" dropdown ---------- */
  function renderPracticeDropdown() {
    const menu = document.getElementById("practiceDropdown");
    if (!menu) return;
    menu.innerHTML = PRACTICE_AREAS.map(
      (area) => `<a href="${buildPracticeUrl(area.id)}" data-practice-id="${area.id}" data-practice="${area.title}">${area.title}</a>`
    ).join("");
  }

  /* ---------- render: footer practice-area list ---------- */
  function renderFooterPracticeAreas() {
    const list = document.querySelector("#footerPractice ul");
    if (!list) return;
    list.innerHTML = PRACTICE_AREAS.map(
      (area) => `<li><a href="${buildPracticeUrl(area.id)}" data-practice-id="${area.id}" data-practice="${area.title}">${area.title}</a></li>`
    ).join("");
  }

  /* ---------- render: contact-form practice-area select ---------- */
  function renderPracticeSelect() {
    const select = document.getElementById("subject");
    if (!select) return;
    select.innerHTML =
      `<option value="">Select a practice area</option>` +
      PRACTICE_AREAS.map((a) => `<option value="${a.title}">${a.title}</option>`).join("");
  }

  /* ---------- render: "Why Choose Us" grid ---------- */
  function renderWhyUs() {
    const grid = document.getElementById("whyGrid");
    if (!grid) return;
    grid.innerHTML = WHY_CHOOSE_US.map(
      (item) => `
      <div class="why-card reveal">
        <div class="why-icon">${svg(item.icon, 26)}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`
    ).join("");
  }

  /* ---------- render: hero stats strip ---------- */
  function renderHeroStats() {
    const wrap = document.getElementById("heroStats");
    if (!wrap || typeof STATS === "undefined") return;
    wrap.innerHTML = `<div class="container hero-stats-inner">` +
      STATS.map(
        (s) => `
        <div class="stat">
          <span class="stat-value">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>`
      ).join("") +
      `</div>`;
  }

  /* ---------- render: testimonials ---------- */
  function renderTestimonials() {
    const grid = document.getElementById("testimonialGrid");
    if (!grid || typeof TESTIMONIALS === "undefined") return;
    grid.innerHTML = TESTIMONIALS.map(
      (t) => `
      <figure class="testimonial-card reveal">
        <svg class="quote-mark" width="30" height="24" viewBox="0 0 30 24" aria-hidden="true"><path d="M0 24V13.8C0 6.2 4.6 1.2 12.4 0l1.6 3.6c-4.6 1.4-7 4-7 8h6.6V24H0zm16.4 0V13.8c0-7.6 4.6-12.6 12.4-13.8L30.4 3.6c-4.6 1.4-7 4-7 8H30V24H16.4z" fill="currentColor"/></svg>
        <blockquote>${t.quote}</blockquote>
        <figcaption><strong>${t.name}</strong><span>${t.role}</span></figcaption>
      </figure>`
    ).join("");
  }

  /* ---------- scroll-reveal (single, restrained pattern) ---------- */
  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- render: offices list ---------- */
  function renderOffices() {
    const wrap = document.getElementById("officesList");
    if (!wrap) return;
    wrap.innerHTML = OFFICES.map(
      (office) => `
      <div class="office-card">
        <h3>${svg("pin", 18)} ${office.name}</h3>
        <p class="office-address">${office.address.join("<br>")}</p>
        <p class="office-phones">
          ${office.phones
            .map((p) => `<a href="tel:${p.replace(/\s+/g, "")}">${svg("phone", 14)} ${p}</a>`)
            .join("")}
        </p>
        <a class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener"
           href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}">
          Get Directions
        </a>
      </div>`
    ).join("");
  }

  /* ---------- header: scroll shadow + shrink ---------- */
  function initHeaderScroll() {
    const header = document.getElementById("header");
    if (!header) return;
    const toggle = () => header.classList.toggle("scrolled", window.scrollY > 12);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
  }

  /* ---------- mobile nav toggle ---------- */
  function initMobileNav() {
    const btn = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    if (!btn || !nav) return;

    const closeNav = () => {
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a, button").forEach((link) =>
      link.addEventListener("click", () => {
        closeNav();
      })
    );
  }

  /* ---------- practice-areas dropdown (desktop click + keyboard) ---------- */
  function initDropdown() {
    const wrapper = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".nav-dropdown-toggle");
    if (!wrapper || !toggle) return;

    const close = () => {
      wrapper.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) close();
    });
    wrapper.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => close());
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- active nav link on scroll (scrollspy) ---------- */
  function initScrollSpy() {
    const sections = ["home", "about", "practice-areas", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const links = document.querySelectorAll(".main-nav > a");
    if (!sections.length || !links.length) return;

    const map = { home: 0, about: 1, "practice-areas": 2, contact: 3 };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("active"));
            const idx = map[entry.target.id];
            if (links[idx]) links[idx].classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- back to top ---------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    const toggle = () => btn.classList.toggle("visible", window.scrollY > 500);
    toggle();
    window.addEventListener("scroll", toggle, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- practice detail page + contact-form prefill ---------- */
  function initLearnMoreLinks() {
    document.addEventListener("click", (e) => {
      const practiceLink = e.target.closest("[data-practice]");
      if (!practiceLink) return;

      const select = document.getElementById("subject");
      if (select) select.value = practiceLink.dataset.practice;
    });
  }

  /* ---------- appointment modal ---------- */
  function openAppointmentModal(practice) {
    const modal = document.getElementById("appointmentModal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "false");
    const hidden = document.getElementById("appointmentPractice");
    if (hidden) hidden.value = practice || "";
    const name = document.getElementById("apptName");
    if (name) name.focus();
  }

  function closeAppointmentModal() {
    const modal = document.getElementById("appointmentModal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    const form = document.getElementById("appointmentForm");
    if (form) form.reset();
  }

  function initAppointmentModal() {
    const modal = document.getElementById("appointmentModal");
    const form = document.getElementById("appointmentForm");
    if (!modal || !form) return;

    // open modal when any .practice-book link is clicked
    document.addEventListener("click", (e) => {
      const link = e.target.closest(".practice-book");
      if (!link) return;
      e.preventDefault();
      const practice = link.dataset.practice || link.getAttribute("data-practice") || "";
      openAppointmentModal(practice);
    });

    // close controls
    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeAppointmentModal);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal.querySelector(".modal-overlay")) closeAppointmentModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAppointmentModal();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const practice = form.practice.value || "General appointment";
      const name = form.fullName.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const datetime = form.datetime.value.trim();
      const message = form.message.value.trim();

      const subject = `Appointment request: ${practice}`;
      const bodyText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred: ${datetime}\n\nMessage:\n${message}`;
      const mailto = `mailto:${encodeURIComponent(FIRM.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      // open mail client to send appointment request (no backend configured)
      window.location.href = mailto;
      closeAppointmentModal();
    });
  }

  /* ---------- contact form validation (client-side only, no backend) ---------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    if (!form) return;

    const showError = (name, msg) => {
      const el = form.querySelector(`[data-error-for="${name}"]`);
      if (el) el.textContent = msg;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      ["fullName", "email", "message"].forEach((name) => showError(name, ""));

      const fullName = form.fullName.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (fullName.length < 2) {
        showError("fullName", "Please enter your full name.");
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("email", "Please enter a valid email address.");
        valid = false;
      }
      if (message.length < 10) {
        showError("message", "Please tell us a little more about your matter.");
        valid = false;
      }

      if (!valid) {
        status.textContent = "";
        return;
      }

      // No backend is wired up yet — this simply confirms receipt to the user
      // and resets the form. Wire this to your API / mail service as needed.
      status.textContent = `Thank you, ${fullName.split(" ")[0]}. Your message has been received — we will get back to you shortly.`;
      status.classList.add("success");
      form.reset();
    });
  }

  /* ---------- render: team grid ---------- */
  function renderTeam() {
    const grid = document.getElementById("teamGrid");
    if (!grid || typeof TEAM === "undefined") return;
    grid.innerHTML = TEAM.map(
      (member) => `
      <div class="team-card reveal">
        <div class="team-avatar" aria-hidden="true">${initials(member.name)}</div>
        <h3>${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p class="team-focus">${member.focus}</p>
      </div>`
    ).join("");
  }

  function initials(name) {
    return name
      .replace(/^Advocate,?\s*/i, "A")
      .split(" ")
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || "AA";
  }

  /* ---------- render: insights grid ---------- */
  function renderInsights() {
    const grid = document.getElementById("insightsGrid");
    if (!grid || typeof INSIGHTS === "undefined") return;
    grid.innerHTML = INSIGHTS.map(
      (post) => `
      <article class="insight-card reveal">
        <span class="insight-tag">${post.tag}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a class="learn-more" href="#contact-form">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </article>`
    ).join("");
  }

  /* ---------- footer newsletter (client-side only, no backend) ---------- */
  function initNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.newsletterEmail.value.trim();
      const status = document.getElementById("newsletterStatus");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.classList.remove("success");
        return;
      }
      status.textContent = "Thank you for subscribing.";
      status.classList.add("success");
      form.reset();
    });
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const isPracticePage = window.location.pathname.toLowerCase().endsWith("practice.html");

    if (isPracticePage) {
      renderPracticeDetailPage();
      renderPracticeDropdown();
      renderFooterPracticeAreas();
      initHeaderScroll();
      initMobileNav();
      initDropdown();
      initBackToTop();
      initLearnMoreLinks();
      initAppointmentModal();
      initScrollReveal();
      setYear();
      return;
    }

    renderPracticeAreas();
    renderPracticeDropdown();
    renderFooterPracticeAreas();
    renderPracticeSelect();
    renderWhyUs();
    renderOffices();
    renderHeroStats();
    renderTestimonials();
    renderTeam(); 
    renderInsights();
    initHeaderScroll();
    initMobileNav();
    initDropdown();
    initScrollSpy();
    initBackToTop();
    initLearnMoreLinks();
    initContactForm();
    initNewsletterForm();
    initChatbot();
    initScrollReveal();
    initAppointmentModal();
    setYear();

    const practiceParam = new URLSearchParams(window.location.search).get("practice");
    if (practiceParam) {
      const select = document.getElementById("subject");
      if (select) select.value = decodeURIComponent(practiceParam);
    }
  });
})();
