import { storiesOf } from "@kadira/storybook";

import Section from "./index.tsx";

const story = storiesOf("Sections", module);

story.add(
  "Basic Section",
  () => (
    <Section>This is a Section</Section>
  )
);
