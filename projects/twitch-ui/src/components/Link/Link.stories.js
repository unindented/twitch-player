import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Link from ".";

storiesOf("Components|Link", module).add("default", () => (
  <Link
    href="https://www.twitch.tv/"
    onPress={evt => {
      evt.preventDefault();
      action("pressed")(evt);
    }}
  >
    Twitch
  </Link>
));
