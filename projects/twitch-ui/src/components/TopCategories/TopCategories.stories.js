import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import TopCategories from ".";

storiesOf("Components|TopCategories", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <TopCategories />
  </ApolloProvider>
));
