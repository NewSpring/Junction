import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Push from "./index";

const story = storiesOf("Push", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Base",
  () => <Push />
);

story.add(
  "Push",
  () => <Push className="push" />
);

story.add(
  "Push Top",
  () => <Push className="push-top" />
);

story.add(
  "Push Right",
  () => <Push className="push-right" />
);

story.add(
  "Push Bottom",
  () => <Push className="push-bottom" />
);

story.add(
  "Push Left",
  () => <Push className="push-left" />
);

story.add(
  "Push Ends",
  () => <Push className="push-ends" />
);

story.add(
  "Push Sides",
  () => <Push className="push-sides" />
);
