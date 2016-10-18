import { storiesOf } from "@kadira/storybook";

import HorizontalRule from "./index.tsx";

const story = storiesOf("HorizontalRule", module);

story.add(
  "Basic Horizontal Rule",
  () => (
    <HorizontalRule />
  )
);
