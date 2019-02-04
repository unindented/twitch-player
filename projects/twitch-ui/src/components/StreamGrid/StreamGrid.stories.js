import { storiesOf } from "@storybook/react";
import React from "react";
import StreamGrid from ".";

const {
  data: {
    game: {
      streams: { edges: categoryStreams },
    },
  },
} = require("@twitch-player/data/fixtures/categoryStreams.json");
const categoryStreamsList = categoryStreams.map(({ node }) => node);

storiesOf("Components|StreamGrid", module).add("default", () => (
  <StreamGrid list={categoryStreamsList} />
));
