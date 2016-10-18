import { storiesOf } from "@kadira/storybook";

import Overlay from "./index.js";

const story = storiesOf("Overlay", module);

story.addWithInfo(
  "Default",
  "",
  () => <Overlay className="overlay">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Brand",
  "",
  () => <Overlay className="overlay--brand">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Solid Light",
  "",
  () => <Overlay className="overlay--solid-light">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Solid Dark",
  "",
  () => <Overlay className="overlay--solid-dark">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Gradient",
  "",
  () => <Overlay className="overlay--gradient">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Gradient Left",
  "",
  () => <Overlay className="overlay--gradient-left">I'm Shaded</Overlay>,
  { propTables: false }
);

story.addWithInfo(
  "Gradient Right",
  "",
  () => <Overlay className="overlay--gradient-right">I'm Shaded</Overlay>,
  { propTables: false }
);
