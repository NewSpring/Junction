import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Hard from "./index";

const story = storiesOf("Hard", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Base",
  () => <Hard />
);

story.add(
  "Hard",
  () => <Hard className="hard" />
);

story.add(
  "Hard Top",
  () => <Hard className="hard-top" />
);

story.add(
  "Hard Right",
  () => <Hard className="hard-right" />
);

story.add(
  "Hard Bottom",
  () => <Hard className="hard-bottom" />
);

story.add(
  "Hard Left",
  () => <Hard className="hard-left" />
);

story.add(
  "Hard Ends",
  () => <Hard className="hard-ends" />
);

story.add(
  "Hard Sides",
  () => <Hard className="hard-sides" />
);
