import { addDecorator, configure } from "@storybook/react";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import * as themes from "@twitch-player/themes/dist/themes";
import React from "react";
import { View, I18nManager } from "react-native";
import { OverridesProvider } from "../../src/context";

addDecorator(withKnobs);

addDecorator(story => {
  const theme = select("Theme", themes, themes.light);
  const rtl = boolean("Right-to-left", false);

  I18nManager.forceRTL(rtl);

  return (
    <ThemeProvider theme={theme}>
      <OverridesProvider>
        <View style={{ backgroundColor: theme.colors.bodyBackground, flex: 1 }}>
          {story()}
        </View>
      </OverridesProvider>
    </ThemeProvider>
  );
});

addDecorator(
  withOptions({
    name: "TwitchPlayer",
    url: "https://github.com/unindented/twitch-player",
  })
);

const context = require.context("../../src", true, /\.stories\.js$/);

const loadStories = () => {
  context.keys().forEach(context);
};

configure(loadStories, module);
