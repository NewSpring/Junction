import "storybook-addon-specifications/register";
import 'react-storybook-addon-backgrounds/register';
// import "./addons/apollo";
import "./addons/stylestats";
import "storybook-readme/register";

import addons from '@kadira/storybook-addons';

addons.register("app info", api => {
    api.setOptions({
      name: "Junction Framework",
      url: "newspring.cc"
    })
});
