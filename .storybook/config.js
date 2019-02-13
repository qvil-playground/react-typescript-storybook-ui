import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";

addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  require("./welcomeStory");
  // req.keys().forEarch(filename => req(filename));
}

configure(loadStories, module);
