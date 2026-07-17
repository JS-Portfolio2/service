/* ============================================================
   RIHLA — data.js
   Static data: trips catalogue + i18n dictionary.
   Kept isolated so it can be swapped for a real API later.
   ============================================================ */

const TRIPS = [
  {
    id: "cai-lux-01",
    type: "train",
    country: "eg",
    city: { ar: "الأقصر", en: "Luxor", fr: "Louxor", de: "Luxor" },
    from: { ar: "القاهرة", en: "Cairo", fr: "Le Caire", de: "Kairo" },
    title: { ar: "قطار الليل الملكي إلى الأقصر", en: "Royal Night Train to Luxor", fr: "Train de nuit royal vers Louxor", de: "Königlicher Nachtzug nach Luxor" },
    desc: {
      ar: "عربة نوم فاخرة تمر بضفاف النيل حتى تشرق الشمس على معابد الأقصر.",
      en: "A private sleeper carriage that follows the Nile until sunrise breaks over Luxor's temples.",
      fr: "Une voiture-lit privée qui longe le Nil jusqu'au lever du soleil sur les temples de Louxor.",
      de: "Ein privater Schlafwagen entlang des Nils, bis die Sonne über Luxors Tempeln aufgeht."
    },
    price: 145, duration: 11, date: "2026-08-05", rating: 4.8, seed: "luxor-train"
  },
  {
    id: "cai-asw-02",
    type: "train",
    country: "eg",
    city: { ar: "أسوان", en: "Aswan", fr: "Assouan", de: "Assuan" },
    from: { ar: "القاهرة", en: "Cairo", fr: "Le Caire", de: "Kairo" },
    title: { ar: "خط النيل الجنوبي إلى أسوان", en: "Southern Nile Line to Aswan", fr: "Ligne du Nil Sud vers Assouan", de: "Südliche Nillinie nach Assuan" },
    desc: {
      ar: "رحلة هادئة بمقصورات مكيّفة تنتهي عند بحيرة ناصر والسد العالي.",
      en: "A calm air‑conditioned journey ending at Lake Nasser and the High Dam.",
      fr: "Un voyage climatisé et paisible qui se termine au lac Nasser et au Haut Barrage.",
      de: "Eine ruhige, klimatisierte Fahrt, die am Nassersee und am Hochdamm endet."
    },
    price: 160, duration: 13, date: "2026-08-12", rating: 4.6, seed: "aswan-train"
  },
  {
    id: "ist-tour-03",
    type: "tour",
    country: "tr",
    city: { ar: "إسطنبول", en: "Istanbul", fr: "Istanbul", de: "Istanbul" },
    from: { ar: "جولة برية", en: "Guided tour", fr: "Circuit guidé", de: "Geführte Tour" },
    title: { ar: "إسطنبول بين قارتين", en: "Istanbul, Between Two Continents", fr: "Istanbul, entre deux continents", de: "Istanbul zwischen zwei Kontinenten" },
    desc: {
      ar: "من آيا صوفيا إلى البازار الكبير، جولة كاملة على ضفتي البوسفور.",
      en: "From Hagia Sophia to the Grand Bazaar — a full tour on both shores of the Bosphorus.",
      fr: "De Sainte-Sophie au Grand Bazar, une visite complète des deux rives du Bosphore.",
      de: "Von der Hagia Sophia bis zum Großen Basar — eine Tour an beiden Ufern des Bosporus."
    },
    price: 320, duration: 72, date: "2026-09-01", rating: 4.9, seed: "istanbul-tour"
  },
  {
    id: "par-tour-04",
    type: "tour",
    country: "fr",
    city: { ar: "باريس", en: "Paris", fr: "Paris", de: "Paris" },
    from: { ar: "جولة برية", en: "Guided tour", fr: "Circuit guidé", de: "Geführte Tour" },
    title: { ar: "عطلة باريسية كلاسيكية", en: "Classic Paris Getaway", fr: "Escapade parisienne classique", de: "Klassischer Paris-Kurztrip" },
    desc: {
      ar: "برج إيفل، متحف اللوفر، ونزهة مسائية على نهر السين.",
      en: "The Eiffel Tower, the Louvre, and an evening stroll along the Seine.",
      fr: "La tour Eiffel, le Louvre et une promenade en soirée le long de la Seine.",
      de: "Der Eiffelturm, der Louvre und ein Abendspaziergang an der Seine."
    },
    price: 410, duration: 96, date: "2026-09-15", rating: 4.7, seed: "paris-tour"
  },
  {
    id: "dxb-tour-05",
    type: "tour",
    country: "ae",
    city: { ar: "دبي", en: "Dubai", fr: "Dubaï", de: "Dubai" },
    from: { ar: "جولة برية", en: "Guided tour", fr: "Circuit guidé", de: "Geführte Tour" },
    title: { ar: "دبي: صحراء وأفق", en: "Dubai: Desert & Skyline", fr: "Dubaï : désert et gratte-ciels", de: "Dubai: Wüste & Skyline" },
    desc: {
      ar: "سفاري صحراوي عند الغروب ثم إطلالة ليلية من برج خليفة.",
      en: "A sunset desert safari followed by a night view from the Burj Khalifa.",
      fr: "Un safari dans le désert au coucher du soleil, puis une vue nocturne depuis le Burj Khalifa.",
      de: "Eine Wüstensafari bei Sonnenuntergang, gefolgt von einem Nachtblick vom Burj Khalifa."
    },
    price: 480, duration: 96, date: "2026-08-20", rating: 4.8, seed: "dubai-tour"
  },
  {
    id: "amm-pet-06",
    type: "tour",
    country: "jo",
    city: { ar: "البتراء", en: "Petra", fr: "Pétra", de: "Petra" },
    from: { ar: "جولة برية", en: "Guided tour", fr: "Circuit guidé", de: "Geführte Tour" },
    title: { ar: "اكتشاف مدينة البتراء الوردية", en: "Discovering the Rose City of Petra", fr: "Découverte de la cité rose de Pétra", de: "Entdeckung der Rosenstadt Petra" },
    desc: {
      ar: "مسير عبر السيق الضيق وصولاً إلى الخزنة الأثرية الشهيرة.",
      en: "A walk through the narrow Siq leading to the famous Treasury facade.",
      fr: "Une marche à travers le Siq étroit menant à la célèbre façade du Trésor.",
      de: "Ein Spaziergang durch den engen Siq bis zur berühmten Schatzhausfassade."
    },
    price: 390, duration: 120, date: "2026-10-02", rating: 4.9, seed: "petra-tour"
  },
  {
    id: "rom-tour-07",
    type: "tour",
    country: "it",
    city: { ar: "روما", en: "Rome", fr: "Rome", de: "Rom" },
    from: { ar: "جولة برية", en: "Guided tour", fr: "Circuit guidé", de: "Geführte Tour" },
    title: { ar: "روما الخالدة", en: "Eternal Rome", fr: "Rome éternelle", de: "Ewiges Rom" },
    desc: {
      ar: "الكولوسيوم، الفاتيكان، وأمسية بين حارات تراستيفيري.",
      en: "The Colosseum, the Vatican, and an evening among the Trastevere alleys.",
      fr: "Le Colisée, le Vatican et une soirée dans les ruelles du Trastevere.",
      de: "Das Kolosseum, der Vatikan und ein Abend in den Gassen von Trastevere."
    },
    price: 350, duration: 96, date: "2026-09-25", rating: 4.7, seed: "rome-tour"
  },
  {
    id: "cai-alx-08",
    type: "train",
    country: "eg",
    city: { ar: "الإسكندرية", en: "Alexandria", fr: "Alexandrie", de: "Alexandria" },
    from: { ar: "القاهرة", en: "Cairo", fr: "Le Caire", de: "Kairo" },
    title: { ar: "قطار الساحل السريع", en: "Coastal Express", fr: "Express côtier", de: "Küsten-Express" },
    desc: {
      ar: "رحلة قصيرة ومريحة تنتهي أمام كورنيش الإسكندرية المطل على المتوسط.",
      en: "A short, comfortable ride ending on Alexandria's corniche facing the Mediterranean.",
      fr: "Un court trajet confortable se terminant sur la corniche d'Alexandrie face à la Méditerranée.",
      de: "Eine kurze, komfortable Fahrt, die an Alexandrias Corniche am Mittelmeer endet."
    },
    price: 95, duration: 3, date: "2026-08-08", rating: 4.5, seed: "alex-train"
  },
  {
    id: "asw-abs-09",
    type: "train",
    country: "eg",
    city: { ar: "أبو سمبل", en: "Abu Simbel", fr: "Abou Simbel", de: "Abu Simbel" },
    from: { ar: "أسوان", en: "Aswan", fr: "Assouan", de: "Assuan" },
    title: { ar: "أبو سمبل: رحلة الفجر", en: "Abu Simbel Dawn Journey", fr: "Voyage à l'aube vers Abou Simbel", de: "Abu-Simbel-Morgenreise" },
    desc: {
      ar: "انطلاقة قبل الفجر للوصول إلى معبد رمسيس الثاني مع أولى خيوط الشمس.",
      en: "A pre‑dawn departure to reach the temple of Ramesses II as the first light arrives.",
      fr: "Un départ avant l'aube pour atteindre le temple de Ramsès II aux premières lueurs du jour.",
      de: "Eine Abfahrt vor Sonnenaufgang, um den Tempel Ramses' II. bei den ersten Lichtstrahlen zu erreichen."
    },
    price: 210, duration: 6, date: "2026-10-10", rating: 4.9, seed: "abusimbel-train"
  }
];

/* Destinations shown in the postcard carousel (subset, curated) */
const CAROUSEL_DESTINATIONS = [
  { key: "luxor",    seed: "luxor-card",     country: "eg" },
  { key: "istanbul", seed: "istanbul-card",  country: "tr" },
  { key: "paris",    seed: "paris-card",     country: "fr" },
  { key: "petra",    seed: "petra-card",     country: "jo" },
  { key: "dubai",    seed: "dubai-card",     country: "ae" },
  { key: "rome",     seed: "rome-card",      country: "it" }
];

const I18N = {
  ar: {
    dir: "rtl",
    brand: "رِحلة",
    nav_trips: "الرحلات",
    nav_destinations: "الوجهات",
    nav_book: "احجز الآن",
    nav_contact: "تواصل معنا",
    lang_label: "اللغة",
    hero_eyebrow: "قطارات وجولات سياحية",
    hero_title: "خُطّ رحلتك القادمة على السكة",
    hero_sub: "احجز تذاكر قطارات وجولات سياحية مختارة بعناية عبر مصر والعالم، بخطوات بسيطة وتجربة تشبه لحظة صعودك للقطار.",
    hero_cta: "استكشف الرحلات",
    hero_cta2: "شاهد الوجهات",
    board_label: "لوحة المغادرة",
    stat_trips: "رحلة متاحة",
    stat_cities: "وجهة",
    stat_rating: "تقييم العملاء",
    filters_title: "تصفية الرحلات",
    filters_search: "ابحث عن وجهة",
    filters_search_ph: "مثال: الأقصر، باريس...",
    filters_type: "نوع الرحلة",
    filters_type_all: "الكل",
    filters_type_train: "قطار",
    filters_type_tour: "جولة سياحية",
    filters_country: "الدولة",
    filters_country_all: "كل الدول",
    filters_price: "الميزانية القصوى",
    filters_date: "من تاريخ",
    filters_sort: "الترتيب",
    sort_recommended: "موصى بها",
    sort_price_asc: "السعر: من الأقل",
    sort_price_desc: "السعر: من الأعلى",
    sort_date: "الأقرب تاريخاً",
    filters_reset: "إعادة تعيين",
    results_count_one: "رحلة",
    results_count_other: "رحلات",
    results_empty_title: "لا توجد رحلات مطابقة",
    results_empty_sub: "جرّب توسيع نطاق البحث أو تعديل الفلاتر.",
    card_from: "من",
    card_duration_h: "ساعة",
    card_book: "احجز",
    card_details: "التفاصيل",
    carousel_title: "وجهات تستحق الرحلة",
    carousel_sub: "لمحة سريعة عن أجمل المحطات في خريطتنا",
    booking_title: "استمارة الحجز",
    booking_sub: "املأ بياناتك وسنجهز تذكرتك خلال لحظات",
    booking_trip: "اختر الرحلة",
    booking_trip_ph: "-- اختر رحلة --",
    booking_name: "الاسم الكامل",
    booking_name_ph: "الاسم كما في جواز السفر",
    booking_email: "البريد الإلكتروني",
    booking_email_ph: "example@email.com",
    booking_phone: "رقم الهاتف",
    booking_phone_ph: "01xxxxxxxxx",
    booking_passengers: "عدد المسافرين",
    booking_date: "تاريخ السفر",
    booking_notes: "ملاحظات إضافية (اختياري)",
    booking_notes_ph: "مقعد بجانب النافذة، احتياجات خاصة...",
    booking_submit: "تأكيد الحجز",
    booking_submitting: "جاري تجهيز تذكرتك...",
    error_required: "هذا الحقل مطلوب",
    error_email: "يرجى إدخال بريد إلكتروني صحيح",
    error_phone: "يرجى إدخال رقم هاتف صحيح",
    error_trip: "يرجى اختيار رحلة",
    confirm_title: "تم تأكيد الحجز!",
    confirm_sub: "أرسلنا تفاصيل التذكرة إلى بريدك الإلكتروني",
    confirm_ref: "رقم الحجز",
    confirm_passenger: "المسافر",
    confirm_trip: "الرحلة",
    confirm_date: "التاريخ",
    confirm_close: "تم، شكراً",
    confirm_new: "حجز جديد",
    footer_rights: "جميع الحقوق محفوظة",
    footer_tagline: "من محطة إلى أخرى، نرافقك في كل خطوة."
  },
  en: {
    dir: "ltr",
    brand: "Rihla",
    nav_trips: "Trips",
    nav_destinations: "Destinations",
    nav_book: "Book now",
    nav_contact: "Contact",
    lang_label: "Language",
    hero_eyebrow: "Trains & guided tours",
    hero_title: "Plot your next journey on the line",
    hero_sub: "Book hand‑picked train tickets and tours across Egypt and beyond, in a few simple steps that feel like stepping onto the platform.",
    hero_cta: "Explore trips",
    hero_cta2: "See destinations",
    board_label: "Departures board",
    stat_trips: "trips available",
    stat_cities: "destinations",
    stat_rating: "average rating",
    filters_title: "Filter trips",
    filters_search: "Search a destination",
    filters_search_ph: "e.g. Luxor, Paris...",
    filters_type: "Trip type",
    filters_type_all: "All",
    filters_type_train: "Train",
    filters_type_tour: "Tour",
    filters_country: "Country",
    filters_country_all: "All countries",
    filters_price: "Max budget",
    filters_date: "From date",
    filters_sort: "Sort by",
    sort_recommended: "Recommended",
    sort_price_asc: "Price: low to high",
    sort_price_desc: "Price: high to low",
    sort_date: "Earliest date",
    filters_reset: "Reset filters",
    results_count_one: "trip",
    results_count_other: "trips",
    results_empty_title: "No matching trips",
    results_empty_sub: "Try widening your search or adjusting the filters.",
    card_from: "From",
    card_duration_h: "h",
    card_book: "Book",
    card_details: "Details",
    carousel_title: "Destinations worth the ride",
    carousel_sub: "A quick look at the finest stops on our map",
    booking_title: "Booking form",
    booking_sub: "Fill in your details and we'll prepare your ticket in moments",
    booking_trip: "Choose trip",
    booking_trip_ph: "-- select a trip --",
    booking_name: "Full name",
    booking_name_ph: "Name as on passport",
    booking_email: "Email address",
    booking_email_ph: "example@email.com",
    booking_phone: "Phone number",
    booking_phone_ph: "+1 555 000 0000",
    booking_passengers: "Passengers",
    booking_date: "Travel date",
    booking_notes: "Additional notes (optional)",
    booking_notes_ph: "Window seat, special needs...",
    booking_submit: "Confirm booking",
    booking_submitting: "Preparing your ticket...",
    error_required: "This field is required",
    error_email: "Please enter a valid email",
    error_phone: "Please enter a valid phone number",
    error_trip: "Please select a trip",
    confirm_title: "Booking confirmed!",
    confirm_sub: "We've sent your ticket details to your email",
    confirm_ref: "Booking reference",
    confirm_passenger: "Passenger",
    confirm_trip: "Trip",
    confirm_date: "Date",
    confirm_close: "Done, thanks",
    confirm_new: "New booking",
    footer_rights: "All rights reserved",
    footer_tagline: "From one platform to the next, we ride along."
  },
  fr: {
    dir: "ltr",
    brand: "Rihla",
    nav_trips: "Voyages",
    nav_destinations: "Destinations",
    nav_book: "Réserver",
    nav_contact: "Contact",
    lang_label: "Langue",
    hero_eyebrow: "Trains & circuits guidés",
    hero_title: "Tracez votre prochain voyage sur la ligne",
    hero_sub: "Réservez des billets de train et circuits triés sur le volet à travers l'Égypte et au-delà, en quelques étapes simples.",
    hero_cta: "Explorer les voyages",
    hero_cta2: "Voir les destinations",
    board_label: "Tableau des départs",
    stat_trips: "voyages disponibles",
    stat_cities: "destinations",
    stat_rating: "note moyenne",
    filters_title: "Filtrer les voyages",
    filters_search: "Rechercher une destination",
    filters_search_ph: "ex. Louxor, Paris...",
    filters_type: "Type de voyage",
    filters_type_all: "Tous",
    filters_type_train: "Train",
    filters_type_tour: "Circuit",
    filters_country: "Pays",
    filters_country_all: "Tous les pays",
    filters_price: "Budget max",
    filters_date: "À partir du",
    filters_sort: "Trier par",
    sort_recommended: "Recommandé",
    sort_price_asc: "Prix croissant",
    sort_price_desc: "Prix décroissant",
    sort_date: "Date la plus proche",
    filters_reset: "Réinitialiser",
    results_count_one: "voyage",
    results_count_other: "voyages",
    results_empty_title: "Aucun voyage correspondant",
    results_empty_sub: "Essayez d'élargir votre recherche ou d'ajuster les filtres.",
    card_from: "Départ",
    card_duration_h: "h",
    card_book: "Réserver",
    card_details: "Détails",
    carousel_title: "Des destinations qui valent le trajet",
    carousel_sub: "Un aperçu des plus belles étapes de notre carte",
    booking_title: "Formulaire de réservation",
    booking_sub: "Remplissez vos informations, votre billet sera prêt en un instant",
    booking_trip: "Choisir un voyage",
    booking_trip_ph: "-- sélectionner un voyage --",
    booking_name: "Nom complet",
    booking_name_ph: "Nom comme sur le passeport",
    booking_email: "Adresse e-mail",
    booking_email_ph: "example@email.com",
    booking_phone: "Numéro de téléphone",
    booking_phone_ph: "+33 6 00 00 00 00",
    booking_passengers: "Voyageurs",
    booking_date: "Date de voyage",
    booking_notes: "Remarques additionnelles (facultatif)",
    booking_notes_ph: "Place côté fenêtre, besoins spécifiques...",
    booking_submit: "Confirmer la réservation",
    booking_submitting: "Préparation de votre billet...",
    error_required: "Ce champ est requis",
    error_email: "Veuillez saisir un e-mail valide",
    error_phone: "Veuillez saisir un numéro valide",
    error_trip: "Veuillez choisir un voyage",
    confirm_title: "Réservation confirmée !",
    confirm_sub: "Les détails de votre billet ont été envoyés par e-mail",
    confirm_ref: "Référence de réservation",
    confirm_passenger: "Voyageur",
    confirm_trip: "Voyage",
    confirm_date: "Date",
    confirm_close: "Terminé, merci",
    confirm_new: "Nouvelle réservation",
    footer_rights: "Tous droits réservés",
    footer_tagline: "D'un quai à l'autre, nous vous accompagnons."
  },
  de: {
    dir: "ltr",
    brand: "Rihla",
    nav_trips: "Reisen",
    nav_destinations: "Ziele",
    nav_book: "Jetzt buchen",
    nav_contact: "Kontakt",
    lang_label: "Sprache",
    hero_eyebrow: "Züge & geführte Touren",
    hero_title: "Planen Sie Ihre nächste Reise auf der Strecke",
    hero_sub: "Buchen Sie sorgfältig ausgewählte Zugtickets und Touren durch Ägypten und darüber hinaus, in wenigen einfachen Schritten.",
    hero_cta: "Reisen entdecken",
    hero_cta2: "Ziele ansehen",
    board_label: "Abfahrtstafel",
    stat_trips: "verfügbare Reisen",
    stat_cities: "Ziele",
    stat_rating: "Durchschnittsbewertung",
    filters_title: "Reisen filtern",
    filters_search: "Ziel suchen",
    filters_search_ph: "z. B. Luxor, Paris...",
    filters_type: "Reiseart",
    filters_type_all: "Alle",
    filters_type_train: "Zug",
    filters_type_tour: "Tour",
    filters_country: "Land",
    filters_country_all: "Alle Länder",
    filters_price: "Maximales Budget",
    filters_date: "Ab Datum",
    filters_sort: "Sortieren nach",
    sort_recommended: "Empfohlen",
    sort_price_asc: "Preis aufsteigend",
    sort_price_desc: "Preis absteigend",
    sort_date: "Nächstes Datum",
    filters_reset: "Filter zurücksetzen",
    results_count_one: "Reise",
    results_count_other: "Reisen",
    results_empty_title: "Keine passenden Reisen",
    results_empty_sub: "Erweitern Sie die Suche oder passen Sie die Filter an.",
    card_from: "Ab",
    card_duration_h: "Std",
    card_book: "Buchen",
    card_details: "Details",
    carousel_title: "Ziele, die die Fahrt wert sind",
    carousel_sub: "Ein schneller Blick auf die schönsten Stationen unserer Karte",
    booking_title: "Buchungsformular",
    booking_sub: "Geben Sie Ihre Daten ein — Ihr Ticket ist in Kürze fertig",
    booking_trip: "Reise auswählen",
    booking_trip_ph: "-- Reise wählen --",
    booking_name: "Vollständiger Name",
    booking_name_ph: "Name wie im Reisepass",
    booking_email: "E-Mail-Adresse",
    booking_email_ph: "example@email.com",
    booking_phone: "Telefonnummer",
    booking_phone_ph: "+49 151 00000000",
    booking_passengers: "Reisende",
    booking_date: "Reisedatum",
    booking_notes: "Zusätzliche Hinweise (optional)",
    booking_notes_ph: "Fensterplatz, besondere Bedürfnisse...",
    booking_submit: "Buchung bestätigen",
    booking_submitting: "Ihr Ticket wird vorbereitet...",
    error_required: "Dieses Feld ist erforderlich",
    error_email: "Bitte gültige E-Mail eingeben",
    error_phone: "Bitte gültige Telefonnummer eingeben",
    error_trip: "Bitte eine Reise auswählen",
    confirm_title: "Buchung bestätigt!",
    confirm_sub: "Wir haben Ihre Ticketdetails per E-Mail gesendet",
    confirm_ref: "Buchungsnummer",
    confirm_passenger: "Reisender",
    confirm_trip: "Reise",
    confirm_date: "Datum",
    confirm_close: "Fertig, danke",
    confirm_new: "Neue Buchung",
    footer_rights: "Alle Rechte vorbehalten",
    footer_tagline: "Von Bahnsteig zu Bahnsteig begleiten wir Sie."
  }
};

const COUNTRY_NAMES = {
  eg: { ar: "مصر", en: "Egypt", fr: "Égypte", de: "Ägypten" },
  tr: { ar: "تركيا", en: "Turkey", fr: "Turquie", de: "Türkei" },
  fr: { ar: "فرنسا", en: "France", fr: "France", de: "Frankreich" },
  ae: { ar: "الإمارات", en: "UAE", fr: "É.A.U.", de: "VAE" },
  jo: { ar: "الأردن", en: "Jordan", fr: "Jordanie", de: "Jordanien" },
  it: { ar: "إيطاليا", en: "Italy", fr: "Italie", de: "Italien" }
};
// 1. دالة لتطبيق الترجمة على الصفحة بناءً على اللغة المحددة
function applyLanguage(lang) {
  // تجنب حدوث خطأ إذا لم يكن ملف الترجمة i18n جاهزاً بعد
  if (typeof i18n === 'undefined' || !i18n[lang]) return;

  // تغيير اتجاه الصفحة ولغتها الأساسية في وسم الـ html
  const htmlTag = document.documentElement;
  htmlTag.setAttribute('lang', lang);
  
  if (lang === 'ar') {
    htmlTag.setAttribute('dir', 'rtl');
  } else {
    htmlTag.setAttribute('dir', 'ltr');
  }

  // ترجمة جميع العناصر التي تحتوي على data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      // إذا كان العنصر عبارة عن مدخل (Input) يحتاج لـ Placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', i18n[lang][key]);
      } else {
        element.textContent = i18n[lang][key];
      }
    }
  });

  // تحديث نص زر اللغة الحالي في الهيدر (اختياري ليظهر اسم اللغة الحالية)
  const currentLangLabel = document.getElementById('langCurrentLabel');
  if (currentLangLabel) {
    const langNames = { ar: 'العربية', en: 'English', fr: 'Français', de: 'Deutsch' };
    currentLangLabel.textContent = langNames[lang] || 'العربية';
  }
}

// 2. عند تحميل أي صفحة في الموقع: نقرأ اللغة المحفوظة ونطبقها فوراً
document.addEventListener('DOMContentLoaded', () => {
  // قراءة اللغة المحفوظة، وإذا لم تكن موجودة نجعل العربية 'ar' هي الافتراضية
  const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
  applyLanguage(savedLang);

  // 3. إضافة الحدث (Event Listener) لأزرار تغيير اللغة لكي تحفظ اختيار المستخدم وتطبقه
  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = button.getAttribute('data-lang');
      
      if (selectedLang) {
        // حفظ اللغة في المتصفح لكي تتذكرها باقي الصفحات
        localStorage.setItem('selectedLanguage', selectedLang);
        
        // تطبيق اللغة فوراً على الصفحة الحالية
        applyLanguage(selectedLang);
      }
    });
  });
});
