import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import TopGames from ".";

storiesOf("Components|TopGames", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <TopGames />
  </ApolloProvider>
));
