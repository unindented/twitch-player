import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import RetryButton from ".";

storiesOf("Components|RetryButton", module).add("default", () => (
  <RetryButton onPress={action("pressed")} />
));
