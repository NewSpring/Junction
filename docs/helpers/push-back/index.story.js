import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import PushBack from "./index";

const story = storiesOf("Push Back", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Base",
  () => <PushBack />
);

story.add(
  "Top",
  () => <PushBack className="push-back-top" />
);

story.add(
  "Right",
  () => <PushBack className="push-back-right" />
);

story.add(
  "Bottom",
  () => <PushBack className="push-back-bottom" />
);

story.add(
  "Left",
  () => <PushBack className="push-back-left" />
);

story.add(
  "Half Top",
  () => <PushBack className="push-back-half-top" />
);

story.add(
  "Half Right",
  () => <PushBack className="push-back-half-right" />
);

story.add(
  "Half Bottom",
  () => <PushBack className="push-back-half-bottom" />
);

story.add(
  "Half Left",
  () => <PushBack className="push-back-half-left" />
);

story.add(
  "Double Top",
  () => <PushBack className="push-back-double-top" />
);

story.add(
  "Double Right",
  () => <PushBack className="push-back-double-right" />
);

story.add(
  "Double Bottom",
  () => <PushBack className="push-back-double-bottom" />
);

story.add(
  "Double Left",
  () => <PushBack className="push-back-double-left" />
);

