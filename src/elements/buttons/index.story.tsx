import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Button, {
  ButtonFilled,
  ButtonSmall,
  ButtonGray,
  ButtonDisabled,
  ButtonCorners,
  ButtonLight,
  ButtonDarkTertiary,
  ButtonDarkPrimary,
  ButtonDarkSecondary,
  ButtonAlert,
  ButtonIcon,
} from "./index.tsx";

const story = storiesOf("Buttons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors))
  ;

story.add(
  "Primary",
  () => <div className="text-center one-whole"><Button>Click Here</Button></div>
);

story.add(
  "Filled",
  () => <div className="text-center one-whole"><ButtonFilled>Click Here</ButtonFilled></div>
);

story.add(
  "Small",
  () => <div className="text-center one-whole"><ButtonSmall>Click Here</ButtonSmall></div>
);

story.add(
  "Grey",
  () => <div className="text-center one-whole"><ButtonGray>Click Here</ButtonGray></div>
);

story.add(
  "Disabled",
  () => <div className="text-center one-whole"><ButtonDisabled>Click Here</ButtonDisabled></div>
);

story.add(
  "Corners",
  () => <div className="text-center one-whole"><ButtonCorners>Click Here</ButtonCorners></div>
);

story.add(
  "Light",
  () => <div className="text-center one-whole"><ButtonLight>Click Here</ButtonLight></div>
);

story.add(
  "Dark Primary",
  () => <div className="text-center one-whole"><ButtonDarkPrimary>Click Here</ButtonDarkPrimary></div>
);

story.add(
  "Dark Secondary",
  () => <div className="text-center one-whole"><ButtonDarkSecondary>Click Here</ButtonDarkSecondary></div>
);

story.add(
  "Dark Tertiary",
  () => <div className="text-center one-whole"><ButtonDarkTertiary>Click Here</ButtonDarkTertiary></div>
);

story.add(
  "Alert",
  () => <div className="text-center one-whole"><ButtonAlert>Click Here</ButtonAlert></div>
);

story.add(
  "Icon",
  () => <div className="text-center one-whole"><ButtonIcon>Click Here</ButtonIcon></div>
);
