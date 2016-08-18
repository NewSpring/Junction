import { configure, addDecorator, setAddon } from "@kadira/storybook";
import centered from "@kadira/react-storybook-decorator-centered";
import infoAddon from "@kadira/react-storybook-addon-info";

import '!style!css!sass!../src/index.scss';

setAddon(infoAddon);
addDecorator(centered);

configure(() => {
  require('../src/index.tsx');
}, module);
