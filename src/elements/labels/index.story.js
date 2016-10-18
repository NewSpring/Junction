import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.js";
import defaultColors from "../../defaults.js";

import Label from "./index.js";

const story = storiesOf("Labels", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Basic Label",
  () => (
    <Label>This is a label</Label>
  )
);
