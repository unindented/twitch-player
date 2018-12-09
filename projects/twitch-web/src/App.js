import InternalLink from "@twitch-player/ui/dist/components/InternalLink";
import Page from "@twitch-player/ui/dist/components/Page";
import Spinner from "@twitch-player/ui/dist/components/Spinner";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { light as lightTheme } from "@twitch-player/themes/dist/themes";
import { OverridesProvider } from "@twitch-player/ui/dist/context";
import React, { Suspense, memo } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const overrides = {
  Link: InternalLink,
};

const App = memo(() => (
  <ThemeProvider theme={lightTheme}>
    <OverridesProvider overrides={overrides}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Page>
            <Suspense fallback={<Spinner />}>
              <Routes />
            </Suspense>
          </Page>
        </Suspense>
      </Router>
    </OverridesProvider>
  </ThemeProvider>
));

export default App;
