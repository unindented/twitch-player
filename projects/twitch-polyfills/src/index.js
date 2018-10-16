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

  if (!("ResizeObserver" in window)) {
    polyfills.push(
      import(/* webpackChunkName: "polyfill-resizeobserver" */ "resize-observer-polyfill").then(
        module => {
          window.ResizeObserver = module.default;
          return module;
        }
      )
    );
  }

  return Promise.all(polyfills);
};

export default loadPolyfills;
