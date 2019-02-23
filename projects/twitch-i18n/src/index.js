import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { memoize } from "./utils";
import Backend from "./Backend";
import LanguageDetector from "./LanguageDetector";

export { getI18n, useTranslation } from "react-i18next";

const getNumberFormat = memoize(lng => new Intl.NumberFormat(lng));

const format = (value, format, lng) => {
  switch (format) {
    case "number":
      return getNumberFormat(lng).format(value);
    default:
      return value;
  }
};

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
        format,
      },

      ...options,
    });

export const supportedLanguages = require("../locales/locales.json");
