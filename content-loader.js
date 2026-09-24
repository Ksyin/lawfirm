/* ==========================================================================
   Content loader — pulls "Team" and "Insights" from the Firebase Realtime
   Database and syncs them into the site's existing TEAM / INSIGHTS arrays
   (data.js).

   Read-only on the public site: no auth, no writes, no admin UI. This file
   does not touch layout, markup or styling — it only replaces the content
   that script.js already renders into #teamGrid / #insightsGrid /
   #insightPage, using the exact same fields the admin panel (admin.js)
   saves under.

   If the database has no data yet, or the request fails (offline, blocked,
   etc.), the static content already in data.js is left untouched, so the
   site never breaks or shows an empty page.
   ========================================================================== */

(function () {
  "use strict";

  if (typeof fbDb === "undefined") return; // firebase-init.js didn't load — fail silently, static content stays

  function byOrder(a, b) {
    return (a.order || 0) - (b.order || 0);
  }

  function loadTeam() {
    return fbDb.ref("team").once("value").then((snap) => {
      if (!snap.exists() || typeof TEAM === "undefined") return;
      const items = [];
      snap.forEach((child) => { items.push(child.val()); });
      items.sort(byOrder);
      TEAM.length = 0;
      items.forEach((item) => TEAM.push(item));
    }).catch((err) => { console.error("content-loader: team fetch failed", err); });
  }

  function loadInsights() {
    return fbDb.ref("insights").once("value").then((snap) => {
      if (!snap.exists() || typeof INSIGHTS === "undefined") return;
      const items = [];
      snap.forEach((child) => { items.push(child.val()); });
      items.sort(byOrder);
      INSIGHTS.length = 0;
      items.forEach((item) => INSIGHTS.push(item));
    }).catch((err) => { console.error("content-loader: insights fetch failed", err); });
  }

  Promise.all([loadTeam(), loadInsights()]).then(() => {
    window.dispatchEvent(new Event("firebase-content-ready"));
  });
})();
