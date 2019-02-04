import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import Channels from ".";

storiesOf("Pages|Channels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <Channels />
  </ApolloProvider>
));
