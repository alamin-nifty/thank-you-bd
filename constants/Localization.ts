import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Bengali translations
const bn = {
  translation: {
    // Common
    common: {
      loading: "লোড হচ্ছে...",
      error: "ত্রুটি",
      success: "সফল",
      cancel: "বাতিল",
      save: "সংরক্ষণ",
      delete: "মুছুন",
      edit: "সম্পাদনা",
      back: "পিছনে",
      next: "পরবর্তী",
      done: "সম্পন্ন",
      close: "বন্ধ করুন",
      search: "অনুসন্ধান",
      filter: "ফিল্টার",
      sort: "সাজান",
      view: "দেখুন",
      share: "শেয়ার করুন",
      download: "ডাউনলোড",
      help: "সাহায্য",
      settings: "সেটিংস",
      on: "চালু",
      off: "বন্ধ",
    },

    // Navigation
    navigation: {
      home: "হোম",
      explore: "অন্বেষণ",
      offers: "অফার",
      profile: "প্রোফাইল",
      search: "অনুসন্ধান",
      points: "পয়েন্ট",
      balance: "ব্যালেন্স",
      card: "কার্ড",
    },

    // Authentication
    auth: {
      login: "লগইন",
      register: "নিবন্ধন",
      logout: "লগআউট",
      email: "ইমেইল",
      password: "পাসওয়ার্ড",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      phone: "ফোন নম্বর",
      otp: "ওটিপি",
      forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",
      resetPassword: "পাসওয়ার্ড রিসেট করুন",
      createAccount: "অ্যাকাউন্ট তৈরি করুন",
      alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
      dontHaveAccount: "অ্যাকাউন্ট নেই?",
    },

    // Home Screen
    home: {
      welcome: "স্বাগতম",
      welcomeMessage: "আপনার প্রিয় ব্র্যান্ডে সঞ্চয় করুন",
      featuredOffers: "বৈশিষ্ট্যযুক্ত অফার",
      nearbyVendors: "কাছাকাছি বিক্রেতা",
      popularCategories: "জনপ্রিয় বিভাগ",
      viewAll: "সব দেখুন",
      seeMore: "আরও দেখুন",
    },

    // Categories
    categories: {
      grocery: "মুদিখানা",
      electronics: "ইলেকট্রনিক্স",
      fashion: "ফ্যাশন",
      restaurants: "রেস্টুরেন্ট",
      beauty: "সৌন্দর্য",
      home: "বাড়ি",
      health: "স্বাস্থ্য",
      sports: "খেলাধুলা",
      books: "বই",
      automotive: "অটোমোটিভ",
    },

    // Vendor Details
    vendor: {
      rating: "রেটিং",
      distance: "দূরত্ব",
      discount: "ছাড়",
      callNow: "এখন কল করুন",
      directions: "দিকনির্দেশনা",
      website: "ওয়েবসাইট",
      showCard: "কার্ড দেখান",
      reviews: "পর্যালোচনা",
      addReview: "পর্যালোচনা যোগ করুন",
      services: "সেবা",
      hours: "সময়",
      address: "ঠিকানা",
      phone: "ফোন",
    },

    // Package Selection
    packages: {
      basic: "বেসিক প্যাকেজ",
      premium: "প্রিমিয়াম প্যাকেজ",
      selectPackage: "প্যাকেজ নির্বাচন করুন",
      perMonth: "প্রতি মাসে",
      whatsIncluded: "কি অন্তর্ভুক্ত:",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      chooseYourPackage: "আপনার প্যাকেজ নির্বাচন করুন",
      unlockAmazingDeals: "আশ্চর্যজনক ডিল আনলক করুন",
      packageComparison: "প্যাকেজ তুলনা",
      frequentlyAskedQuestions: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    },

    // Digital Card
    card: {
      digitalLoyaltyCard: "ডিজিটাল লয়্যালটি কার্ড",
      cardNumber: "কার্ড নম্বর",
      cardholder: "কার্ডধারী",
      expires: "মেয়াদ শেষ",
      membership: "সদস্যতা",
      cardActions: "কার্ড অ্যাকশন",
      shareCard: "কার্ড শেয়ার করুন",
      downloadCard: "কার্ড ডাউনলোড করুন",
      renewMembership: "সদস্যতা নবায়ন করুন",
      yourBenefits: "আপনার সুবিধা",
      howToUse: "কিভাবে ব্যবহার করবেন",
      showYourCard: "আপনার কার্ড দেখান",
      getYourDiscount: "আপনার ছাড় পান",
      saveMoney: "টাকা সঞ্চয় করুন",
      memberName: "সদস্যের নাম",
    },

    // Points & Balance
    points: {
      yourPoints: "আপনার পয়েন্ট",
      pointsTo: "পয়েন্ট",
      availableBalance: "উপলব্ধ ব্যালেন্স",
      readyToUse: "ছাড় এবং ক্যাশব্যাকের জন্য প্রস্তুত",
      recentTransactions: "সাম্প্রতিক লেনদেন",
      viewAllTransactions: "সব লেনদেন দেখুন",
      rewards: "পুরস্কার",
      redeemNow: "এখন রিডিম করুন",
      needMorePoints: "আরও পয়েন্ট প্রয়োজন",
      comingSoon: "শীঘ্রই আসছে",
      quickActions: "দ্রুত অ্যাকশন",
      viewCard: "কার্ড দেখুন",
      earnMore: "আরও অর্জন করুন",
    },

    // Profile
    profile: {
      personalInformation: "ব্যক্তিগত তথ্য",
      changePassword: "পাসওয়ার্ড পরিবর্তন করুন",
      pushNotifications: "পুশ বিজ্ঞপ্তি",
      biometricAuthentication: "বায়োমেট্রিক প্রমাণীকরণ",
      language: "ভাষা",
      darkMode: "ডার্ক মোড",
      locationServices: "অবস্থান সেবা",
      autoUpdate: "স্বয়ংক্রিয় আপডেট",
      dataUsage: "ডেটা ব্যবহার",
      securitySettings: "নিরাপত্তা সেটিংস",
      privacyControls: "গোপনীয়তা নিয়ন্ত্রণ",
      privacyPolicy: "গোপনীয়তা নীতি",
      termsOfService: "সেবার শর্তাবলী",
      cookiePolicy: "কুকি নীতি",
      helpCenter: "সাহায্য কেন্দ্র",
      contactSupport: "সহায়তা যোগাযোগ করুন",
      rateApp: "অ্যাপ রেট করুন",
      appInformation: "অ্যাপ তথ্য",
      version: "সংস্করণ",
      build: "বিল্ড",
      platform: "প্ল্যাটফর্ম",
      accountActions: "অ্যাকাউন্ট অ্যাকশন",
      deleteAccount: "অ্যাকাউন্ট মুছুন",
    },

    // Search
    search: {
      searchVendors: "বিক্রেতা, বিভাগ অনুসন্ধান করুন...",
      recentSearches: "সাম্প্রতিক অনুসন্ধান",
      popularCategories: "জনপ্রিয় বিভাগ",
      searchResults: "অনুসন্ধানের ফলাফল",
      noResultsFound: "কোন ফলাফল পাওয়া যায়নি",
      tryAdjustingSearch:
        "আপনার অনুসন্ধানের শব্দ বা ফিল্টার সামঞ্জস্য করে দেখুন",
      youMightAlsoLike: "আপনার পছন্দ হতে পারে",
      vendors: "বিক্রেতা",
    },

    // Settings
    settings: {
      accountSettings: "অ্যাকাউন্ট সেটিংস",
      appSettings: "অ্যাপ সেটিংস",
      privacySecurity: "গোপনীয়তা ও নিরাপত্তা",
      legal: "আইনি",
      support: "সহায়তা",
      english: "ইংরেজি",
      bengali: "বাংলা",
      wifiOnly: "শুধুমাত্র Wi-Fi",
    },

    // Currency and Formatting
    currency: {
      symbol: "৳",
      name: "বাংলাদেশি টাকা",
      code: "BDT",
    },

    // Date Format
    dateFormat: {
      short: "DD/MM/YYYY",
      long: "DD MMMM, YYYY",
      time: "HH:mm",
      dateTime: "DD/MM/YYYY HH:mm",
    },

    // Accessibility
    accessibility: {
      // Screen reader labels
      homeTab: "হোম ট্যাব",
      exploreTab: "অন্বেষণ ট্যাব",
      offersTab: "অফার ট্যাব",
      profileTab: "প্রোফাইল ট্যাব",
      searchButton: "অনুসন্ধান বোতাম",
      filterButton: "ফিল্টার বোতাম",
      backButton: "পিছনে বোতাম",
      closeButton: "বন্ধ বোতাম",
      favoriteButton: "প্রিয় বোতাম",
      shareButton: "শেয়ার বোতাম",
      callButton: "কল বোতাম",
      directionsButton: "দিকনির্দেশনা বোতাম",
      websiteButton: "ওয়েবসাইট বোতাম",
      qrCodeButton: "QR কোড বোতাম",
      selectPackageButton: "প্যাকেজ নির্বাচন বোতাম",
      redeemButton: "রিডিম বোতাম",
      editProfileButton: "প্রোফাইল সম্পাদনা বোতাম",
      settingsButton: "সেটিংস বোতাম",
      logoutButton: "লগআউট বোতাম",
      deleteAccountButton: "অ্যাকাউন্ট মুছুন বোতাম",

      // Form labels
      emailInput: "ইমেইল ইনপুট",
      passwordInput: "পাসওয়ার্ড ইনপুট",
      phoneInput: "ফোন ইনপুট",
      searchInput: "অনুসন্ধান ইনপুট",

      // Status messages
      loadingMessage: "লোড হচ্ছে",
      errorMessage: "ত্রুটি ঘটেছে",
      successMessage: "সফল হয়েছে",
      noResultsMessage: "কোন ফলাফল পাওয়া যায়নি",

      // Navigation hints
      navigateToVendor: "বিক্রেতার বিবরণ দেখতে ট্যাপ করুন",
      navigateToCategory: "বিভাগ দেখতে ট্যাপ করুন",
      navigateToProfile: "প্রোফাইল দেখতে ট্যাপ করুন",
      navigateToSettings: "সেটিংস দেখতে ট্যাপ করুন",

      // Home screen specific
      homeScreen: "হোম স্ক্রিন",
      appLogo: "অ্যাপ লোগো",
      mainContent: "মূল বিষয়বস্তু",
      membershipCard: "সদস্যতা কার্ড",
      membershipCardHint: "আপনার সদস্যতা কার্ড দেখতে ট্যাপ করুন",
      membershipType: "সদস্যতার ধরন: {{type}}",
      notificationBadge: "নতুন বিজ্ঞপ্তি",
      pointsBalanceWidget: "পয়েন্ট এবং ব্যালেন্স উইজেট",
      pointsProgress: "{{current}} পয়েন্ট {{total}} এর মধ্যে",
      categoryIcon: "{{category}} বিভাগের আইকন",
      featuredVendorsList: "বৈশিষ্ট্যযুক্ত বিক্রেতাদের তালিকা",

      // Additional button accessibility
      notificationButton: "বিজ্ঞপ্তি বোতাম",
      profileButton: "প্রোফাইল বোতাম",
      menuButton: "মেনু বোতাম",
      cardDetailsButton: "কার্ডের বিবরণ বোতাম",
      cardSettingsButton: "কার্ড সেটিংস বোতাম",
      viewCardButton: "কার্ড দেখুন বোতাম",
      earnMoreButton: "আরও অর্জন করুন বোতাম",
      viewAllCategoriesButton: "সব বিভাগ দেখুন বোতাম",
      viewAllVendorsButton: "সব বিক্রেতা দেখুন বোতাম",

      // Card accessibility
      categoryCard: "{{title}} বিভাগ কার্ড",
      categoryCardHint: "{{title}} বিভাগ দেখতে ট্যাপ করুন",
      vendorCard: "{{title}} বিক্রেতা কার্ড",
      vendorCardHint: "{{title}} বিক্রেতার বিবরণ দেখতে ট্যাপ করুন",

      // Search accessibility
      searchHint: "বিক্রেতা এবং বিভাগ অনুসন্ধান করুন",

      // Navigation hints
      navigateToTab: "{{tab}} ট্যাবে যেতে ট্যাপ করুন",
    },
  },
};

// English translations
const en = {
  translation: {
    // Common
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      back: "Back",
      next: "Next",
      done: "Done",
      close: "Close",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      view: "View",
      share: "Share",
      download: "Download",
      help: "Help",
      settings: "Settings",
      on: "On",
      off: "Off",
    },

    // Navigation
    navigation: {
      home: "Home",
      explore: "Explore",
      offers: "Offers",
      profile: "Profile",
      search: "Search",
      points: "Points",
      balance: "Balance",
      card: "Card",
    },

    // Authentication
    auth: {
      login: "Login",
      register: "Register",
      logout: "Logout",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      phone: "Phone Number",
      otp: "OTP",
      forgotPassword: "Forgot Password?",
      resetPassword: "Reset Password",
      createAccount: "Create Account",
      alreadyHaveAccount: "Already have an account?",
      dontHaveAccount: "Don't have an account?",
    },

    // Home Screen
    home: {
      welcome: "Welcome",
      welcomeMessage: "Save on your favorite Bangladeshi brands",
      featuredOffers: "Featured Offers",
      nearbyVendors: "Nearby Vendors",
      popularCategories: "Popular Categories",
      viewAll: "View All",
      seeMore: "See More",
    },

    // Categories
    categories: {
      grocery: "Grocery",
      electronics: "Electronics",
      fashion: "Fashion",
      restaurants: "Restaurants",
      beauty: "Beauty",
      home: "Home",
      health: "Health",
      sports: "Sports",
      books: "Books",
      automotive: "Automotive",
    },

    // Vendor Details
    vendor: {
      rating: "Rating",
      distance: "Distance",
      discount: "Discount",
      callNow: "Call Now",
      directions: "Directions",
      website: "Website",
      showCard: "Show Card",
      reviews: "Reviews",
      addReview: "Add Review",
      services: "Services",
      hours: "Hours",
      address: "Address",
      phone: "Phone",
    },

    // Package Selection
    packages: {
      basic: "Basic Package",
      premium: "Premium Package",
      selectPackage: "Select Package",
      perMonth: "per month",
      whatsIncluded: "What's included:",
      mostPopular: "MOST POPULAR",
      chooseYourPackage: "Choose Your Package",
      unlockAmazingDeals: "Unlock Amazing Deals",
      packageComparison: "Package Comparison",
      frequentlyAskedQuestions: "Frequently Asked Questions",
    },

    // Digital Card
    card: {
      digitalLoyaltyCard: "Digital Loyalty Card",
      cardNumber: "Card Number",
      cardholder: "Cardholder",
      expires: "Expires",
      membership: "Membership",
      cardActions: "Card Actions",
      shareCard: "Share Card",
      downloadCard: "Download Card",
      renewMembership: "Renew Membership",
      yourBenefits: "Your Benefits",
      howToUse: "How to Use Your Card",
      showYourCard: "Show Your Card",
      getYourDiscount: "Get Your Discount",
      saveMoney: "Save Money",
      memberName: "Member Name",
    },

    // Points & Balance
    points: {
      yourPoints: "Your Points",
      pointsTo: "points to",
      availableBalance: "Available Balance",
      readyToUse: "Ready to use for discounts and cashback",
      recentTransactions: "Recent Transactions",
      viewAllTransactions: "View All Transactions",
      rewards: "Rewards",
      redeemNow: "Redeem Now",
      needMorePoints: "more points",
      comingSoon: "Coming Soon",
      quickActions: "Quick Actions",
      viewCard: "View Card",
      earnMore: "Earn More",
    },

    // Profile
    profile: {
      personalInformation: "Personal Information",
      changePassword: "Change Password",
      pushNotifications: "Push Notifications",
      biometricAuthentication: "Biometric Authentication",
      language: "Language",
      darkMode: "Dark Mode",
      locationServices: "Location Services",
      autoUpdate: "Auto-Update",
      dataUsage: "Data Usage",
      securitySettings: "Security Settings",
      privacyControls: "Privacy Controls",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      helpCenter: "Help Center",
      contactSupport: "Contact Support",
      rateApp: "Rate App",
      appInformation: "App Information",
      version: "Version",
      build: "Build",
      platform: "Platform",
      accountActions: "Account Actions",
      deleteAccount: "Delete Account",
    },

    // Search
    search: {
      searchVendors: "Search vendors, categories...",
      recentSearches: "Recent Searches",
      popularCategories: "Popular Categories",
      searchResults: "Search Results",
      noResultsFound: "No results found",
      tryAdjustingSearch:
        "Try adjusting your search terms or filters to find what you're looking for.",
      youMightAlsoLike: "You might also like",
      vendors: "vendors",
    },

    // Settings
    settings: {
      accountSettings: "Account Settings",
      appSettings: "App Settings",
      privacySecurity: "Privacy & Security",
      legal: "Legal",
      support: "Support",
      english: "English",
      bengali: "Bengali",
      wifiOnly: "Wi-Fi only",
    },

    // Currency and Formatting
    currency: {
      symbol: "৳",
      name: "Bangladeshi Taka",
      code: "BDT",
    },

    // Date Format
    dateFormat: {
      short: "DD/MM/YYYY",
      long: "DD MMMM, YYYY",
      time: "HH:mm",
      dateTime: "DD/MM/YYYY HH:mm",
    },

    // Accessibility
    accessibility: {
      // Screen reader labels
      homeTab: "Home tab",
      exploreTab: "Explore tab",
      offersTab: "Offers tab",
      profileTab: "Profile tab",
      searchButton: "Search button",
      filterButton: "Filter button",
      backButton: "Back button",
      closeButton: "Close button",
      favoriteButton: "Favorite button",
      shareButton: "Share button",
      callButton: "Call button",
      directionsButton: "Directions button",
      websiteButton: "Website button",
      qrCodeButton: "QR code button",
      selectPackageButton: "Select package button",
      redeemButton: "Redeem button",
      editProfileButton: "Edit profile button",
      settingsButton: "Settings button",
      logoutButton: "Logout button",
      deleteAccountButton: "Delete account button",

      // Form labels
      emailInput: "Email input",
      passwordInput: "Password input",
      phoneInput: "Phone input",
      searchInput: "Search input",

      // Status messages
      loadingMessage: "Loading",
      errorMessage: "An error occurred",
      successMessage: "Success",
      noResultsMessage: "No results found",

      // Navigation hints
      navigateToVendor: "Tap to view vendor details",
      navigateToCategory: "Tap to view category",
      navigateToProfile: "Tap to view profile",
      navigateToSettings: "Tap to view settings",

      // Home screen specific
      homeScreen: "Home screen",
      appLogo: "App logo",
      mainContent: "Main content",
      membershipCard: "Membership card",
      membershipCardHint: "Tap to view your membership card",
      membershipType: "Membership type: {{type}}",
      notificationBadge: "New notification",
      pointsBalanceWidget: "Points and balance widget",
      pointsProgress: "{{current}} points out of {{total}}",
      categoryIcon: "{{category}} category icon",
      featuredVendorsList: "Featured vendors list",

      // Additional button accessibility
      notificationButton: "Notification button",
      profileButton: "Profile button",
      menuButton: "Menu button",
      cardDetailsButton: "Card details button",
      cardSettingsButton: "Card settings button",
      viewCardButton: "View card button",
      earnMoreButton: "Earn more button",
      viewAllCategoriesButton: "View all categories button",
      viewAllVendorsButton: "View all vendors button",

      // Card accessibility
      categoryCard: "{{title}} category card",
      categoryCardHint: "Tap to view {{title}} category",
      vendorCard: "{{title}} vendor card",
      vendorCardHint: "Tap to view {{title}} vendor details",

      // Search accessibility
      searchHint: "Search vendors and categories",

      // Navigation hints
      navigateToTab: "Tap to navigate to {{tab}} tab",
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en,
    bn,
  },
  lng: Localization.locale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

// Helper functions for localization
export const getCurrentLanguage = () => i18n.language;
export const isRTL = () => i18n.language === "bn";
export const setLanguage = (language: "en" | "bn") =>
  i18n.changeLanguage(language);

// Currency formatting
export const formatCurrency = (amount: number, language?: string) => {
  const lang = language || getCurrentLanguage();
  const currencySymbol = lang === "bn" ? "৳" : "৳";

  if (lang === "bn") {
    return `${currencySymbol}${amount.toLocaleString("bn-BD")}`;
  }

  return `${currencySymbol}${amount.toLocaleString("en-US")}`;
};

// Date formatting
export const formatDate = (
  date: Date,
  format: "short" | "long" | "time" | "dateTime" = "short",
  language?: string
) => {
  const lang = language || getCurrentLanguage();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: format === "short" ? "2-digit" : "long",
    day: "2-digit",
    hour: format.includes("time") ? "2-digit" : undefined,
    minute: format.includes("time") ? "2-digit" : undefined,
  };

  return date.toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", options);
};

export default i18n;
