import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Readme from "./README.md";

import Button, {
  ButtonFilled,
  ButtonSmall,
  ButtonDisabled,
  ButtonCorners,
  ButtonLight,
  ButtonDarkTertiary,
  ButtonDarkPrimary,
  ButtonDarkSecondary,
  ButtonAlert,
  ButtonIcon,
} from "./index";

const story = storiesOf("Buttons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Primary",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><Button>Click Here</Button></div>
  )
);

story.add(
  "Filled",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonFilled>Click Here</ButtonFilled></div>
  )
);

story.add(
  "Small",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonSmall>Click Here</ButtonSmall></div>
  )
);

story.add(
  "Disabled",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonDisabled>Click Here</ButtonDisabled></div>
  )
);

story.add(
  "Corners",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonCorners>Click Here</ButtonCorners></div>
  )
);

story.add(
  "Light",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonLight>Click Here</ButtonLight></div>
  )
);

story.add(
  "Dark Primary",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonDarkPrimary>Click Here</ButtonDarkPrimary></div>
  )
);

story.add(
  "Dark Secondary",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonDarkSecondary>Click Here</ButtonDarkSecondary></div>
  )
);

story.add(
  "Dark Tertiary",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonDarkTertiary>Click Here</ButtonDarkTertiary></div>
  )
);

story.add(
  "Alert",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonAlert>Click Here</ButtonAlert></div>
  )
);

story.add(
  "Icon",
  withReadme(
    Readme,
    () => <div className="text-center one-whole"><ButtonIcon>Click Here</ButtonIcon></div>
  )
);
