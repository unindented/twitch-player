import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../Main";
import ChannelGrid from ".";

const {
  data: {
    category: {
      channels: { edges: categoryChannels },
    },
  },
} = require("@twitch-player/data/fixtures/categoryChannels.json");
const categoryChannelsList = categoryChannels.map(({ node }) => node);

storiesOf("Static Components|ChannelGrid", module).add("default", () => (
  <Main>
    <ChannelGrid list={categoryChannelsList} />
  </Main>
));
