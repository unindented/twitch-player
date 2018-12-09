import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter as Router } from "react-router";
import InternalLink from ".";

storiesOf("Components|InternalLink", module).add("default", () => (
  <Router>
    <InternalLink href="/settings">Settings</InternalLink>
  </Router>
));
