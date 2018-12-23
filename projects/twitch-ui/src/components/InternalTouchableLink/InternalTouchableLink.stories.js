import { storiesOf } from "@storybook/react";
import React from "react";
import InternalTouchableLink from ".";

storiesOf("Components|InternalTouchableLink", module).add("default", () => (
  <InternalTouchableLink href="/settings">Settings</InternalTouchableLink>
));
