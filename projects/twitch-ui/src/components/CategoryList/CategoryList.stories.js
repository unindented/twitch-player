import { storiesOf } from "@storybook/react";
import React from "react";
import CategoryList from ".";

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const topCategoriesList = topCategories.map(({ node }) => node);

storiesOf("Components|CategoryList", module)
  .add("top categories", () => <CategoryList list={topCategoriesList} />)
  .add("categories with error", () => (
    <CategoryList
      list={Object.assign([], topCategoriesList, { 2: { key: "ERROR" } })}
    />
  ));
