import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import CategoryChannels from ".";

storiesOf("Components|CategoryChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <CategoryChannels name="Fortnite" />
  </ApolloProvider>
));
