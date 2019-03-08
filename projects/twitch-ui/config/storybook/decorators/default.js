import { boolean, select } from "@storybook/addon-knobs";
import { getI18n, supportedLanguages } from "@twitch-player/i18n";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import * as themes from "@twitch-player/themes/dist/themes";
import React, { Suspense } from "react";
import { View, I18nManager } from "react-native";
import { MemoryRouter as Router } from "react-router";
import {
  DebugProvider,
  DimensionsProvider,
  OverridesProvider,
} from "../../../src/context";

const languages = Object.keys(supportedLanguages);

export default story => {
  const theme = select("Theme", themes, Object.values(themes)[0]);
  const language = select("Language", languages, languages[0]);
  const rtl = boolean("Right-to-left", false);

  getI18n().changeLanguage(language);
  I18nManager.forceRTL(rtl);

  return (
    <ThemeProvider theme={theme}>
      <DebugProvider>
        <DimensionsProvider>
          <OverridesProvider>
            <Router>
              <Suspense fallback={null}>
                <View
                  style={{
                    backgroundColor: theme.colors.bodyBackground,
                    flex: 1,
                  }}
                >
                  {story()}
                </View>
              </Suspense>
            </Router>
          </OverridesProvider>
        </DimensionsProvider>
      </DebugProvider>
    </ThemeProvider>
  );
};
