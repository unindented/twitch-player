import { storiesOf } from "@storybook/react";
import React from "react";
import ChannelItem from ".";

const { data } = require("@twitch-player/data/fixtures/topChannels.json");
const [{ node: channel }] = data.channels.edges;

storiesOf("Static Components|ChannelItem", module)
  .add("default", () => <ChannelItem item={channel} width={400} height={225} />)
  .add("with error", () => (
    <ChannelItem item={null} width={400} height={225} />
  ));
