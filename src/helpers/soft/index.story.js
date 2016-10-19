import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Soft from "./index";

const story = storiesOf("Soft", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Base",
  () => <Soft />
);

story.add(
  "Soft",
  () => <Soft className="soft" />
);

story.add(
  "Soft Top",
  () => <Soft className="soft-top" />
);

story.add(
  "Soft Right",
  () => <Soft className="soft-right" />
);

story.add(
  "Soft Bottom",
  () => <Soft className="soft-bottom" />
);

story.add(
  "Soft Left",
  () => <Soft className="soft-left" />
);

story.add(
  "Soft Ends",
  () => <Soft className="soft-ends" />
);

story.add(
  "Soft Sides",
  () => <Soft className="soft-sides" />
);
