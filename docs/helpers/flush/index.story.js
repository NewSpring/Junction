import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Flush from "./index";

const story = storiesOf("Flush", module)
  .addDecorator(centered);

story.add(
  "Flush vs. Without",
  () => (
    <Flush className="flush" />
  )
);

story.add(
  "Top Flush",
  () => (
    <Flush className="flush-top" />
  )
);

story.add(
  "Bottom Flush",
  () => (
    <Flush className="flush-bottom" />
  )
);

story.add(
  "Left Flush",
  () => (
    <Flush className="flush-left" />
  )
);

story.add(
  "Right Flush",
  () => (
    <Flush className="flush-right" />
  )
);

story.add(
  "Sides Flush",
  () => (
    <Flush className="flush-sides" />
  )
);

story.add(
  "Ends Flush",
  () => (
    <Flush className="flush-ends" />
  )
);
