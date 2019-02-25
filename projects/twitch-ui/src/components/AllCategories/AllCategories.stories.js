import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import AllCategories from ".";

storiesOf("Components|AllCategories", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <AllCategories heading="Categories" />
    </Main>
  </ApolloProvider>
));
