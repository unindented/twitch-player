import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import TopChannels from ".";

storiesOf("Components|TopChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <TopChannels />
  </ApolloProvider>
));
