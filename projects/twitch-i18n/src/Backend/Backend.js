class Backend {
  constructor(services, options = {}) {
    this.init(services, options);

    this.type = "backend";
  }

  init(services, options = {}) {
    this.services = services;
    this.options = {
      ...this.options,
      ...options,
    };
  }

  async read(lng, ns, callback) {
    try {
      const data = await import(/* webpackChunkName: "locale-[request]" */ `../../locales/${lng}/${ns}.json`);
      callback(null, data);
    } catch (err) {
      callback(err, true);
    }
  }
}

Backend.type = "backend";

export default Backend;
