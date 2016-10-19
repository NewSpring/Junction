import { storiesOf } from "@kadira/storybook";

import Progress from "./index";

const story = storiesOf("Progress", module);

story.add(
  "Basic Progress Bar",
  () => (
    <Progress progress="33" />
  )
);

story.add(
  "Active Progress Bar",
  () => (
    <Progress progress="33" active />
  )
);
