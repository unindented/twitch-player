import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../Main";
import ChannelList from ".";

const {
  data: { channels },
} = require("@twitch-player/data/fixtures/featuredChannels.json");
const featuredChannelsList = channels.map(({ node }) => node);

const {
  data: {
    channels: { edges: topChannels },
  },
} = require("@twitch-player/data/fixtures/topChannels.json");
const topChannelsList = topChannels.map(({ node }) => node);

storiesOf("Components|ChannelList", module)
  .add("featured channels", () => (
    <Main>
      <ChannelList list={featuredChannelsList} />
    </Main>
  ))
  .add("top channels", () => (
    <Main>
      <ChannelList list={topChannelsList} />
    </Main>
  ))
  .add("channels with error", () => (
    <Main>
      <ChannelList
        list={Object.assign([], topChannelsList, { 2: { key: "ERROR" } })}
      />
    </Main>
  ));
