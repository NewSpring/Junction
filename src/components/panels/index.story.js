import { storiesOf } from "@kadira/storybook";

import Panel from "./index";

const story = storiesOf("Panels", module);

story.add(
  "Basic Panel", () => <Panel />
);
