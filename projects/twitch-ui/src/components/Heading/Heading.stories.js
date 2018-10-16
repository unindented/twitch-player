import { storiesOf } from "@storybook/react";
import React from "react";
import Heading from ".";

storiesOf("Heading", module)
  .add("Level 1", () => <Heading level="1">Heading Level 1</Heading>)
  .add("Level 2", () => <Heading level="2">Heading Level 2</Heading>)
  .add("Level 3", () => <Heading level="3">Heading Level 3</Heading>);
