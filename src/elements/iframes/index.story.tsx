import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import IFrame, {
  Embed,
} from "./index.tsx";

const story = storiesOf("IFrame", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "IFrame",
  () => <IFrame />
);

story.add(
  "Embed",
  () => <Embed />
);
