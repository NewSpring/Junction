import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import HorizontalRule from "./index";

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
