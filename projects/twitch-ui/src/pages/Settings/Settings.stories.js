import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../../components/Main";
import Settings from ".";

storiesOf("Pages|Settings", module).add("default", () => (
  <Main>
    <Settings />
  </Main>
));
