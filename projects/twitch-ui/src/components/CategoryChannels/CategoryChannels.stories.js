import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Main from "../Main";
import CategoryChannels from ".";

storiesOf("Live Components|CategoryChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Main>
      <CategoryChannels name="Fortnite" heading="Fortnite" />
    </Main>
  </ApolloProvider>
));
