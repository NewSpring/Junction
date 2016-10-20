import { storiesOf } from "@kadira/storybook";
import withReadme from "storybook-readme/with-readme";

import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import LockedReadme from "./README.md";
import Locked from "./index";

const story = storiesOf("Locked", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Base",
  withReadme(LockedReadme,
  () => <Locked />
));

story.add(
  "Locked",
  withReadme(LockedReadme,
  () => <Locked className="locked" />
));

story.add(
  "Locked Left",
  withReadme(LockedReadme,
  () => <Locked className="locked-left" />
));

story.add(
  "Locked Right",
  withReadme(LockedReadme,
  () => <Locked className="locked-right" />
));

story.add(
  "Locked Top",
  withReadme(LockedReadme,
  () => <Locked className="locked-top" />
));

story.add(
  "Locked Middle",
  withReadme(LockedReadme,
  () => <Locked className="locked-middle" />
));

story.add(
  "Locked Center",
  withReadme(LockedReadme,
  () => <Locked className="locked-center" />
));

story.add(
  "Locked Bottom",
  withReadme(LockedReadme,
  () => <Locked className="locked-bottom" />
));

story.add(
  "Locked Ends",
  withReadme(LockedReadme,
  () => <Locked className="locked-ends" />
));

story.add(
  "Locked Sides",
  withReadme(LockedReadme,
  () => <Locked className="locked-sides" />
));
