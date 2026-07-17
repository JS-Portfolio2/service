/* ============================================================
   RIHLA — app.js
   Boots every module in the right order and wires up
   page-wide behaviour: scroll reveals + mobile navigation.
   ============================================================ */

(function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("in-view"), i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  });
})();

(function mobileNav() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navToggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("mobile-open");
      if (isOpen) {
        Object.assign(nav.style, {
          display: "flex", flexDirection: "column", position: "absolute",
          top: "76px", insetInlineStart: "0", insetInlineEnd: "0",
          background: "#0B2545", padding: "18px 24px", gap: "16px",
          borderBottom: "1px solid rgba(246,241,228,.15)"
        });
      } else {
        nav.removeAttribute("style");
      }
    });

    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("mobile-open");
      nav.removeAttribute("style");
    }));
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  // تشغيل الفلاتر فقط لو كانت لوحة الرحلات أو اللوحة الرئيسية موجودة
  if (document.getElementById("tripsGrid") || document.getElementById("boardRows")) {
    filtersModule.init();
  }
  // تشغيل الكاروسيل فقط في صفحة الوجهات
  if (document.getElementById("carouselTrack")) {
    carouselModule.init();
  }
  // تشغيل موديول الحجز فقط في صفحة الحجز
  if (document.getElementById("bookingForm")) {
    bookingModule.init();
  }
});
