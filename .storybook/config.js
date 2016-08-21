import { configure, addDecorator, setAddon } from "@kadira/storybook";
import centered from "@kadira/react-storybook-decorator-centered";
import infoAddon from "@kadira/react-storybook-addon-info";

import backgroundColor from './decorators/background-color';
import apollo from "./decorators/apollo";

import ApolloClient, { createNetworkInterface } from "apollo-client";

import '!style!css!sass!../src/index.scss';

const req = require.context('../src/', true, /\.story.tsx$/)

const networkInterface = createNetworkInterface("https://api.newspring.cc/graphql");
const client = new ApolloClient({ networkInterface });

setAddon(infoAddon);
addDecorator(apollo(client));
addDecorator(centered);
addDecorator(backgroundColor([
  "#ffffff", "#f7f7f7", "#dddddd", // light
  "#303030", "#505050", "#858585", // darks
  "#6bac43", "#1c683e", "#2a4930", // greens
  "#c64f55", // red
]));

configure(() => {
  req.keys().forEach(req)
}, module);
