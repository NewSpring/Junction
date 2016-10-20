import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Transition from "./index";

const story = storiesOf("Transitions", module)
  .addDecorator(centered);

story.add(
  "All Transitions",
  () => (
    <Transition />
  )
);
