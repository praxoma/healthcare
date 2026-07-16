/* Praxoma i18n — hand-written simple Hindi (Devanagari) + English.
   Default language is Hindi (this audience is Hindi-first, low/no English).
   No Google Translate dependency — instant, offline-friendly switching. */

(function () {
  var STORAGE_KEY = "praxoma_lang";

  // Simple, everyday Hindi — deliberately NOT formal/Sanskritized government-style Hindi
  var HI = {
    nav_tagline: "आपकी सेहत, एक ही जगह",
    install_btn: "ऐप डालें",
    hero_badge: "🚀 सहारनपुर में शुरू हो रहा है",
    hero_title: "क्या तकलीफ़ है,<br><span class=\"accent\">बताइए.</span>",
    hero_desc: "सही जांच, सही डॉक्टर — बताएं और हम मदद करेंगे। गलत या महंगे इलाज में समय और पैसा बर्बाद न करें।",
    hero_cta: "तकलीफ़ बताएं",
    call_cta: "कॉल करें",
    symptom_heading: "आपको क्या तकलीफ़ है?",
    symptom_sub: "जो भी तकलीफ़ हो, बस बताएं — हम सही जांच बताएंगे।",
    symptom_fever: "बुखार",
    symptom_fatigue: "थकान / कमज़ोरी",
    symptom_stomach: "पेट की तकलीफ़",
    symptom_pain: "जोड़ों / शरीर में दर्द",
    symptom_breath: "सांस फूलना",
    symptom_women: "महिलाओं की सेहत",
    symptom_senior: "बुज़ुर्गों की जांच",
    symptom_pregnancy: "गर्भावस्था",
    symptom_fullcheck: "पूरी जांच चाहिए",
    symptom_unsure: "पता नहीं, बस पूछना है",
    h2_why: "Praxoma पर भरोसा क्यों करें",
    why_1: "✓ सही जांच की सलाह, मुफ़्त",
    why_2: "✓ गलत इलाज से बचाव",
    why_3: "✓ जांचे-परखे डॉक्टर और लैब",
    why_4: "✓ घर बैठे मदद",
    occ_heading: "खास मौकों पर सेहत का तोहफ़ा",
    occ_sub: "बीमारी का इंतज़ार क्यों — इन मौकों पर अपनों की सेहत का ख्याल रखें।",
    occ_birthday_title: "जन्मदिन सेहत तोहफ़ा",
    occ_birthday_desc: "खुद को या परिवार को इस साल जन्मदिन पर सेहत का तोहफ़ा दें।",
    occ_anniv_title: "सालगिरह कपल पैकेज",
    occ_anniv_desc: "एक दूसरे का ख्याल रखें — साथ में जांच कराएं।",
    occ_parents_title: "माता-पिता की सेहत, दूर से",
    occ_parents_desc: "बाहर रहते हैं? यहां से अपने माता-पिता की जांच करवाएं, हम पूरा ख्याल रखेंगे।",
    occ_festival_title: "त्योहार सेहत कैंप",
    occ_festival_desc: "त्योहार से पहले पूरे परिवार की जांच — खास कीमत पर।",
    occ_cta: "पूछें",
    service_diag_title: "जांच (टेस्ट)",
    service_diag_desc: "भरोसेमंद लैब से टेस्ट।",
    service_home_title: "घर पर सैंपल",
    service_home_desc: "घर बैठे सैंपल लिया जाएगा।",
    service_report_title: "रिपोर्ट मोबाइल पर",
    service_report_desc: "रिपोर्ट सीधे फोन पर मिलेगी।",
    service_doctor_title: "डॉक्टर से बात",
    service_doctor_desc: "फोन पर या क्लिनिक में डॉक्टर से मिलें।",
    service_med_title: "दवाई घर पर",
    service_med_desc: "दवाई मंगवाएं, घर पर पाएं।",
    service_support_title: "मदद के लिए इंसान",
    service_support_desc: "हर सवाल का जवाब एक असली इंसान देगा।",
    cat_small_link: "पहले से पता है कौन सा टेस्ट चाहिए? रेट लिस्ट देखें →",
    footer_h3: "पूरी ईमानदारी से बनाया गया।",
    footer_p: "एक-एक करके, हर सेहत सेवा जोड़ रहे हैं।",
    ios_hint: "📲 Praxoma डालने के लिए: <b>Share</b> दबाएं, फिर <b>Add to Home Screen</b> दबाएं।",
    back_home: "← घर",
    cat_badge: "🧪 घर पर सैंपल की सुविधा",
    cat_hero_title: "टेस्ट और <span class=\"accent\">रेट लिस्ट.</span>",
    cat_hero_desc: "भरोसेमंद, NABL-मान्यता प्राप्त लैब के टेस्ट — WhatsApp पर बुक करें, हम घर आकर सैंपल लेंगे और रिपोर्ट पहुंचाएंगे।",
    h2_popular: "सबसे ज़्यादा बुक होने वाले पैकेज",
    sub_popular: "पूरे शरीर की जांच वाले पैकेज यहां देखें।",
    h2_single: "सिर्फ एक टेस्ट चाहिए?",
    sub_single: "इन टेस्ट पर खास छूट है।",
    h2_specialty: "खास बीमारी के लिए टेस्ट",
    sub_specialty: "किसी खास तकलीफ़ या बीमारी से जुड़े टेस्ट।",
    book_cta: "WhatsApp पर बुक करें",
    ask_cta: "WhatsApp पर पूछें",
    offer_kidney: "किडनी टेस्ट",
    offer_hba1c: "शुगर (HbA1c)",
    offer_thyroid: "थायरॉइड टेस्ट",
    strip_h2: "समझ नहीं आ रहा कौन सा टेस्ट कराएं?",
    strip_p: "अपनी तकलीफ़ या डॉक्टर की सलाह हमें WhatsApp पर भेजें — हम सही टेस्ट बताएंगे और घर पर सैंपल लेने आएंगे।",
    strip_cta: "Praxoma टीम से बात करें",
    cat_footer: "यहां दिखाए गए दाम हमारी पार्टनर लैब के अनुसार हैं और बदल सकते हैं — पक्का दाम हमेशा WhatsApp पर बुकिंग के समय बताया जाएगा।",
    cat_footer2: "सहारनपुर में हर जगह घर पर सैंपल लेने की सुविधा है।"
  };

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.dataset.origHtml) el.dataset.origHtml = el.innerHTML;
    });
  }

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (lang === "hi" && HI[key]) {
        el.innerHTML = HI[key];
      } else if (el.dataset.origHtml !== undefined) {
        el.innerHTML = el.dataset.origHtml;
      }
    });
    document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en");
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    document.querySelectorAll(".lang-pill").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  window.praxomaSetLanguage = setLanguage;

  document.addEventListener("DOMContentLoaded", function () {
    cacheOriginals();
    var saved = localStorage.getItem(STORAGE_KEY) || "hi"; // Hindi-first audience — default to Hindi
    setLanguage(saved);
    document.querySelectorAll(".lang-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  });
})();
