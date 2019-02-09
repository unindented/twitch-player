import { createClient } from "@twitch-player/data";
import Page from "@twitch-player/ui/dist/components/Page";
import Spinner from "@twitch-player/ui/dist/components/Spinner";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { television as televisionTheme } from "@twitch-player/themes/dist/themes";
import LanguageMonitor from "@twitch-player/ui/dist/components/LanguageMonitor";
import { OverridesProvider } from "@twitch-player/ui/dist/context";
import React, { Suspense, memo } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { MemoryRouter as Router } from "react-router";
import KeyboardHistory from "./KeyboardHistory";
import Routes from "./Routes";

const overrides = {};

const App = () => (
  <ApolloProvider client={createClient()}>
    <ThemeProvider theme={televisionTheme}>
      <OverridesProvider overrides={overrides}>
        <Router>
          <Suspense fallback={null}>
            <KeyboardHistory />
            <LanguageMonitor />
            <Page>
              <Suspense fallback={<Spinner />}>
                <Routes />
              </Suspense>
            </Page>
          </Suspense>
        </Router>
      </OverridesProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default memo(App);
