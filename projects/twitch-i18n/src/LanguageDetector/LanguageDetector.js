import * as detectors from "./detectors";

const defaults = {
  order: ["queryString", "localStorage", "navigator", "htmlTag"],
  lookupQueryString: "lng",
  lookupLocalStorage: "lng",
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

  detect() {
    const detected = this.options.order.reduce((acc, detectorName) => {
      const detector = detectors[detectorName];
      if (detector && detector.lookup) {
        const value = detector.lookup(this.options);
        if (value) {
          return acc.concat(value);
        }
      }
      return acc;
    }, []);

    const found = detected
      .map(lng => this.services.languageUtils.formatLanguageCode(lng))
      .find(lng => this.services.languageUtils.isWhitelisted(lng));

    return found || this.i18nOptions.fallbackLng;
  }

  cacheUserLanguage(lng) {
    this.options.order.forEach(detectorName => {
      const detector = detectors[detectorName];
      if (detector && detector.cacheUserLanguage) {
        detector.cacheUserLanguage(lng, this.options);
      }
    });
  }
}

LanguageDetector.type = "languageDetector";

export default LanguageDetector;
