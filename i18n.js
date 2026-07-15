/* Praxoma i18n — Google Translate (English/Hindi) + custom Hinglish layer */

(function () {
  var STORAGE_KEY = "praxoma_lang";

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/";
    document.cookie = name + "=" + value + ";domain=." + location.hostname + ";path=/";
  }
  function clearGoogTrans() {
    setCookie("googtrans", "/en/en");
  }

  // ---- Hinglish dictionary (headline / CTA level only — test names stay English) ----
  var HINGLISH = {
    nav_tagline: "Connected Healthcare Platform",
    install_btn: "App Install Karein",
    hero_badge: "🚀 Saharanpur mein Launch Ho Raha Hai",
    hero_title: "Har Provider.<br><span class=\"accent\">Connected.</span><br>Aasani Se.",
    hero_desc: "Ek hi platform par trusted labs, doctors, pharmacies aur home care — taaki aapki health coordinate ho, alag-alag apps mein bikhri hui na ho.",
    hero_cta: "Praxoma Team Se Judein",
    service_diag_title: "Diagnostics",
    service_diag_desc: "Trusted laboratory services.",
    service_home_title: "Home Collection",
    service_home_desc: "Ghar baithe sample collection.",
    service_report_title: "Digital Reports",
    service_report_desc: "Aasan digital access.",
    service_doctor_title: "Doctor Consults",
    service_doctor_desc: "Online ya in-clinic, aapke records se connected.",
    service_med_title: "Medicines",
    service_med_desc: "Order karein, ghar tak delivery.",
    service_support_title: "Human Support",
    service_support_desc: "Real log. Real madad.",
    cat_strip_title: "Poora Health Checkup Catalogue",
    cat_strip_desc: "Packages, prices aur specialty panels — sab ek jagah.",
    cat_strip_btn: "Catalogue Dekhein →",
    h2_explore: "Diagnostic Services Explore Karein",
    cat_blood: "Blood",
    cat_heart: "Heart",
    cat_diabetes: "Diabetes",
    cat_thyroid: "Thyroid",
    cat_vitamin: "Vitamin",
    cat_kidney: "Kidney",
    cat_liver: "Liver",
    cat_senior: "Senior Care",
    h2_why: "Praxoma Kyun?",
    why_1: "✓ Sab Kuch Connected",
    why_2: "✓ Trusted",
    why_3: "✓ Guided",
    why_4: "✓ Human Support",
    footer_h3: "Care ke saath banaya gaya.",
    footer_p: "Ek connected healthcare service, ek waqt mein.",
    ios_hint: "📲 Praxoma Install Karein: <b>Share</b> par tap karein, phir <b>Add to Home Screen</b>.",
    back_home: "← Home",
    cat_badge: "🧪 Home Collection Available",
    cat_hero_title: "Health Checkup <span class=\"accent\">Catalogue.</span>",
    cat_hero_desc: "Lab-tested, NABL-partnered diagnostic packages — WhatsApp par book karein, hamari team sample collection, reporting aur follow-up sambhalegi.",
    h2_popular: "Popular Full Body Packages",
    sub_popular: "Hamare sabse zyada book kiye jaane wale whole body health packages compare karein.",
    h2_single: "Single Test Offers",
    sub_single: "Sirf ek test chahiye? Ye standalone discounted hain.",
    h2_specialty: "Specialty Health Panels",
    sub_specialty: "Condition-specific aur advanced diagnostic panels.",
    book_cta: "WhatsApp Par Book Karein",
    ask_cta: "WhatsApp Par Poochein",
    offer_kidney: "Kidney Function",
    offer_hba1c: "HbA1c",
    offer_thyroid: "Thyroid Function",
    strip_h2: "Sure nahi ki kaunsa package chahiye?",
    strip_p: "Hamari team ko apne symptoms ya doctor ki advice WhatsApp par bhejein — hum sahi test suggest karke home collection arrange karenge.",
    strip_cta: "Praxoma Team Se Chat Karein",
    cat_footer: "Dikhayi gayi prices hamare partner NABL-accredited lab ke anusaar hain aur revise ho sakti hain — final pricing hamesha WhatsApp par confirm ki jaati hai.",
    cat_footer2: "Home collection facilities Saharanpur mein available hain."
  };

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.dataset.origHtml) el.dataset.origHtml = el.innerHTML;
    });
  }

  function applyHinglish() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (HINGLISH[key]) el.innerHTML = HINGLISH[key];
    });
  }

  function restoreEnglish() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.dataset.origHtml !== undefined) el.innerHTML = el.dataset.origHtml;
    });
  }

  function setLanguage(lang, reload) {
    localStorage.setItem(STORAGE_KEY, lang);
    if (lang === "hinglish") {
      clearGoogTrans();
      restoreEnglish();
      applyHinglish();
    } else if (lang === "hi") {
      restoreEnglish();
      setCookie("googtrans", "/en/hi");
      if (reload) location.reload();
    } else {
      restoreEnglish();
      clearGoogTrans();
      if (reload) location.reload();
    }
    var sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  window.praxomaSetLanguage = function (lang) {
    setLanguage(lang, true);
  };

  document.addEventListener("DOMContentLoaded", function () {
    cacheOriginals();
    var saved = localStorage.getItem(STORAGE_KEY) || "en";
    var sel = document.getElementById("langSelect");
    if (sel) {
      sel.value = saved;
      sel.addEventListener("change", function (e) {
        window.praxomaSetLanguage(e.target.value);
      });
    }
    if (saved === "hinglish") {
      applyHinglish();
    }
    // for "hi", the googtrans cookie (set on a previous selection) is already
    // in place before Google's script runs, so the page loads pre-translated.
  });
})();

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en", includedLanguages: "en,hi", autoDisplay: false },
    "google_translate_element"
  );
}
