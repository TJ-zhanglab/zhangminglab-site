/* Zhang Lab — rendering + light interaction. No dependencies. */

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
