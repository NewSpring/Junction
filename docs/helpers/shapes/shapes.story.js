import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Shapes from "./index";

const story = storiesOf("Shapes", module)
  .addDecorator(centered);

story.add(
  "Circle",
  () => (
    <Shapes className="round" />
  )
);
