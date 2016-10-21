import { storiesOf } from "@kadira/storybook";
import withReadme from "storybook-readme/with-readme";
import backgrounds from "react-storybook-addon-backgrounds";

import centered from "../../../.storybook/decorators/centered/index";
import defaultColors from "../../defaults";

import Progress from "./index";
import ProgressReadme from "./README.md";

const story = storiesOf("Progress", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Progress Bar",
  withReadme(ProgressReadme,
  () => (
    <Progress progress="33" />
  ))
);

story.add(
  "Active Progress Bar",
  withReadme(ProgressReadme,
  () => (
    <Progress progress="33" active />
  ))
);
