import { storiesOf } from "@storybook/react";
import React from "react";
import ChannelPlayerFrame from ".";

storiesOf("Static Components|ChannelPlayerFrame", module).add("default", () => (
  <ChannelPlayerFrame name="twitchpresents" />
));
