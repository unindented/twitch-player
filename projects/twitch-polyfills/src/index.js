const loadPolyfills = async () => {
  const polyfills = [];

  if (!("from" in Array)) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "core-js/fn/array/find")
    );
  }
  if (!("assign" in Object)) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "core-js/fn/object/assign")
    );
  }
  if (!("Map" in window) || !window.Map.prototype.entries) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "core-js/fn/map")
    );
  }
  if (!("Set" in window) || !window.Set.prototype.entries) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "core-js/fn/set")
    );
  }
  if (!("WeakMap" in window)) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "core-js/fn/weak-map")
    );
  }
  if (!("fetch" in window)) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-core" */ "whatwg-fetch")
    );
  }

  if (!("ResizeObserver" in window)) {
    polyfills.push(
      import(
        /* webpackChunkName: "polyfill-resizeobserver" */ "resize-observer-polyfill"
      ).then(module => {
        window.ResizeObserver = module.default;
        return module;
      })
    );
  }

  // Not worth polyfilling for now.
  if (!("Intl" in window) || !window.Intl.NumberFormat) {
    window.Intl = window.Intl || {};
    window.Intl.NumberFormat = () => ({ format: value => value });
  }

  return Promise.all(polyfills);
};

export default loadPolyfills;
