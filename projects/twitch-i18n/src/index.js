import i18n from "i18next";
import { initReactI18next } from "react-i18next/hooks";
import Backend from "./Backend";
import LanguageDetector from "./LanguageDetector";

export { getI18n, useTranslation } from "react-i18next/hooks";

export const init = options =>
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

      ...options,
    });

export const supportedLanguages = require("../locales/locales.json");
