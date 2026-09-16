/* Zhang Lab — rendering + light interaction. No dependencies. */

/* ============================================================
   VISITOR COUNTING  —  the only line you need to edit
   ------------------------------------------------------------
   1. Register the site at https://www.goatcounter.com
   2. In Settings, tick "Allow adding visitor counts on your
      website" (it is off by default).
   3. Put your code below, e.g. "zhanglab" if your dashboard is
      zhanglab.goatcounter.com
   Leave it "" and nothing loads — no requests, no broken counter.
   ============================================================ */
var GOATCOUNTER_CODE = "";

(function () {
  "use strict";
  if (!GOATCOUNTER_CODE) return;
  var base = "https://" + GOATCOUNTER_CODE + ".goatcounter.com";

  // pageview tracking
  var s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-goatcounter", base + "/count");
  s.src = "//gc.zgo.at/count.js";
  document.head.appendChild(s);

  // total in the footer — fails silently if blocked or not enabled
  var el = document.getElementById("visits");
  if (!el) return;
  fetch(base + "/counter/TOTAL.json")
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (d && d.count) el.textContent = d.count + " visits";
    })
    .catch(function () {});
})();

(function () {
  "use strict";

  /* ---- mark the current page in the nav ------------------------------ */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
  });

  /* ---- publications --------------------------------------------------- */
  var list = document.getElementById("pub-list");
  if (!list || typeof PUBLICATIONS === "undefined") return;

  var ROLE_LABEL = {
    first: "First author",
    "co-first": "Co-first",
    corresponding: "Corresponding",
    "co-corresponding": "Co-corresponding"
  };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function pubHTML(p) {
    var title = esc(p.title);
    var heading = p.url
      ? '<a href="' + esc(p.url) + '" rel="noopener">' + title + "</a>"
      : title;
    var tag = ROLE_LABEL[p.role]
      ? '<span class="pub-tag">' + ROLE_LABEL[p.role] + "</span>"
      : "";
    return (
      '<article class="pub">' +
      '<h3 class="pub-title">' + heading + tag + "</h3>" +
      '<p class="pub-meta">' + esc(p.authors) +
      " &middot; <em>" + esc(p.venue) + "</em></p>" +
      "</article>"
    );
  }

  function render(filter) {
    var items = PUBLICATIONS.filter(function (p) {
      if (filter === "all") return true;
      if (filter === "lead") return /first|corresponding/.test(p.role || "");
      return p.topic === filter;
    });

    if (!items.length) {
      list.innerHTML =
        '<p class="muted" style="padding-top:1.5rem">No papers match this filter yet.</p>';
      return;
    }

    var years = [];
    items.forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
    });
    years.sort(function (a, b) { return b - a; });

    list.innerHTML = years
      .map(function (y) {
        return (
          '<div class="pub-year"><h2>' + y + "</h2><div>" +
          items.filter(function (p) { return p.year === y; }).map(pubHTML).join("") +
          "</div></div>"
        );
      })
      .join("");

    var count = document.getElementById("pub-count");
    if (count) {
      count.textContent =
        items.length + (items.length === 1 ? " paper" : " papers");
    }
  }

  document.querySelectorAll(".pub-controls .chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".pub-controls .chip").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      render(btn.dataset.filter);
    });
  });

  render("all");
})();

/* ---- lab members / students -------------------------------------- */
(function () {
  "use strict";
  var root = document.getElementById("people-root");
  if (!root || typeof PEOPLE === "undefined") return;

  var SECTIONS = [
    { key: "phd", label: "PhD students" },
    { key: "msc", label: "Master's students" },
    { key: "ra", label: "Research assistants & staff" },
    { key: "undergrad", label: "Undergraduate researchers" },
    { key: "alumni", label: "Alumni" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function initials(name) {
    var parts = String(name).trim().split(/\s+/);
    var a = parts[0] ? parts[0][0] : "";
    var b = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (a + b).toUpperCase();
  }

  function avatar(p) {
    if (p.photo) {
      return '<div class="person-avatar"><img src="' + esc(p.photo) +
             '" alt="" loading="lazy"></div>';
    }
    return '<div class="person-avatar" aria-hidden="true">' + esc(initials(p.name)) + "</div>";
  }

  function personHTML(p) {
    var name = p.link
      ? '<a href="' + esc(p.link) + '" rel="noopener">' + esc(p.name) + "</a>"
      : esc(p.name);
    var placeholder = /add name here/i.test(p.name) ? " placeholder" : "";
    var note = p.note ? '<p class="person-note' + placeholder + '">' + esc(p.note) + "</p>" : "";
    var email = p.email
      ? '<a class="person-link" href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a>"
      : "";
    var pub = p.pub
      ? '<a class="person-link person-pub" href="' + esc(p.pub.url) + '" rel="noopener">' +
        esc(p.pub.text) + "</a>"
      : "";
    return (
      '<article class="person">' + avatar(p) +
      '<div class="person-body"><p class="person-name">' + name + "</p>" +
      '<p class="person-role">' + esc(p.role || "") + "</p>" + note + email + pub +
      "</div></article>"
    );
  }

  var html = "";
  SECTIONS.forEach(function (sec) {
    var items = PEOPLE.filter(function (p) { return p.category === sec.key; });
    if (!items.length) return;
    html +=
      '<div class="people-section"><h2>' + sec.label +
      '</h2><span class="people-count">' + items.length +
      (items.length === 1 ? " person" : " people") + "</span>" +
      '<div class="people-grid">' + items.map(personHTML).join("") + "</div></div>";
  });

  root.innerHTML = html || '<p class="people-empty">No one listed yet — add entries to assets/people.js.</p>';
})();
