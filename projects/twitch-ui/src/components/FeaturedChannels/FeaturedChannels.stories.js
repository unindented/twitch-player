import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import FeaturedChannels from ".";

storiesOf("Components|FeaturedChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <FeaturedChannels heading="Featured Channels" />
    </Main>
  </ApolloProvider>
));
