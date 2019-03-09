import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "../Text";
import ExternalTouchableLink from ".";

storiesOf("Static Components|ExternalTouchableLink", module).add(
  "default",
  () => (
    <ExternalTouchableLink href="https://www.twitch.tv/">
      <Text>Twitch</Text>
    </ExternalTouchableLink>
  )
);
