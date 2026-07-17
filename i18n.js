/* ============================================================
   RIHLA — i18n.js
   Handles language state, translation of the DOM, and the
   automatic RTL / LTR flip of the whole page.
   ============================================================ */

const i18n = (() => {
  // 💡 التعديل: نقرأ اللغة المحفوظة في المتصفح أولاً، وإذا لم تكن موجودة نختار "ar" كافتراضية
  let current = localStorage.getItem("selectedLanguage") || "ar";

  const LANG_LABELS = { ar: "العربية", en: "English", fr: "Français", de: "Deutsch" };

  function t(key) {
    const dict = I18N[current] || I18N.ar;
    return dict[key] ?? (I18N.ar[key] ?? key);
  }

  function localized(field) {
    if (!field) return "";
    return field[current] ?? field.ar ?? Object.values(field)[0] ?? "";
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });

    // تحديث نص زر القائمة ليعكس اللغة الحالية
    const currentLangLabel = document.getElementById('langCurrentLabel');
    if (currentLangLabel) {
      currentLangLabel.textContent = LANG_LABELS[current];
    }
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    current = lang;
    const dir = I18N[lang].dir;

    // 💡 التعديل: حفظ اللغة المحددة في المتصفح لتتذكرها باقي الصفحات
    localStorage.setItem("selectedLanguage", lang);

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);

    applyStaticTranslations();

    // إرسال الإشارة لباقي الملفات (الفلاتر، الكاروسيل، الحجز) لكي تتحدث تلقائياً
    document.dispatchEvent(new CustomEvent("rihla:langchange", { detail: { lang, dir } }));
  }

  function getLang() { return current; }

  // دالة لتشغيل الترجمة تلقائياً عند تحميل الصفحة
  function init() {
    const dir = I18N[current]?.dir || "rtl";
    document.documentElement.setAttribute("lang", current);
    document.documentElement.setAttribute("dir", dir);
    applyStaticTranslations();
  }

  return { setLanguage, getLang, t, localized, LANG_LABELS, init };
})();

/* ---- ربط عناصر واجهة المستخدم وقائمة اللغات ---- */
document.addEventListener("DOMContentLoaded", () => {
  // تشغيل الترجمة التلقائية بناءً على اللغة المحفوظة فور تحميل الصفحة
  i18n.init();

  const wrap = document.getElementById("langSwitch");
  const trigger = document.getElementById("langTrigger");
  const menu = document.getElementById("langMenu");

  if (trigger && wrap && menu) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", () => {
        i18n.setLanguage(btn.dataset.lang);
        wrap.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        wrap.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }
});