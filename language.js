/* ================================
   SayonMart Language System
   বাংলা / हिन्दी / English
================================ */

const translations = {

  English: {
    "Language": "Language",
    "Theme": "Theme",
    "Light": "Light",
    "Support": "Support",
    "Help Center": "Help Center",
    "Get help with your orders": "Get help with your orders",
    "Contact Us": "Contact Us",
    "Contact SayonMart support": "Contact SayonMart support",
    "About SayonMart": "About SayonMart",
    "About our shopping app": "About our shopping app",
    "Home": "Home",
    "Products": "Products",
    "Wishlist": "Wishlist",
    "Cart": "Cart",
    "Profile": "Profile",
    "My Orders": "My Orders",
    "Settings": "Settings",
    "Notifications": "Notifications",
    "Sound": "Sound",
    "Account": "Account",
    "Logout": "Logout",
    "Admin Panel": "Admin Panel",
    "Search": "Search",
    "Add to Cart": "Add to Cart",
    "Buy Now": "Buy Now",
    "Checkout": "Checkout",
    "Back": "Back",
    "Total": "Total",
    "Payment": "Payment",
    "Order": "Order",
    "Order Now": "Order Now",
    "View All": "View All",
    "Trending Products": "Trending Products",
    "New Arrivals": "New Arrivals",
    "Best Deals": "Best Deals",
    "Categories": "Categories",
    "Fashion": "Fashion",
    "Shoes": "Shoes",
    "Mobiles": "Mobiles",
    "Watches": "Watches",
    "Electronics": "Electronics"
  },

  Bangla: {
    "Language": "ভাষা",
    "Theme": "থিম",
    "Light": "লাইট",
    "Support": "সহায়তা",
    "Help Center": "হেল্প সেন্টার",
    "Get help with your orders": "আপনার অর্ডার সংক্রান্ত সাহায্য নিন",
    "Contact Us": "যোগাযোগ করুন",
    "Contact SayonMart support": "SayonMart সাপোর্টে যোগাযোগ করুন",
    "About SayonMart": "SayonMart সম্পর্কে",
    "About our shopping app": "আমাদের শপিং অ্যাপ সম্পর্কে",
    "Home": "হোম",
    "Products": "পণ্য",
    "Wishlist": "উইশলিস্ট",
    "Cart": "কার্ট",
    "Profile": "প্রোফাইল",
    "My Orders": "আমার অর্ডার",
    "Settings": "সেটিংস",
    "Notifications": "নোটিফিকেশন",
    "Sound": "সাউন্ড",
    "Account": "অ্যাকাউন্ট",
    "Logout": "লগআউট",
    "Admin Panel": "অ্যাডমিন প্যানেল",
    "Search": "খুঁজুন",
    "Add to Cart": "কার্টে যোগ করুন",
    "Buy Now": "এখনই কিনুন",
    "Checkout": "চেকআউট",
    "Back": "ফিরে যান",
    "Total": "মোট",
    "Payment": "পেমেন্ট",
    "Order": "অর্ডার",
    "Order Now": "এখনই অর্ডার করুন",
    "View All": "সব দেখুন",
    "Trending Products": "জনপ্রিয় পণ্য",
    "New Arrivals": "নতুন পণ্য",
    "Best Deals": "সেরা অফার",
    "Categories": "ক্যাটাগরি",
    "Fashion": "ফ্যাশন",
    "Shoes": "জুতা",
    "Mobiles": "মোবাইল",
    "Watches": "ঘড়ি",
    "Electronics": "ইলেকট্রনিক্স"
  },

  Hindi: {
    "Language": "भाषा",
    "Theme": "थीम",
    "Light": "लाइट",
    "Support": "सहायता",
    "Help Center": "हेल्प सेंटर",
    "Get help with your orders": "अपने ऑर्डर के लिए सहायता लें",
    "Contact Us": "हमसे संपर्क करें",
    "Contact SayonMart support": "SayonMart सपोर्ट से संपर्क करें",
    "About SayonMart": "SayonMart के बारे में",
    "About our shopping app": "हमारे शॉपिंग ऐप के बारे में",
    "Home": "होम",
    "Products": "प्रोडक्ट्स",
    "Wishlist": "विशलिस्ट",
    "Cart": "कार्ट",
    "Profile": "प्रोफाइल",
    "My Orders": "मेरे ऑर्डर",
    "Settings": "सेटिंग्स",
    "Notifications": "नोटिफिकेशन",
    "Sound": "साउंड",
    "Account": "अकाउंट",
    "Logout": "लॉगआउट",
    "Admin Panel": "एडमिन पैनल",
    "Search": "खोजें",
    "Add to Cart": "कार्ट में जोड़ें",
    "Buy Now": "अभी खरीदें",
    "Checkout": "चेकआउट",
    "Back": "वापस",
    "Total": "कुल",
    "Payment": "भुगतान",
    "Order": "ऑर्डर",
    "Order Now": "अभी ऑर्डर करें",
    "View All": "सभी देखें",
    "Trending Products": "लोकप्रिय प्रोडक्ट्स",
    "New Arrivals": "नए प्रोडक्ट्स",
    "Best Deals": "सबसे अच्छे ऑफर",
    "Categories": "कैटेगरी",
    "Fashion": "फैशन",
    "Shoes": "जूते",
    "Mobiles": "मोबाइल",
    "Watches": "घड़ी",
    "Electronics": "इलेक्ट्रॉनिक्स"
  }
};


/* Current language */
let currentLanguage =
  localStorage.getItem("sayonmart_language") || "English";


/* Translate page */
function applyLanguage() {

  const lang = translations[currentLanguage] || translations.English;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (lang[key]) {
      element.textContent = lang[key];
    }

  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

    const key = element.getAttribute("data-i18n-placeholder");

    if (lang[key]) {
      element.placeholder = lang[key];
    }

  });

  document.documentElement.lang =
    currentLanguage === "Bangla" ? "bn" :
    currentLanguage === "Hindi" ? "hi" : "en";

}


/* Change language */
window.changeLanguage = function(language) {

  if (!translations[language]) return;

  currentLanguage = language;

  localStorage.setItem(
    "sayonmart_language",
    language
  );

  applyLanguage();

  window.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: language
    })
  );

};


/* Get current language */
window.getLanguage = function() {
  return currentLanguage;
};


/* Start */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});