import { storiesOf } from "@storybook/react";
import React from "react";
import InternalTextLink from ".";

storiesOf("Static Components|InternalTextLink", module).add("default", () => (
  <InternalTextLink href="/settings">Settings</InternalTextLink>
));
