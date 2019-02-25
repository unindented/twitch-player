import { storiesOf } from "@storybook/react";
import React from "react";
import Main from "../Main";
import CategoryList from ".";

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const topCategoriesList = topCategories.map(({ node }) => node);

storiesOf("Components|CategoryList", module)
  .add("top categories", () => (
    <Main>
      <CategoryList list={topCategoriesList} />
    </Main>
  ))
  .add("categories with error", () => (
    <Main>
      <CategoryList
        list={Object.assign([], topCategoriesList, { 2: { key: "ERROR" } })}
      />
    </Main>
  ));
