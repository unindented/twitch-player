import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "../Text";
import TouchableLink from ".";

storiesOf("Components|TouchableLink", module).add("default", () => (
  <TouchableLink
    href="https://www.twitch.tv/"
    onPress={evt => {
      evt.preventDefault();
      action("pressed")(evt);
    }}
  >
    <Text>Twitch</Text>
  </TouchableLink>
));
