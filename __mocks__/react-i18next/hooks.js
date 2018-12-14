const { get } = require("lodash");

const i18n = {
  language: "en-US",
  languages: ["en-US", "en"],
  dir: () => "ltr",
  on: jest.fn(),
  off: jest.fn(),
  changeLanguage: jest.fn(),
};

const englishResources = require("@twitch-player/i18n/locales/en/translation.json");

module.exports = {
  getI18n: () => i18n,
  useTranslation: () => [i18nKey => get(englishResources, i18nKey), i18n],
};
