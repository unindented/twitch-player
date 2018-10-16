import { storiesOf } from "@storybook/react";
import React from "react";
import ExternalLink from ".";

storiesOf("ExternalLink", module).add("default", () => (
  <ExternalLink href="https://www.twitch.tv/">Twitch</ExternalLink>
));
