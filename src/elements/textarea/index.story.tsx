import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import TextArea from "./index.tsx";

const story = storiesOf("TextArea", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors))
  ;

story.add(
  "Basic TextArea",
  () => (
    <TextArea>
      Hello World
    </TextArea>
  )
);
