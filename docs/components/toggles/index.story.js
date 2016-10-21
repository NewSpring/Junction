import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Toggle from "./index";

const story = storiesOf("Toggles", module)
  .addDecorator(centered);

story.add(
  "Basic Toggle", () => (
    <Toggle className="toggle__item" />
  )
);

story.add(
  "Toggle Active", () => (
    <Toggle className="toggle__item--active" />
  )
);

story.add(
  "Toggle Arrow", () => (
    <Toggle className="toggle__item toggle-arrow__item" />
  )
);

story.add(
  "Toggle Active & Arrow", () => (
    <Toggle className="toggle__item--active toggle-arrow__item" />
  )
);
