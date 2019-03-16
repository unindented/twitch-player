import loadPolyfills from "@twitch-player/polyfills";

(async () => {
  await loadPolyfills();
  const { default: render } = await import(
    /* webpackChunkName: "render" */ "./render"
  );
  render(document.getElementById("root"));

  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    navigator.serviceWorker.register(`${__webpack_public_path__}sw.js`, {
      scope: __webpack_public_path__,
    });
  }
})();
