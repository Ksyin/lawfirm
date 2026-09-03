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

  function buildInsightUrl(insightId) {
    return `insight.html?id=${encodeURIComponent(insightId)}`;
  }

  function getInsightById(insightId) {
    return (typeof INSIGHTS !== "undefined" && INSIGHTS.find((item) => item.id === insightId)) || (INSIGHTS && INSIGHTS[0]);
  }

  function estimateReadMinutes(post) {
    const words = `${post.excerpt || ""} ${(post.body || []).join(" ")}`.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(2, Math.round(words / 180));
  }

  const INSIGHT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";

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

  /* ---------- chatbot knowledge base & reply engine ----------
     Built from the firm's own PRACTICE_AREAS / OFFICES / FIRM data
     (data.js) so the assistant's answers stay in sync with the rest
     of the site, and so replies read as informed rather than as a
     handful of hard-coded strings. Topic matching is done by scoring
     keyword hits per practice area rather than a first-match if-chain,
     so a message like "family business dispute" is weighed across
     topics instead of always resolving to whichever check happens to
     come first. */
  const CHAT_TOPIC_KEYWORDS = {
    litigation: ["court", "litigation", "dispute", "sue", "suing", "sued", "lawsuit", "tribunal", "hearing", "claim", "defendant", "plaintiff", "summons", "injunction"],
    conveyancing: ["land", "property", "title deed", "title", "lease", "plot", "conveyance", "real estate", "boundary", "survey", "subdivision", "transfer", "landlord", "tenant", "sale agreement"],
    corporate: ["business", "company", "contract", "commercial", "shareholder", "startup", "corporate", "partnership", "merger", "acquisition", "incorporate", "governance", "compliance", "agreement"],
    employment: ["employment", "labour", "labor", "termination", "redundancy", "fired", "dismissal", "workplace", "employee", "employer", "contract of service", "harassment", "disciplinary", "notice pay"],
    family: ["family", "divorce", "custody", "children", "marriage", "matrimonial", "separation", "maintenance", "alimony", "adoption", "guardianship", "spouse"],
    succession: ["estate", "succession", "probate", "will", "inheritance", "testament", "beneficiary", "executor", "letters of administration", "intestate", "deceased"],
    "debt-recovery": ["debt", "owe", "owed", "recovery", "unpaid", "loan", "creditor", "debtor", "default", "garnishee", "demand letter"],
    ip: ["trademark", "copyright", "patent", "intellectual property", "brand name", "logo", "infringement", "royalty"],
    arbitration: ["arbitration", "mediation", "adr", "settlement", "negotiate", "negotiation", "arbitrator", "mediator", "out of court"]
  };

  const CHAT_TOPICS = (typeof PRACTICE_AREAS !== "undefined" ? PRACTICE_AREAS : []).map((area) => ({
    id: area.id,
    title: area.title,
    summary: area.summary,
    focus: area.focus,
    details: area.details,
    bullets: area.bullets || [],
    keywords: CHAT_TOPIC_KEYWORDS[area.id] || []
  }));

  const lowerFirst = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const wordCount = (s) => s.trim().split(/\s+/).filter(Boolean).length;

  function detectChatTopic(lowerText) {
    let best = null;
    let bestScore = 0;
    CHAT_TOPICS.forEach((topic) => {
      let score = 0;
      topic.keywords.forEach((kw) => {
        if (lowerText.includes(kw)) score += kw.split(" ").length;
      });
      if (score > bestScore) {
        bestScore = score;
        best = topic;
      }
    });
    return best;
  }

  function extractName(rawText) {
    const match = rawText.match(/\b(?:my name is|i am|i'm|this is)\s+([A-Za-z][A-Za-z'-]{1,20})\b/i);
    if (!match) return null;
    const name = match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
    const remainder = rawText.replace(match[0], "").trim();
    return { name, isNameOnly: wordCount(remainder) === 0, fullMatch: match[0] };
  }

  function buildBotEngine() {
    const state = { name: null, topicsDiscussed: new Set(), lastTopic: null, fallbackStreak: 0, turns: 0 };

    const officesLine = () => {
      if (typeof OFFICES === "undefined" || !OFFICES.length) {
        return "Please call +254 720 847 047 for our office details.";
      }
      return OFFICES.map((o) => `our ${o.name} at ${o.address.join(", ")} (${o.phones.join(" / ")})`).join("; and ");
    };

    const areaTitleSample = (n) => {
      const titles = CHAT_TOPICS.map((t) => t.title);
      const shuffled = titles.slice().sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n).join(", ");
    };

    const topicReply = (topic) => {
      const alreadyDiscussed = state.topicsDiscussed.has(topic.id);
      state.topicsDiscussed.add(topic.id);
      state.lastTopic = topic.id;
      const namePrefix = state.name ? `${state.name}, ` : "";
      if (!alreadyDiscussed) {
        const opts = [
          `${namePrefix}${lowerFirst(`This falls within our ${topic.title} practice. ${topic.summary} We regularly assist with ${lowerFirst(topic.bullets[0] || "")} and ${lowerFirst(topic.bullets[1] || "matters of this nature")}.`)}`,
          `${namePrefix}${lowerFirst(`That is a matter for our ${topic.title} practice. ${topic.focus} ${topic.details}`)}`,
          `${namePrefix}${lowerFirst(`This relates to ${topic.title}. ${topic.details} We would be glad to review the specifics of your matter with you.`)}`
        ];
        return pick(opts);
      }
      const followUps = [
        `To advise you properly on this ${topic.title.toLowerCase()} matter, it would help to know a little more — for instance, what has already taken place and any documents involved.`,
        `Given the nature of this ${topic.title.toLowerCase()} matter, the most useful next step is a consultation with one of our advocates so the facts can be reviewed properly. Would you like us to arrange one?`,
        `We would need further detail to advise on this. In the meantime, a consultation would allow us to review your ${topic.title.toLowerCase()} matter in full.`
      ];
      return followUps[Math.min(state.turns, followUps.length - 1)];
    };

    const fallbackReply = () => {
      state.fallbackStreak += 1;
      if (state.fallbackStreak >= 3) {
        state.fallbackStreak = 0;
        return "This may be best addressed directly rather than over chat. Please call +254 720 847 047, or leave your details here — this conversation is already being shared with our team, and an advocate will follow up by email shortly.";
      }
      const opts = [
        `Could you kindly clarify the nature of your legal matter? For reference, we practice in areas including ${areaTitleSample(3)}, among others.`,
        `To direct your enquiry correctly, please indicate whether this concerns, for example, ${areaTitleSample(3)}, or another area entirely.`,
        `Could you briefly describe what has happened or what assistance you require, so we can direct this to the right member of our team?`
      ];
      return opts[state.fallbackStreak - 1] || opts[opts.length - 1];
    };

    return function botReply(rawMessage) {
      state.turns += 1;
      const text = rawMessage.trim();
      if (!text) return "Please provide a few further details regarding your matter.";
      const lower = text.toLowerCase();

      /* time-sensitive matters take priority over everything else */
      if (/\b(emergency|urgent|arrested|in custody|detained|warrant|police station)\b/.test(lower)) {
        return "This appears to be a time-sensitive matter. Please call us directly on +254 720 847 047 (Nairobi) or +254 722 907 020 (Oyugis) so we can assist without delay.";
      }

      const nameInfo = extractName(text);
      if (nameInfo) state.name = nameInfo.name;

      if (/\b(bye|goodbye|good bye|that('?s| is) all|no further)\b/.test(lower)) {
        state.fallbackStreak = 0;
        return pick([
          "Thank you for contacting A.A. Mudanya & Co. Advocates. We wish you well.",
          "Thank you for your time today. A member of our team will follow up by email shortly should further input be required."
        ]);
      }

      if (/\bthank/.test(lower)) {
        state.fallbackStreak = 0;
        return pick([
          "You are welcome. Should any further questions arise, we remain available.",
          "You are welcome. Please do not hesitate to reach out again should you need further assistance.",
          "Our pleasure. We trust this has been helpful."
        ]);
      }

      if (nameInfo && nameInfo.isNameOnly) {
        state.fallbackStreak = 0;
        return `Thank you, ${nameInfo.name}. Please describe the legal matter you wish to raise, and we will direct you to the right member of our team.`;
      }

      if (/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(lower) && wordCount(lower) <= 5) {
        state.fallbackStreak = 0;
        return state.name
          ? `Good day, ${state.name}. How may we assist you today?`
          : pick([
              "Good day. How may we assist you today?",
              "Hello. Please let us know the nature of your enquiry so we can direct you appropriately.",
              "Good day, thank you for reaching out. What matter can we assist you with?"
            ]);
      }

      if (/\b(who are you|are you (a )?(bot|robot|ai|human)|are you an? advocate|are you a lawyer)\b/.test(lower)) {
        return "This is the virtual enquiry assistant for A.A. Mudanya & Co. Advocates. I can share general information about our practice and direct your enquiry, though I am not an advocate and nothing here constitutes legal advice. For advice specific to your matter, we will arrange a consultation with one of our advocates.";
      }

      if (/\b(hour|open|opening time|closing time|what time)\b/.test(lower)) {
        return "Our offices are open Monday to Friday, 8:30 a.m. to 5:00 p.m. For urgent matters outside these hours, please call +254 720 847 047.";
      }

      if (/\b(office|address|located|location|where are you|directions|visit)\b/.test(lower)) {
        return `We have ${officesLine()}.`;
      }

      if (/\b(fee|fees|cost|costs|price|pricing|charge|charges|how much|pay)\b/.test(lower)) {
        return "Our fees depend on the nature and complexity of each matter, and are set out transparently during an initial consultation. To arrange one, please call +254 720 847 047 or share your details here and a member of our team will follow up.";
      }

      if (/\b(consult|consultation|appointment|book|meet|meeting)\b/.test(lower)) {
        state.fallbackStreak = 0;
        return "A consultation may be arranged by calling +254 720 847 047 or by submitting your details through the contact form on this site. Our team will confirm a suitable time.";
      }

      const topic = detectChatTopic(lower);
      if (topic) {
        state.fallbackStreak = 0;
        return topicReply(topic);
      }

      return fallbackReply();
    };
  }

  function initChatbot() {
    const toggle = document.getElementById("chatbotToggle");
    const panel = document.getElementById("chatbotPanel");
    const close = document.getElementById("chatbotClose");
    const form = document.getElementById("chatbotForm");
    const input = document.getElementById("chatbotInput");
    const messages = document.getElementById("chatbotMessages");
    const banner = document.getElementById("chatbotBanner");
    const gate = document.getElementById("chatbotGate");
    const gateForm = document.getElementById("chatbotGateForm");
    const gateEmail = document.getElementById("chatbotGateEmail");
    const gateError = document.getElementById("chatbotGateError");
    const syncStatus = document.getElementById("chatbotSyncStatus");
    if (!toggle || !panel || !form || !input || !messages || !gateForm || !gateEmail) return;

    const CHATBOT_ENDPOINT = "https://formsubmit.co/ajax/mudanyalawtech.advocates@gmail.com";
    const botReply = buildBotEngine();
    let visitorEmail = "";
    let sendTimer = null;

    try {
      visitorEmail = window.sessionStorage.getItem("chatbotVisitorEmail") || "";
    } catch (err) { /* sessionStorage unavailable — proceed without persistence */ }

    /* Keep the chatbot panel from ever rising above the header/utility
       bar: measure the live gap between the header's bottom edge and
       the chat launcher, and cap the panel's height to fit inside it. */
    const positionChatbotPanel = () => {
      const header = document.getElementById("header");
      if (!header) return;
      const headerBottom = header.getBoundingClientRect().bottom;
      const fabTop = toggle.getBoundingClientRect().top;
      const gapAboveFab = 14; /* matches .chatbot-panel bottom (72px) minus fab height (58px) */
      const panelBottomY = fabTop - gapAboveFab;
      const topMargin = 16;
      const available = panelBottomY - headerBottom - topMargin;
      const maxHeight = Math.max(240, Math.min(available, 560));
      panel.style.maxHeight = `${maxHeight}px`;
    };

    positionChatbotPanel();
    window.addEventListener("resize", positionChatbotPanel);
    window.addEventListener("orientationchange", positionChatbotPanel);

    const addMessage = (text, sender = "bot") => {
      const bubble = document.createElement("div");
      bubble.className = `chatbot-message ${sender}`;
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    };

    /* ---------- typing indicator ---------- */
    const showTyping = () => {
      const bubble = document.createElement("div");
      bubble.className = "chatbot-message bot typing";
      bubble.innerHTML = "<span></span><span></span><span></span>";
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
      return bubble;
    };

    const replyWithDelay = (userText) => {
      const typingBubble = showTyping();
      const delay = 550 + Math.min(userText.length * 12, 900) + Math.random() * 300;
      window.setTimeout(() => {
        typingBubble.remove();
        addMessage(botReply(userText));
        scheduleTranscriptSend();
      }, delay);
    };

    /* ---------- background forwarding of the conversation ---------- */
    const showSyncStatus = (text) => {
      if (!syncStatus) return;
      syncStatus.textContent = text;
      syncStatus.classList.add("is-visible");
      window.clearTimeout(showSyncStatus._t);
      showSyncStatus._t = window.setTimeout(() => syncStatus.classList.remove("is-visible"), 2600);
    };

    const buildTranscript = () =>
      Array.from(messages.querySelectorAll(".chatbot-message"))
        .filter((el) => !el.classList.contains("typing"))
        .map((el) => `${el.classList.contains("user") ? "Client" : "Firm"}: ${el.textContent}`)
        .join("\n");

    const sendTranscript = (subject) => {
      if (!visitorEmail) return;
      fetch(CHATBOT_ENDPOINT, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          email: visitorEmail,
          message: buildTranscript()
        })
      })
        .then((res) => { if (!res.ok) throw new Error("Request failed"); })
        .then(() => showSyncStatus("Sent to our team ✓"))
        .catch(() => showSyncStatus("Will retry sending…"));
    };

    const scheduleTranscriptSend = () => {
      if (!visitorEmail) return;
      window.clearTimeout(sendTimer);
      sendTimer = window.setTimeout(() => sendTranscript("Updated chatbot enquiry"), 1500);
    };

    /* ---------- email gate ---------- */
    const startChat = (alreadyGreeted) => {
      panel.classList.add("email-captured");
      if (!alreadyGreeted) {
        addMessage("Good day and thank you for contacting A.A. Mudanya & Co. Advocates. Please note this chat is for general enquiries only and does not constitute legal advice. How may we assist you?");
        sendTranscript("New chatbot session started");
      }
      window.setTimeout(() => input.focus(), 50);
    };

    if (visitorEmail) {
      startChat(false);
    }

    gateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = gateEmail.value.trim();
      gateEmail.classList.add("touched");
      if (!value || !gateEmail.checkValidity()) {
        if (gateError) gateError.textContent = "Please enter a valid email address to continue.";
        gateEmail.focus();
        return;
      }
      if (gateError) gateError.textContent = "";
      visitorEmail = value;
      try { window.sessionStorage.setItem("chatbotVisitorEmail", value); } catch (err) { /* ignore */ }
      startChat(false);
    });

    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) {
        positionChatbotPanel();
        (visitorEmail ? input : gateEmail).focus();
      }
      if (banner) banner.classList.toggle("is-hidden", !panel.hidden);
    });

    if (close) {
      close.addEventListener("click", () => {
        panel.hidden = true;
        if (banner) banner.classList.remove("is-hidden");
      });
    }

    if (banner) {
      banner.addEventListener("click", () => {
        panel.hidden = false;
        positionChatbotPanel();
        (visitorEmail ? input : gateEmail).focus();
        banner.classList.add("is-hidden");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      addMessage(value, "user");
      input.value = "";
      scheduleTranscriptSend();
      replyWithDelay(value);
    });

    document.querySelectorAll(".chatbot-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const text = chip.dataset.message || "";
        if (!text) return;
        addMessage(text, "user");
        scheduleTranscriptSend();
        replyWithDelay(text);
      });
    });

    /* best-effort final send if the visitor leaves mid-conversation */
    window.addEventListener("pagehide", () => {
      if (visitorEmail && sendTimer) sendTranscript("Chatbot enquiry (session ended)");
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

  function renderInsightDetailPage() {
    const root = document.getElementById("insightPage");
    if (!root || typeof INSIGHTS === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const insightId = params.get("id") || INSIGHTS[0].id;
    const post = getInsightById(insightId);
    if (!post) return;

    const others = INSIGHTS.filter((item) => item.id !== post.id).slice(0, 3);
    const mins = estimateReadMinutes(post);
    const heroImage = post.image || INSIGHT_FALLBACK_IMAGE;
    const shareText = encodeURIComponent(`${post.title} — A.A. Mudanya & Co. Advocates`);

    root.innerHTML = `
      <div class="insight-hero" style="background-image:url('${heroImage}')">
        <div class="insight-hero-overlay"></div>
        <div class="container insight-hero-inner">
          <a class="insight-hero-back" href="index.html#insights">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Insights
          </a>
          <span class="insight-tag insight-tag-hero">${post.tag}</span>
          <h1>${post.title}</h1>
          <div class="insight-hero-meta">
            <span>A.A. Mudanya &amp; Co. Advocates</span>
            <span class="dot">•</span>
            <span>${mins} min read</span>
          </div>
        </div>
      </div>

      <div class="container insight-body-wrap">
        <div class="insight-body-grid">
          <article class="insight-article">
            <p class="practice-detail-summary">${post.excerpt}</p>
            ${(post.body || []).map((para) => `<p>${para}</p>`).join("")}

            <div class="insight-share">
              <span>Share this insight</span>
              <a href="https://wa.me/?text=${shareText}%20-%20${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.22.6 4.3 1.65 6.1L4 29l8.06-1.63A11.94 11.94 0 0016.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3z"/></svg>
              </a>
              <a href="mailto:?subject=${shareText}&body=${encodeURIComponent(window.location.href)}" aria-label="Share by email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </a>
            </div>

            <div class="practice-detail-actions">
              <a href="tel:+254720847047" class="btn btn-primary">Speak to an Advocate</a>
              <a href="index.html#contact-form" class="btn btn-outline-dark">Contact Us</a>
            </div>
          </article>

          <aside class="insight-sidebar">
            <div class="practice-detail-panel insight-cta-panel">
              <h3>Need advice on this?</h3>
              <p>Speak directly with our team about ${post.tag.toLowerCase()} matters — no obligation, no jargon.</p>
              <a class="btn btn-light btn-sm" href="tel:+254720847047">Call +254 720 847 047</a>
            </div>

            ${others.length ? `
            <div class="insight-related">
              <h3>More Insights</h3>
              <div class="insight-related-list">
                ${others.map((item) => `
                  <a class="insight-related-card" href="${buildInsightUrl(item.id)}">
                    <img src="${item.image || INSIGHT_FALLBACK_IMAGE}" alt="${item.title}" loading="lazy">
                    <div>
                      <span class="insight-tag-sm">${item.tag}</span>
                      <h4>${item.title}</h4>
                    </div>
                  </a>`).join("")}
              </div>
            </div>` : ""}
          </aside>
        </div>
      </div>
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
        <div class="team-avatar" aria-hidden="true">${
          member.image
            ? `<img src="${member.image}" alt="" loading="lazy">`
            : initials(member.name)
        }</div>
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
        <a class="insight-card-media" href="${buildInsightUrl(post.id)}" aria-label="${post.title}">
          <img src="${post.image || INSIGHT_FALLBACK_IMAGE}" alt="${post.title}" loading="lazy">
          <span class="insight-tag">${post.tag}</span>
        </a>
        <div class="insight-card-body">
          <span class="insight-meta">${estimateReadMinutes(post)} min read</span>
          <h3><a href="${buildInsightUrl(post.id)}">${post.title}</a></h3>
          <p>${post.excerpt}</p>
          <a class="learn-more" href="${buildInsightUrl(post.id)}">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
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
    const isInsightPage = window.location.pathname.toLowerCase().endsWith("insight.html");

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

    if (isInsightPage) {
      renderInsightDetailPage();
      renderPracticeDropdown();
      renderFooterPracticeAreas();
      initHeaderScroll();
      initMobileNav();
      initDropdown();
      initBackToTop();
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
