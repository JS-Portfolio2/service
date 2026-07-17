/* ============================================================
   RIHLA — filters.js
   Advanced filtering (destination, type, country, price, date)
   + sorting, and rendering of the trips grid & the hero board.
   ============================================================ */

const filtersModule = (() => {
  const state = {
    search: "",
    type: "all",
    country: "all",
    maxPrice: 500,
    fromDate: "",
    sort: "recommended"
  };

  const els = {};

  function img(seed, w = 600, h = 400) {
    return `https://picsum.photos/seed/${seed}/${w}/${h}`;
  }

  function cacheEls() {
    els.search = document.getElementById("fSearch");
    els.typeChips = document.getElementById("typeChips");
    els.country = document.getElementById("fCountry");
    els.price = document.getElementById("fPrice");
    els.priceOut = document.getElementById("priceOut");
    els.date = document.getElementById("fDate");
    els.sort = document.getElementById("fSort");
    els.reset = document.getElementById("resetFilters");
    els.grid = document.getElementById("tripsGrid");
    els.resultsCount = document.getElementById("resultsCount");
    els.resultsLabel = document.getElementById("resultsLabel");
    els.boardRows = document.getElementById("boardRows");
  }

  function populateCountrySelect() {
    const countries = [...new Set(TRIPS.map(t => t.country))];
    els.country.innerHTML = `<option value="all">${i18n.t("filters_country_all")}</option>` +
      countries.map(c => `<option value="${c}">${i18n.localized(COUNTRY_NAMES[c])}</option>`).join("");
    els.country.value = state.country;
  }

  function matches(trip) {
    const q = state.search.trim().toLowerCase();
    const searchable = [
      i18n.localized(trip.city), i18n.localized(trip.from), i18n.localized(trip.title)
    ].join(" ").toLowerCase();

    if (q && !searchable.includes(q)) return false;
    if (state.type !== "all" && trip.type !== state.type) return false;
    if (state.country !== "all" && trip.country !== state.country) return false;
    if (trip.price > state.maxPrice) return false;
    if (state.fromDate && trip.date < state.fromDate) return false;
    return true;
  }

  function sortTrips(list) {
    const sorted = [...list];
    switch (state.sort) {
      case "price_asc": sorted.sort((a, b) => a.price - b.price); break;
      case "price_desc": sorted.sort((a, b) => b.price - a.price); break;
      case "date": sorted.sort((a, b) => a.date.localeCompare(b.date)); break;
      default: sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }

  function tripCard(trip, index) {
    const typeLabel = trip.type === "train" ? i18n.t("filters_type_train") : i18n.t("filters_type_tour");
    const icon = trip.type === "train"
      ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="4" y="3" width="16" height="14" rx="4"/><path d="M4 11h16M8 21l2-3M16 21l-2-3"/></svg>`
      : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9Z"/></svg>`;

    return `
    <article class="trip-card reveal" style="transition-delay:${Math.min(index, 6) * 60}ms">
      <div class="trip-media">
        <img src="${img(trip.seed)}" alt="${i18n.localized(trip.city)}" loading="lazy">
        <span class="trip-badge">${icon} ${typeLabel}</span>
        <span class="trip-price-tag">$${trip.price}</span>
      </div>
      <div class="trip-body">
        <div class="trip-route">
          <span>${i18n.localized(trip.from)}</span> → <span>${i18n.localized(trip.city)}</span>
        </div>
        <h3 class="trip-title">${i18n.localized(trip.title)}</h3>
        <p class="trip-desc">${i18n.localized(trip.desc)}</p>
        <div class="trip-meta">
          <span>⏱ ${trip.duration}${i18n.t("card_duration_h")}</span>
          <span>★ ${trip.rating}</span>
          <span>📅 ${trip.date}</span>
        </div>
        <div class="trip-actions">
          <button class="btn btn-brass btn-sm" data-book="${trip.id}">${i18n.t("card_book")}</button>
        </div>
      </div>
    </article>`;
  }

  function render() {
    const filtered = sortTrips(TRIPS.filter(matches));

    if (filtered.length === 0) {
      els.grid.innerHTML = `
        <div class="empty-state">
          <h3>${i18n.t("results_empty_title")}</h3>
          <p>${i18n.t("results_empty_sub")}</p>
        </div>`;
    } else {
      els.grid.innerHTML = filtered.map((t, i) => tripCard(t, i)).join("");
    }

    els.resultsCount.textContent = filtered.length;
    els.resultsLabel.textContent = filtered.length === 1 ? i18n.t("results_count_one") : i18n.t("results_count_other");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.grid.querySelectorAll(".trip-card.reveal").forEach(card => card.classList.add("in-view"));
      });
    });

    // ابحثي عن الجزء المسؤول عن كليك زر الحجز في filters.js وعدليه ليصبح هكذا:
els.grid.querySelectorAll("[data-book]").forEach(btn => {
  btn.addEventListener("click", () => {
    const tripId = btn.getAttribute("data-book");
    // الانتقال لصفحة الحجز المستقلة وتمرير معرف الرحلة عبر الرابط
    window.location.href = `booking.html?trip=${tripId}`;
  });
});

    renderBoard();
  }

  function renderBoard() {
    if (!els.boardRows) return;
    const rows = [...TRIPS].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 5);
    els.boardRows.innerHTML = rows.map((t, i) => `
      <div class="board-row">
        <span class="flip">${i18n.localized(t.city)}</span>
        <span class="flip">${t.date.slice(5)}</span>
        <span class="flip">RH-${(120 + i)}</span>
        <span class="board-status ${i === 0 ? 'boarding' : ''}">
          ● ${i === 0 ? i18n.t('card_book') : 'ON TIME'}
        </span>
      </div>
    `).join("");
  }

  function bindEvents() {
    els.search.addEventListener("input", () => { state.search = els.search.value; render(); });

    els.typeChips.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        els.typeChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        state.type = chip.dataset.type;
        render();
      });
    });

    els.country.addEventListener("change", () => { state.country = els.country.value; render(); });

    els.price.addEventListener("input", () => {
      state.maxPrice = Number(els.price.value);
      els.priceOut.textContent = `$${state.maxPrice}`;
      render();
    });

    els.date.addEventListener("change", () => { state.fromDate = els.date.value; render(); });
    els.sort.addEventListener("change", () => { state.sort = els.sort.value; render(); });

    els.reset.addEventListener("click", () => {
      state.search = ""; state.type = "all"; state.country = "all";
      state.maxPrice = 500; state.fromDate = ""; state.sort = "recommended";
      els.search.value = ""; els.country.value = "all"; els.price.value = 500;
      els.priceOut.textContent = "$500"; els.date.value = ""; els.sort.value = "recommended";
      els.typeChips.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.type === "all"));
      render();
    });
  }

  function init() {
    cacheEls();
    populateCountrySelect();
    els.priceOut.textContent = `$${state.maxPrice}`;
    bindEvents();
    render();

    document.addEventListener("rihla:langchange", () => {
      populateCountrySelect();
      render();
    });
  }

  return { init, render, get state() { return state; } };
})();
