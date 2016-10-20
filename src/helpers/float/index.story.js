import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Float from "./index";

const story = storiesOf("Float", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
    "None",
    () => <Float className="float-none" />
);

story.add(
    "Left",
    () => <Float className="float-left" />
);

story.add(
    "Right",
    () => <Float className="float-right" />
);

story.add(
    "Inherit",
    () => <Float className="float-inherit" />
);

story.add(
    "Clearfix",
    () => <Float className="clearfix" />
);

