import { addDecorator, configure } from "@storybook/react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";
import {
  getI18n,
  init as initI18n,
  supportedLanguages,
} from "@twitch-player/i18n";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import * as themes from "@twitch-player/themes/dist/themes";
import React, { Suspense } from "react";
import { View, I18nManager } from "react-native";
import { OverridesProvider } from "../../src/context";

const languages = Object.keys(supportedLanguages);

initI18n({
  detection: {
    order: ["navigator", "htmlTag"],
  },
});

addDecorator(withKnobs);

addDecorator(story => {
  const theme = select("Theme", themes, Object.values(themes)[0]);
  const language = select("Language", languages, languages[0]);
  const rtl = boolean("Right-to-left", false);

  getI18n().changeLanguage(language);
  I18nManager.forceRTL(rtl);

  return (
    <ThemeProvider theme={theme}>
      <OverridesProvider>
        <Suspense fallback={null}>
          <View
            style={{ backgroundColor: theme.colors.bodyBackground, flex: 1 }}
          >
            {story()}
          </View>
        </Suspense>
      </OverridesProvider>
    </ThemeProvider>
  );
});

addDecorator(
  withOptions({
    name: "TwitchPlayer",
    url: "https://github.com/unindented/twitch-player",
    hierarchySeparator: "/",
    hierarchyRootSeparator: "\\|",
  })
);

const context = require.context("../../src", true, /\.stories\.js$/);

const loadStories = () => {
  context.keys().forEach(context);
};

configure(loadStories, module);
