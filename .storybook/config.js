import { configure, addDecorator, setAddon } from "@kadira/storybook";
import centered from "@kadira/react-storybook-decorator-centered";
import infoAddon from "@kadira/react-storybook-addon-info";
import backgroundColor from '../addons/background-color';

import '!style!css!sass!../src/index.scss';

setAddon(infoAddon);
addDecorator(centered);
addDecorator(backgroundColor([
  "#6bac43", "#1c683e", "#2a4930", // greens
  "#303030", "#505050", "#858585", // darks
  "#ffffff", "#f7f7f7", "#dddddd", // light
  "#c64f55", // red
]));

configure(() => {
  require('../src/index.tsx');
}, module);
