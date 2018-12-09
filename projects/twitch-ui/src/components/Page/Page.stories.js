import { storiesOf } from "@storybook/react";
import React from "react";
import Spinner from "../Spinner";
import Page from ".";

storiesOf("Page", module).add("default", () => (
  <Page>
    <Spinner />
  </Page>
));