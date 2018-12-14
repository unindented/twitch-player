const defaults = {
  loadPath: `${__webpack_public_path__}locales/{{lng}}/{{ns}}.json`,
};

class Backend {
  constructor(services, options = {}) {
    this.init(services, options);

    this.type = "backend";
  }

  init(services, options = {}) {
    this.services = services;
    this.options = {
      ...defaults,
      ...this.options,
      ...options,
    };
  }

  read(language, namespace, callback) {
    const url = this.services.interpolator.interpolate(this.options.loadPath, {
      lng: language,
      ns: namespace,
    });

    this.loadUrl(url, callback);
  }

  async loadUrl(url, callback) {
    const response = await fetch(url, this.options.requestOptions);
    const { ok, status } = response;

    if (!ok) {
      const retry = status >= 500;
      return callback(new Error(status), retry);
    }

    try {
      const data = await response.json();
      return callback(null, data);
    } catch (err) {
      return callback(err, false);
    }
  }
}

Backend.type = "backend";

export default Backend;
