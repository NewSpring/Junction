
import { Component } from "react";
import { configure, addDecorator, setAddon } from "@kadira/storybook";
// import centered from "@kadira/react-storybook-decorator-centered";
import infoAddon from "@kadira/react-storybook-addon-info";

import backgroundColor from './decorators/background-color';
import apollo from "./decorators/apollo";
import devices from "./decorators/devices";

import ApolloClient, { createNetworkInterface } from "apollo-client";

import '!style!css!sass!../src/index.scss';

const req = require.context('../src/', true, /\.story.js$/)

const networkInterface = createNetworkInterface("https://api.newspring.cc/graphql");
const client = new ApolloClient({ networkInterface });

addDecorator(devices());
setAddon(infoAddon);
addDecorator(apollo(client));

configure(() => {
  req.keys().forEach(req)
}, module);
