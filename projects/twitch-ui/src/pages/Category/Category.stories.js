import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../../components/Main";
import Category from ".";

storiesOf("Pages|Category", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <Category match={{ params: { name: "Fortnite" } }} />
    </Main>
  </ApolloProvider>
));
