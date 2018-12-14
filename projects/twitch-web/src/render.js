import { init as initI18n } from "@twitch-player/i18n";
import React from "react";
import { render } from "react-native";
import App from "./App";

export default async el => {
  await initI18n();
  render(<App />, el);
};
