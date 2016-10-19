/* eslint-disable */
import 'react-storybook-addon-backgrounds/register';
import "storybook-readme/register";
// import "./addons/apollo";
// import "./addons/stylestats";

import addons from "@kadira/storybook-addons";
/* eslint-enable */

addons.register("app info", (api) => {
  api.setOptions({
    name: "Junction Framework",
    url: "newspring.cc",
  });
});
