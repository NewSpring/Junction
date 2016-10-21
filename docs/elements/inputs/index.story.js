import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Input from "./index";

const story = storiesOf("Input", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors));

story.add(
  "Basic Input",
  () => (
    <Input />
  )
);
