import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Accordion from "./index";

const story = storiesOf("Accordions", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Closed",
  () => <Accordion className="accordion__item" />
);

story.add(
  "Expanded",
  () => <Accordion className="accordion__item expanded" />
);
