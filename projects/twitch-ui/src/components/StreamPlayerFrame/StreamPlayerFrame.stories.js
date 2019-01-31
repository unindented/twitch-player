import { storiesOf } from "@storybook/react";
import React from "react";
import StreamPlayerFrame from ".";

storiesOf("Components|StreamPlayerFrame", module).add("default", () => (
  <StreamPlayerFrame name="twitchpresents" />
));
