import { storiesOf } from "@storybook/react";
import React from "react";
import CategoryItem from ".";

const { data } = require("@twitch-player/data/fixtures/topCategories.json");
const [{ node: category }] = data.categories.edges;

storiesOf("Components|CategoryItem", module)
  .add("default", () => (
    <CategoryItem item={category} width={188} height={250} />
  ))
  .add("with error", () => (
    <CategoryItem item={null} width={188} height={250} />
  ));
