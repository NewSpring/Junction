import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Background from "./index";

const story = storiesOf("Background", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "None",
  () => <Background />
);

story.add(
  "Fill",
  () => <Background className="background--fill" />
);

story.add(
  "Cover",
  () => <Background className="background--cover" />
);

story.add(
  "Top",
  () => <Background className="background--top" />
);

story.add(
  "Right",
  () => <Background className="background--right" />
);

story.add(
  "Bottom",
  () => <Background className="background--bottom" />
);

story.add(
  "Left",
  () => <Background className="background--left" />
);

story.add(
  "Fixed",
  () => <Background className="backgrond--fixed" />
);

story.add(
  "Color",
  () => <Background className="background--primary" img={false} />
);

