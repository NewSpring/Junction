import { configure, addDecorator, setAddon } from "@kadira/storybook";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import infoAddon from "@kadira/react-storybook-addon-info"; // eslint-disable-line

import "!style!css!sass!../src/index.scss"; // eslint-disable-line

import apollo from "./decorators/apollo";
import devices from "./decorators/devices";

const req = require.context("../src/", true, /\.story.js$/);

const networkInterface = createNetworkInterface("https://api.newspring.cc/graphql");
const client = new ApolloClient({ networkInterface });

addDecorator(devices());
setAddon(infoAddon);
addDecorator(apollo(client));

configure(() => {
  req.keys().forEach(req);
}, module);
