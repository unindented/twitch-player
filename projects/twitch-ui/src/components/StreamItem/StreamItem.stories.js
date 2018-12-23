import { storiesOf } from "@storybook/react";
import React from "react";
import StreamItem from ".";

const { data } = require("@twitch-player/data/fixtures/topStreams.json");
const [{ node: stream }] = data.streams.edges;

storiesOf("Components|StreamItem", module)
  .add("default", () => <StreamItem item={stream} />)
  .add("with error", () => <StreamItem item={null} />);
