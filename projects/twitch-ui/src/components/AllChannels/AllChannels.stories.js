import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import AllChannels from ".";

storiesOf("Components|AllChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <AllChannels />
  </ApolloProvider>
));
