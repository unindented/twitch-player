import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import TextLink from ".";

storiesOf("Components|TextLink", module).add("default", () => (
  <TextLink
    href="https://www.twitch.tv/"
    onPress={evt => {
      evt.preventDefault();
      action("pressed")(evt);
    }}
  >
    Twitch
  </TextLink>
));
