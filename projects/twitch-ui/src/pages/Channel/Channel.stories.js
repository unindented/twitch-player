import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../../components/Main";
import Channel from ".";

storiesOf("Pages|Channel", module).add("default", () => (
  <Main>
    <Channel match={{ params: { name: "twitchpresents" } }} />
  </Main>
));
