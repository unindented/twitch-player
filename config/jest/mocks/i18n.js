const { get } = require("lodash");
const resources = require("@twitch-player/i18n/locales/en/translation.json");

module.exports = {
  useTranslation: () => [i18nKey => get(resources, i18nKey)],
};
