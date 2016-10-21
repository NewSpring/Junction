import { storiesOf } from "@kadira/storybook";
// import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
// import defaultColors from "../../defaults";

import Corners from "./index";

const story = storiesOf("Rounded Corners", module)
  .addDecorator(centered);

story.add(
  "Rounded Corners",
  () => (
    <Corners />
  )
);

story.add(
  "Rounded Top Corners",
  () => (
    <Corners className="rounded-top" />
  )
);

story.add(
  "Rounded Bottom Corners",
  () => (
    <Corners className="rounded-bottom" />
  )
);

story.add(
  "Rounded Left Corners",
  () => (
    <Corners className="rounded-left" />
  )
);

story.add(
  "Rounded Right Corners",
  () => (
    <Corners className="rounded-right" />
  )
);
