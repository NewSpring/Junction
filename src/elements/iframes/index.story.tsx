import { storiesOf } from "@kadira/storybook";

import IFrame, {
  Embed,
} from "./index.tsx";

const story = storiesOf("IFrame", module);

story.add(
  "IFrame",
  () => <IFrame />
);

story.add(
  "Embed",
  () => <Embed />
);
