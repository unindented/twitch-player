import loadI18n from "@twitch-player/i18n";
import React from "react";
import { render } from "react-native";
import App from "./App";

export default el => {
  loadI18n();
  render(<App />, el);
};
