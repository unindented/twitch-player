import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Home from ".";

storiesOf("Pages|Home", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Home />
  </ApolloProvider>
));
