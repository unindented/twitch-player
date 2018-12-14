import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Picker from ".";

const values = {
  foo: "Foo",
  bar: "Bar",
};

storiesOf("Components|Picker", module)
  .add("without selected value", () => (
    <Picker values={values} onValueChange={action("changed")} />
  ))
  .add("with selected value", () => (
    <Picker
      values={values}
      selectedValue="bar"
      onValueChange={action("changed")}
    />
  ));
