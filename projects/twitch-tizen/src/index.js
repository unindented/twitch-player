import loadPolyfills from "@twitch-player/polyfills";

(async () => {
  await loadPolyfills();
  const {
    default: render,
  } = await import(/* webpackChunkName: "render" */ "./render");
  render(document.getElementById("root"));
})();
