import "storybook-addon-specifications/register";
import "./addons/apollo";

import addons from '@kadira/storybook-addons';


addons.register("app info", api => {
    api.setOptions({
      name: "Junction Framework",
      url: "newspring.cc"
    })
});
