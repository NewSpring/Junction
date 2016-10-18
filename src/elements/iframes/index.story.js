import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.js";
import defaultColors from "../../defaults.js";

import IFrame, {
  Embed,
} from "./index.js";

const story = storiesOf("IFrame", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "IFrame",
  () => <IFrame />
);

story.add(
  "Embed",
  () => <Embed />
);
