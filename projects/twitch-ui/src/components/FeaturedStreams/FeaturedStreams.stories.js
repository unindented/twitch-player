import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import FeaturedStreams from ".";

storiesOf("Components|FeaturedStreams", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <FeaturedStreams />
  </ApolloProvider>
));
