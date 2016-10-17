import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Input from "./index.tsx";

const story = storiesOf("Input", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors))
  ;

story.add(
  "Basic Input",
  () => (
    <Input />
  )
);
