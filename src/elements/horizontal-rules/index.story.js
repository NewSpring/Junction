import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.js";
import defaultColors from "../../defaults.js";

import HorizontalRule from "./index.js";

const story = storiesOf("HorizontalRule", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Basic Horizontal Rule",
  () => (
    <HorizontalRule />
  )
);
