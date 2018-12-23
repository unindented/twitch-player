import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import TopStreams from ".";

storiesOf("Components|TopStreams", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <TopStreams />
  </ApolloProvider>
));
