import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import CategoryStreams from ".";

storiesOf("Components|CategoryStreams", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <CategoryStreams name="Fortnite" />
  </ApolloProvider>
));
