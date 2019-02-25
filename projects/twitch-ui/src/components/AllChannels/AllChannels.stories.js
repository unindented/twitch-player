import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import AllChannels from ".";

storiesOf("Components|AllChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <AllChannels heading="Live Channels" />
    </Main>
  </ApolloProvider>
));
