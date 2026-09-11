/* ==========================================================================
   Content loader — pulls admin-managed content from Firestore and overlays
   it onto the static content in data.js. If Firestore has no data yet for a
   section (or the request fails/times out), the static defaults from
   data.js are left untouched, so the site always renders something.

   This file must load AFTER firebase-init.js and data.js, and BEFORE
   script.js. script.js calls window.loadFirebaseContent() (if present)
   and awaits it before rendering the page.
   ========================================================================== */

(function () {
  "use strict";

  const TIMEOUT_MS = 4000;

  function withTimeout(promise, fallback) {
    return Promise.race([
      promise,
      new Promise((resolve) => setTimeout(() => resolve(fallback), TIMEOUT_MS))
    ]).catch(() => fallback);
  }

  function sortByOrder(a, b) {
    return (a.order ?? 0) - (b.order ?? 0);
  }

  function replaceArrayContents(targetArray, newItems) {
    targetArray.length = 0;
    newItems.forEach((item) => targetArray.push(item));
  }

  async function fetchCollection(name) {
    if (typeof fbDb === "undefined") return null;
    const snap = await withTimeout(fbDb.collection(name).get(), null);
    if (!snap || snap.empty) return null;
    return snap.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort(sortByOrder);
  }

  async function fetchDoc(path) {
    if (typeof fbDb === "undefined") return null;
    const snap = await withTimeout(fbDb.doc(path).get(), null);
    if (!snap || !snap.exists) return null;
    return snap.data();
  }

  window.loadFirebaseContent = async function loadFirebaseContent() {
    try {
      const [
        practiceAreas,
        team,
        insights,
        testimonials,
        stats,
        offices,
        whyChooseUs,
        firm
      ] = await Promise.all([
        fetchCollection("practiceAreas"),
        fetchCollection("team"),
        fetchCollection("insights"),
        fetchCollection("testimonials"),
        fetchCollection("stats"),
        fetchCollection("offices"),
        fetchCollection("whyChooseUs"),
        fetchDoc("settings/firm")
      ]);

      if (practiceAreas && typeof PRACTICE_AREAS !== "undefined") {
        replaceArrayContents(PRACTICE_AREAS, practiceAreas);
      }
      if (team && typeof TEAM !== "undefined") {
        replaceArrayContents(TEAM, team);
      }
      if (insights && typeof INSIGHTS !== "undefined") {
        replaceArrayContents(INSIGHTS, insights);
      }
      if (testimonials && typeof TESTIMONIALS !== "undefined") {
        replaceArrayContents(TESTIMONIALS, testimonials);
      }
      if (stats && typeof STATS !== "undefined") {
        replaceArrayContents(STATS, stats);
      }
      if (offices && typeof OFFICES !== "undefined") {
        replaceArrayContents(OFFICES, offices);
      }
      if (whyChooseUs && typeof WHY_CHOOSE_US !== "undefined") {
        replaceArrayContents(WHY_CHOOSE_US, whyChooseUs);
      }
      if (firm && typeof FIRM !== "undefined") {
        Object.assign(FIRM, firm);
      }
    } catch (err) {
      // Firestore unreachable or misconfigured — static content stays as-is.
      console.warn("Content load from Firebase skipped:", err);
    }
  };
})();
