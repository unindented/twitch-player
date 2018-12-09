import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { light as lightTheme } from "@twitch-player/themes/dist/themes";
import React from "react";
import { render } from "react-testing-library";

const customRender = (node, ...options) => {
  return render(
    <ThemeProvider theme={lightTheme}>{node}</ThemeProvider>,
    ...options
  );
};

const fireResizeEvent = (el, { left = 0, top = 0, width = 0, height = 0 }) => {
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetLeft: { get: () => left },
    offsetTop: { get: () => top },
    offsetWidth: { get: () => width },
    offsetHeight: { get: () => height },
  });

  const evt = document.createEvent("Event");
  evt.initEvent("resize", true, true);
  el.dispatchEvent(evt);
};

export * from "react-testing-library";

export { customRender as render, fireResizeEvent };
