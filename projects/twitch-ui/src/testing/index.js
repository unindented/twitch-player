import { fireEvent, render } from "@twitch-player/testing/dist/unit";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import React from "react";
import { DebugProvider, DimensionsProvider } from "../context";

const customRender = (node, ...options) => {
  return render(
    <ThemeProvider>
      <DebugProvider>
        <DimensionsProvider>{node}</DimensionsProvider>
      </DebugProvider>
    </ThemeProvider>,
    ...options
  );
};

export { customRender as render, fireEvent };
