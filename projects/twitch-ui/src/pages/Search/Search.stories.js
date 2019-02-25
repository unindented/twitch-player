import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../../components/Main";
import Search from ".";

storiesOf("Pages|Search", module).add("default", () => (
  <Main>
    <Search />
  </Main>
));
