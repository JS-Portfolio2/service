/* ============================================================
   RIHLA — booking.js
   Populates the booking form, validates it, and drives the
   animated confirmation overlay (with a generated ticket ref).
   ============================================================ */

const bookingModule = (() => {
  const els = {};
  let currentTripId = "";

  function populateTripSelect() {
    const options = TRIPS.map(t =>
      `<option value="${t.id}">${i18n.localized(t.title)} — $${t.price}</option>`
    ).join("");
    els.trip.innerHTML = `<option value="">${i18n.t("booking_trip_ph")}</option>` + options;
    els.trip.value = currentTripId;
    syncStub();
  }

  function preselectTrip(tripId) {
    currentTripId = tripId;
    els.trip.value = tripId;
    syncStub();
    document.getElementById("booking").scrollIntoView({ behavior: "smooth", block: "start" });
    els.trip.closest(".form-field").classList.remove("has-error");
  }

  function syncStub() {
    const trip = TRIPS.find(t => t.id === els.trip.value);
    document.getElementById("stubTripName").textContent = trip ? i18n.localized(trip.title) : "—";
  }

  function genRef() {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `RH-${rand}`;
  }

  function validate() {
    let ok = true;
    const setError = (field, hasError) => {
      const wrap = field.closest(".form-field");
      wrap.classList.toggle("has-error", hasError);
      if (hasError) ok = false;
    };

    setError(els.trip, !els.trip.value);
    setError(els.name, !els.name.value.trim());
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(els.email.value.trim());
    setError(els.email, !emailOk);
    const phoneOk = /^[0-9+()\-\s]{7,}$/.test(els.phone.value.trim());
    setError(els.phone, !phoneOk);
    setError(els.date, !els.date.value);

    return ok;
  }

  function spawnConfetti() {
    const colors = ["#C9A24B", "#1B6B65", "#C1442D", "#F6F1E4"];
    const card = els.confirmCard;
    for (let i = 0; i < 26; i++) {
      const bit = document.createElement("span");
      bit.className = "confetti";
      bit.style.background = colors[i % colors.length];
      bit.style.left = `${Math.random() * 100}%`;
      bit.style.animationDuration = `${900 + Math.random() * 700}ms`;
      bit.style.animationDelay = `${Math.random() * 200}ms`;
      card.appendChild(bit);
      setTimeout(() => bit.remove(), 1900);
    }
  }

  function showConfirmation(trip, data, ref) {
    document.getElementById("cfRef").textContent = ref;
    document.getElementById("cfName").textContent = data.name;
    document.getElementById("cfTrip").textContent = i18n.localized(trip.title);
    document.getElementById("cfDate").textContent = data.date;

    els.overlay.classList.add("show");
    spawnConfetti();
    document.body.style.overflow = "hidden";
  }

  function hideConfirmation() {
    els.overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  function resetForm() {
    els.form.reset();
    currentTripId = "";
    els.trip.value = "";
    syncStub();
    document.querySelectorAll("#bookingForm .form-field").forEach(f => f.classList.remove("has-error"));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      const firstError = els.form.querySelector(".has-error");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const trip = TRIPS.find(t => t.id === els.trip.value);
    const data = {
      name: els.name.value.trim(),
      email: els.email.value.trim(),
      phone: els.phone.value.trim(),
      passengers: els.passengers.value,
      date: els.date.value,
      notes: els.notes.value.trim()
    };

    els.submitBtn.disabled = true;
    const originalLabel = els.submitBtn.textContent;
    els.submitBtn.textContent = i18n.t("booking_submitting");
    els.submitBtn.style.opacity = ".75";

    await new Promise(r => setTimeout(r, 900)); // simulate ticket preparation

    const ref = genRef();
    document.getElementById("stubCode").textContent = ref;

    els.submitBtn.disabled = false;
    els.submitBtn.textContent = originalLabel;
    els.submitBtn.style.opacity = "";

    showConfirmation(trip, data, ref);
  }

  function bindEvents() {
    els.form.addEventListener("submit", handleSubmit);
    els.trip.addEventListener("change", syncStub);
    els.confirmCloseBtn.addEventListener("click", () => { hideConfirmation(); resetForm(); });
    els.confirmNewBtn.addEventListener("click", () => { hideConfirmation(); resetForm(); els.trip.focus(); });
    els.overlay.addEventListener("click", (e) => { if (e.target === els.overlay) { hideConfirmation(); resetForm(); } });

    document.addEventListener("rihla:langchange", () => {
      populateTripSelect();
    });
  }

  function cacheEls() {
    els.form = document.getElementById("bookingForm");
    els.trip = document.getElementById("bTrip");
    els.name = document.getElementById("bName");
    els.email = document.getElementById("bEmail");
    els.phone = document.getElementById("bPhone");
    els.passengers = document.getElementById("bPassengers");
    els.date = document.getElementById("bDate");
    els.notes = document.getElementById("bNotes");
    els.submitBtn = document.getElementById("submitBtn");
    els.overlay = document.getElementById("confirmOverlay");
    els.confirmCard = document.getElementById("confirmCard");
    els.confirmCloseBtn = document.getElementById("confirmCloseBtn");
    els.confirmNewBtn = document.getElementById("confirmNewBtn");
  }

  function init() {
    cacheEls();

    // تعيين الحد الأدنى للتاريخ ليكون اليوم
    const today = new Date().toISOString().slice(0, 10);
    if (els.date) els.date.min = today;

    populateTripSelect();

    // قراءة معرف الرحلة من الرابط وتحديده مسبقاً
    const urlParams = new URLSearchParams(window.location.search);
    const tripFromUrl = urlParams.get('trip');
    if (tripFromUrl && els.trip) {
      els.trip.value = tripFromUrl;
      syncStub(); 
    }

    bindEvents();
  }

  // 💡 إضافة كود الـ return الخارجي لإتاحة دالة الـ init للملفات الأخرى
  return { init };
})(); // 💡 هنا تم إغلاق الموديول بالشكل الصحيح