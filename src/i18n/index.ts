import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import bn from "./locales/bn.json";
import en from "./locales/en.json";

const resources = {
  en: {
    translation: en,
  },
  bn: {
    translation: bn,
  },
};

// Get the device locale
const deviceLocale = Localization.locale;
const languageTag = deviceLocale.startsWith("bn") ? "bn" : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: languageTag,
  fallbackLng: "en",
  debug: __DEV__,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
