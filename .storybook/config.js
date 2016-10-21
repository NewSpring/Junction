import { configure, addDecorator, setAddon } from "@kadira/storybook";
import { setOptions } from '@kadira/storybook-addon-options';

import "!style!css!sass!../src/index.scss"; // eslint-disable-line

setOptions({
  name: 'Junction',
  url: 'https://github.com/NewSpring/Junction',
  downPanelInRight: true,
  showLeftPanel: true,
  showDownPanel: true,
});

const req = require.context("../src/", true, /\.story.js$/);
configure(() => {
  req.keys().forEach(req);
}, module);
