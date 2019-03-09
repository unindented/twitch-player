import { storiesOf } from "@storybook/react";
import React from "react";
import Spinner from "../Spinner";
import Page from ".";

storiesOf("Static Components|Page", module).add("default", () => (
  <Page>
    <Spinner />
  </Page>
));
