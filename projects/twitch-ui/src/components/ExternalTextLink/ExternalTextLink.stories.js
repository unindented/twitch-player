import { storiesOf } from "@storybook/react";
import React from "react";
import ExternalTextLink from ".";

storiesOf("Components|ExternalTextLink", module).add("default", () => (
  <ExternalTextLink href="https://www.twitch.tv/">Twitch</ExternalTextLink>
));
