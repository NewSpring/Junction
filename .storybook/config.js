import { configure, addDecorator, setAddon } from "@kadira/storybook";
import centered from "@kadira/react-storybook-decorator-centered";
import infoAddon from "@kadira/react-storybook-addon-info";

import '../src/index.css';

setAddon(infoAddon);
// addDecorator(centered);

configure(() => {
  require('../src/stories');
}, module);
