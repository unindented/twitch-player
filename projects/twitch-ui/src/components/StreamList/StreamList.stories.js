import { storiesOf } from "@storybook/react";
import React from "react";
import StreamList from ".";

const {
  data: { featuredStreams },
} = require("@twitch-player/data/fixtures/featuredStreams.json");
const featuredStreamsList = featuredStreams.map(({ stream }) => stream);

const {
  data: {
    streams: { edges: topStreams },
  },
} = require("@twitch-player/data/fixtures/topStreams.json");
const topStreamsList = topStreams.map(({ node }) => node);

storiesOf("Components|StreamList", module)
  .add("featured streams", () => <StreamList list={featuredStreamsList} />)
  .add("top streams", () => <StreamList list={topStreamsList} />)
  .add("streams with error", () => (
    <StreamList
      list={Object.assign([], topStreamsList, { 2: { key: "ERROR" } })}
    />
  ));
