import { storiesOf } from "@kadira/storybook";
// import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
// import defaultColors from "../../defaults";

import Outlined from "./index";

const story = storiesOf("Outlines", module)
  .addDecorator(centered);

story.add(
  "Default Outline",
  () => (
    <Outlined />
  )
);

story.add(
  "Light Outline",
  () => (
    <Outlined className="outlined--light" />
  )
);

story.add(
  "Dotted Outline (bottom only)",
  () => (
    <Outlined className="outlined--dotted" />
  )
);

story.add(
  "Top Outline",
  () => (
    <Outlined className="outlined--top" />
  )
);

story.add(
  "Bottom Outline",
  () => (
    <Outlined className="outlined--bottom" />
  )
);

story.add(
  "Left Outline",
  () => (
    <Outlined className="outlined--left" />
  )
);

story.add(
  "Right Outline",
  () => (
    <Outlined className="outlined--right" />
  )
);

story.add(
  "No Outline",
  () => (
    <Outlined className="outlined--none" />
  )
);
