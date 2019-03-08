import { addDecorator, addParameters, configure } from "@storybook/react";
import { create } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";
import { init as initI18n } from "@twitch-player/i18n";
import { defaultDecorator } from "./decorators";

const pkg = require("../../package.json");
const brandTitle = pkg.productName;
const brandUrl = pkg.repository.url;
const brandImage = null;

initI18n({
  detection: {
    order: ["navigator", "htmlTag"],
  },
});

addDecorator(withKnobs);
addDecorator(defaultDecorator);

addParameters({
  options: {
    theme: create({
      base: "light",
      brandTitle,
      brandUrl,
      brandImage,
    }),
  },
});

const context = require.context("../../src", true, /\.stories\.js$/);

const loadStories = () => {
  context.keys().forEach(context);
};

configure(loadStories, module);
