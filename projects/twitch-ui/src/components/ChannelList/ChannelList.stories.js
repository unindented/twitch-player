import { storiesOf } from "@storybook/react";
import React from "react";
import ChannelList from ".";

const {
  data: { channels },
} = require("@twitch-player/data/fixtures/featuredChannels.json");
const featuredChannelsList = channels.map(({ channel }) => channel);

const {
  data: {
    channels: { edges: topChannels },
  },
} = require("@twitch-player/data/fixtures/topChannels.json");
const topChannelsList = topChannels.map(({ node }) => node);

storiesOf("Components|ChannelList", module)
  .add("featured channels", () => <ChannelList list={featuredChannelsList} />)
  .add("top channels", () => <ChannelList list={topChannelsList} />)
  .add("channels with error", () => (
    <ChannelList
      list={Object.assign([], topChannelsList, { 2: { key: "ERROR" } })}
    />
  ));
