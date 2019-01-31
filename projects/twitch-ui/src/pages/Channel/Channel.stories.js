import { storiesOf } from "@storybook/react";
import React from "react";
import Channel from ".";

storiesOf("Pages|Channel", module).add("default", () => (
  <Channel match={{ params: { name: "twitchpresents" } }} />
));
