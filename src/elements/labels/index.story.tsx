import { storiesOf } from "@kadira/storybook";

import Label from "./index.tsx";

const story = storiesOf("Labels", module);

story.add(
  "Basic Label",
  () => (
    <Label>This is a label</Label>
  )
);
