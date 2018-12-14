import { parse } from "querystring";

const defaults = {
  order: ["querystring", "navigator", "htmlTag"],
  lookupQuerystring: "lng",
};

const detectors = {
  querystring: ({ lookupQuerystring }) =>
    parse(window.location.search.substring(1))[lookupQuerystring],
  navigator: () => navigator.language,
  htmlTag: () => document.documentElement.getAttribute("lang"),
};

class LanguageDetector {
  constructor(services, options = {}) {
    this.init(services, options);

    this.type = "languageDetector";
  }

  init(services, options = {}, i18nOptions = {}) {
    this.services = services;
    this.options = {
      ...defaults,
      ...this.options,
      ...options,
    };
    this.i18nOptions = i18nOptions;
  }

  detect(detectionOrder = this.options.order) {
    const detected = detectionOrder.reduce((acc, detectorName) => {
      if (detectors[detectorName]) {
        const value = detectors[detectorName](this.options);
        if (value) {
          return acc.concat(value);
        }
      }
      return acc;
    }, []);

    let found = detected
      .map(lng => this.services.languageUtils.formatLanguageCode(lng))
      .find(lng => this.services.languageUtils.isWhitelisted(lng));

    return found || this.i18nOptions.fallbackLng;
  }

  cacheUserLanguage(lng, caches = this.options.caches) {
    if (
      !caches ||
      (this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(lng) > -1)
    ) {
      return;
    }

    caches.forEach(cacheName => {
      if (this.detectors[cacheName]) {
        this.detectors[cacheName].cacheUserLanguage(lng, this.options);
      }
    });
  }
}

LanguageDetector.type = "languageDetector";

export default LanguageDetector;
