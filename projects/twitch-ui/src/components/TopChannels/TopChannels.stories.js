import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import TopChannels from ".";

storiesOf("Components|TopChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <TopChannels heading="Top Channels" />
    </Main>
  </ApolloProvider>
));
