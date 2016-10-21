import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Overlay from "./index";

const story = storiesOf("Overlay", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Default",
  () => <Overlay className="overlay">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Brand",
  () => <Overlay className="overlay--brand">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Solid Light",
  () => <Overlay className="overlay--solid-light">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Solid Dark",
  () => <Overlay className="overlay--solid-dark">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Gradient",
  () => <Overlay className="overlay--gradient">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Gradient Left",
  () => <Overlay className="overlay--gradient-left">I&quot;m Shaded</Overlay>,
  { propTables: false }
);

story.add(
  "Gradient Right",
  () => <Overlay className="overlay--gradient-right">I&quot;m Shaded</Overlay>,
  { propTables: false }
);
