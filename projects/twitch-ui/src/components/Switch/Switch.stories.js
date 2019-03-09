import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Switch from ".";

storiesOf("Static Components|Switch", module)
  .add("off", () => <Switch value={false} onValueChange={action("changed")} />)
  .add("on", () => <Switch value={true} onValueChange={action("changed")} />)
  .add("disabled", () => <Switch value={false} disabled={true} />);
