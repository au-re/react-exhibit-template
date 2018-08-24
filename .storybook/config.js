import "../src/styles/global";

import { setOptions } from "@storybook/addon-options";
import { configure } from "@storybook/react";

setOptions({
  name: "refresh-template-library",
  url: "https://github.com/au-re/refresh-template-library",
  goFullScreen: false,
  showDownPanel: false,
  downPanelInRight: false,
});

const req = require.context("../src", true, /.+\.stories\.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
