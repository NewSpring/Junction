import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Typography from "./index";
import Readme from "./README.md";

const story = storiesOf("Typography", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Typography",
  withReadme(Readme,
    () => (
      <Typography />
    )
  )
);
