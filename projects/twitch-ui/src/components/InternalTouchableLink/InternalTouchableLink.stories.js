import { storiesOf } from "@storybook/react";
import React from "react";
import Text from "../Text";
import InternalTouchableLink from ".";

storiesOf("Components|InternalTouchableLink", module).add("default", () => (
  <InternalTouchableLink href="/settings">
    <Text>Settings</Text>
  </InternalTouchableLink>
));
