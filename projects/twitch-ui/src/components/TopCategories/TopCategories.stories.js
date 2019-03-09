import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import TopCategories from ".";

storiesOf("Live Components|TopCategories", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <TopCategories heading="Top Categories" />
    </Main>
  </ApolloProvider>
));
