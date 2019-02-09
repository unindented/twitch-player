import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { light as lightTheme } from "@twitch-player/themes/dist/themes";
import { OverridesProvider } from "@twitch-player/ui/dist/context";
import React from "react";
import { act } from "react-dom/test-utils";
import { MemoryRouter as Router } from "react-router";
import { fireEvent, render } from "react-testing-library";

const customRender = (node, ...options) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <OverridesProvider>
        <Router>{node}</Router>
      </OverridesProvider>
    </ThemeProvider>,
    ...options
  );
};

fireEvent["press"] = (node, init) => {
  fireEvent.mouseDown(node, init);
  fireEvent.mouseUp(node, init);
};

fireEvent["resize"] = (node, init) => {
  const { target: { left = 0, top = 0, width = 0, height = 0 } = {} } = init;

  Object.defineProperties(window.HTMLElement.prototype, {
    offsetLeft: { get: () => left },
    offsetTop: { get: () => top },
    offsetWidth: { get: () => width },
    offsetHeight: { get: () => height },
  });

  const eventInit = { bubbles: false, cancelable: false };
  const event = new Event(node, eventInit);

  act(() => {
    fireEvent(node, event);
    // eslint-disable-next-line no-undef
    jest.runAllTimers();
  });
};

export * from "react-testing-library";

export { customRender as render };
