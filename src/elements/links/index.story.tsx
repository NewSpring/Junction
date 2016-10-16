import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Link from "./index.tsx";

const story = storiesOf("Links", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors))
  ;

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
