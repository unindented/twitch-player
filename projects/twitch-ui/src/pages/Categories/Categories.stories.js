import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../../components/Main";
import Categories from ".";

storiesOf("Pages|Categories", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <Categories />
    </Main>
  </ApolloProvider>
));
