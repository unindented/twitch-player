import { storiesOf } from "@storybook/react";
import React from "react";
import Spinner from "../Spinner";
import Main from ".";

storiesOf("Main", module).add("default", () => (
  <Main>
    <Spinner />
  </Main>
));
