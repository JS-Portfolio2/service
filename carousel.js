/* ============================================================
   RIHLA — carousel.js
   Interactive postcard carousel of top destinations.
   Scroll-snap based track + dot navigation + autoplay.
   ============================================================ */

const carouselModule = (() => {
  let track, dotsWrap, prevBtn, nextBtn;
  let autoplayTimer = null;
  let activeIndex = 0;

  function img(seed, w = 500, h = 640) {
    return `https://picsum.photos/seed/${seed}/${w}/${h}`;
  }

  function cardWidth() {
    const card = track.querySelector(".postcard");
    if (!card) return 320;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || 20);
    return card.getBoundingClientRect().width + gap;
  }

  function render() {
    track.innerHTML = CAROUSEL_DESTINATIONS.map(d => {
      const cityLabel = i18n.LANG_LABELS ? null : null;
      return `
      <div class="postcard reveal" style="transition-delay:${CAROUSEL_DESTINATIONS.indexOf(d) * 70}ms">
        <img src="${img(d.seed)}" alt="${d.key}" loading="lazy">
        <div class="postcard-overlay">
          <div class="postcard-country">${i18n.localized(COUNTRY_NAMES[d.country])}</div>
          <div class="postcard-name">${capitalizeKey(d.key)}</div>
        </div>
        <div class="postcard-stamp">RIHLA<br>${d.country.toUpperCase()}</div>
      </div>`;
    }).join("");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        track.querySelectorAll(".postcard.reveal").forEach(c => c.classList.add("in-view"));
      });
    });

    dotsWrap.innerHTML = CAROUSEL_DESTINATIONS.map((_, i) =>
      `<button class="carousel-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join("");

    dotsWrap.querySelectorAll(".carousel-dot").forEach(dot => {
      dot.addEventListener("click", () => goTo(Number(dot.dataset.index)));
    });
  }

  // city names are stored implicitly via translation keys per destination;
  // fall back to a small localized label map for the six curated cities.
  const CITY_LABELS = {
    luxor:    { ar: "الأقصر", en: "Luxor", fr: "Louxor", de: "Luxor" },
    istanbul: { ar: "إسطنبول", en: "Istanbul", fr: "Istanbul", de: "Istanbul" },
    paris:    { ar: "باريس", en: "Paris", fr: "Paris", de: "Paris" },
    petra:    { ar: "البتراء", en: "Petra", fr: "Pétra", de: "Petra" },
    dubai:    { ar: "دبي", en: "Dubai", fr: "Dubaï", de: "Dubai" },
    rome:     { ar: "روما", en: "Rome", fr: "Rome", de: "Rom" }
  };
  function capitalizeKey(key) { return i18n.localized(CITY_LABELS[key]) || key; }

  function goTo(index) {
    const max = CAROUSEL_DESTINATIONS.length - 1;
    const target = Math.max(0, Math.min(max, index));
    const delta = target - activeIndex;
    if (delta !== 0) track.scrollBy({ left: delta * cardWidth(), behavior: "smooth" });
    activeIndex = target;
    updateDots();
  }

  function updateDots() {
    dotsWrap.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === activeIndex));
  }

  function step(dir) {
    stopAutoplay();
    track.scrollBy({ left: dir * cardWidth(), behavior: "smooth" });
    startAutoplay();
  }

  function syncActiveFromScroll() {
    const cards = [...track.querySelectorAll(".postcard")];
    if (!cards.length) return;
    let closest = 0, min = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.getBoundingClientRect().left - track.getBoundingClientRect().left);
      if (d < min) { min = d; closest = i; }
    });
    activeIndex = closest;
    updateDots();
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      const max = CAROUSEL_DESTINATIONS.length - 1;
      const next = activeIndex >= max ? 0 : activeIndex + 1;
      if (next === 0) { track.scrollTo({ left: 0, behavior: "smooth" }); activeIndex = 0; updateDots(); }
      else { track.scrollBy({ left: cardWidth(), behavior: "smooth" }); }
    }, 4200);
  }
  function stopAutoplay() { if (autoplayTimer) clearInterval(autoplayTimer); }

  function bindEvents() {
    prevBtn.addEventListener("click", () => step(-1));
    nextBtn.addEventListener("click", () => step(1));
    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("mouseleave", startAutoplay);
    track.addEventListener("scroll", () => {
      window.clearTimeout(track._scrollTimeout);
      track._scrollTimeout = setTimeout(syncActiveFromScroll, 120);
    }, { passive: true });

    document.addEventListener("rihla:langchange", () => { render(); });
  }

  function init() {
    track = document.getElementById("carouselTrack");
    dotsWrap = document.getElementById("carDots");
    prevBtn = document.getElementById("carPrev");
    nextBtn = document.getElementById("carNext");
    render();
    bindEvents();
    startAutoplay();
  }

  return { init };
})();
