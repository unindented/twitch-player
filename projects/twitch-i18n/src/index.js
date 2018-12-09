import i18n from "i18next";
import { initReactI18next } from "react-i18next/hooks";

import Backend from "./Backend";
import LanguageDetector from "./LanguageDetector";

const loadI18n = () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV === "development",

      fallbackLng: "en",
      saveMissing: false,

      interpolation: {
        escapeValue: false,
      },
    });
};

export { useTranslation } from "react-i18next/hooks";

export default loadI18n;
