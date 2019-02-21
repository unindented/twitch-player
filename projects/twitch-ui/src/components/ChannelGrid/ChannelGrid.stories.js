import { storiesOf } from "@storybook/react";
import React from "react";
import ChannelGrid from ".";

const {
  data: {
    category: {
      channels: { edges: categoryChannels },
    },
  },
} = require("@twitch-player/data/fixtures/categoryChannels.json");
const categoryChannelsList = categoryChannels.map(({ node }) => node);

storiesOf("Components|ChannelGrid", module).add("default", () => (
  <ChannelGrid list={categoryChannelsList} />
));
