import { storiesOf } from "@storybook/react";
import React from "react";
import CategoryGrid from ".";

const {
  data: {
    categories: { edges: topCategories },
  },
} = require("@twitch-player/data/fixtures/topCategories.json");
const categories = topCategories.map(({ node }) => node);

storiesOf("Components|CategoryGrid", module).add("default", () => (
  <CategoryGrid list={categories} />
));
