import InternalLink from "@twitch-player/ui/dist/components/InternalLink";
import Page from "@twitch-player/ui/dist/components/Page";
import Spinner from "@twitch-player/ui/dist/components/Spinner";
import { ThemeProvider } from "@twitch-player/themes/dist/context";
import { television as televisionTheme } from "@twitch-player/themes/dist/themes";
import { OverridesProvider } from "@twitch-player/ui/dist/context";
import React, { Suspense, memo } from "react";
import { MemoryRouter as Router } from "react-router";
import KeyboardHistory from "./KeyboardHistory";
import Routes from "./Routes";

const overrides = {
  Link: InternalLink,
};

const App = memo(() => (
  <ThemeProvider theme={televisionTheme}>
    <OverridesProvider overrides={overrides}>
      <Router>
        <KeyboardHistory />
        <Page>
          <Suspense fallback={<Spinner />}>
            <Routes />
          </Suspense>
        </Page>
      </Router>
    </OverridesProvider>
  </ThemeProvider>
));

export default App;
