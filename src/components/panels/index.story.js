import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Panel from "./index";

const story = storiesOf("Panels", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Panel",
  () => <Panel />
);
