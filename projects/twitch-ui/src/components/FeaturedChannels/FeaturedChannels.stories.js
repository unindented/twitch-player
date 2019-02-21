import { storiesOf } from "@storybook/react";
import { createClient } from "@twitch-player/data";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import FeaturedChannels from ".";

storiesOf("Components|FeaturedChannels", module).add("default", () => (
  <ApolloProvider client={createClient()}>
    <FeaturedChannels />
  </ApolloProvider>
));
