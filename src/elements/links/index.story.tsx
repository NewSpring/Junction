import { storiesOf } from "@kadira/storybook";

import Link from "./index.tsx";

const story = storiesOf("Links", module);

story.add(
  "Basic Link",
  () => (
    <Link>This is a Link</Link>
  )
);

story.add(
  "Link with href",
  () => (
    <Link href="https://newspring.cc">This is a Link to newspring</Link>
  )
);
