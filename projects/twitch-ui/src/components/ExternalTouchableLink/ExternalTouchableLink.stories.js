import { storiesOf } from "@storybook/react";
import React from "react";
import ExternalTouchableLink from ".";

storiesOf("Components|ExternalTouchableLink", module).add("default", () => (
  <ExternalTouchableLink href="https://www.twitch.tv/">
    Twitch
  </ExternalTouchableLink>
));
