import { storiesOf } from "@kadira/storybook";

import Panel from "./index.js";

const story = storiesOf("Panels", module);

story.add(
  "Basic Panel", () => <Panel />
);
