import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index";
import defaultColors from "../../defaults";

import Label from "./index";

const story = storiesOf("Labels", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Label",
  () => (
    <Label>This is a label</Label>
  )
);
