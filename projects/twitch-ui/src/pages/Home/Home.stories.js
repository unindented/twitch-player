import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../../components/Main";
import Home from ".";

storiesOf("Pages|Home", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <Home />
    </Main>
  </ApolloProvider>
));
