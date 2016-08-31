import { storiesOf } from "@kadira/storybook";

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

const story = storiesOf("Buttons", module);

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
  () => <div className="text-center one-whole"><ButtonSmall>You Won't Click Me</ButtonSmall></div>
);

story.add(
  "Grey",
  () => <div className="text-center one-whole"><ButtonGray>You Won't Click Me</ButtonGray></div>
);

story.add(
  "Disabled",
  () => <div className="text-center one-whole"><ButtonDisabled>You Won't Click Me</ButtonDisabled></div>
);

story.add(
  "Corners",
  () => <div className="text-center one-whole"><ButtonCorners>You Won't Click Me</ButtonCorners></div>
);

story.add(
  "Light",
  () => <div className="text-center one-whole"><ButtonLight>You Won't Click Me</ButtonLight></div>
);

story.add(
  "Dark Primary",
  () => <div className="text-center one-whole"><ButtonDarkPrimary>You Won't Click Me</ButtonDarkPrimary></div>
);

story.add(
  "Dark Secondary",
  () => <div className="text-center one-whole"><ButtonDarkSecondary>You Won't Click Me</ButtonDarkSecondary></div>
);

story.add(
  "Dark Tertiary",
  () => <div className="text-center one-whole"><ButtonDarkTertiary>You Won't Click Me</ButtonDarkTertiary></div>
);

story.add(
  "Alert",
  () => <div className="text-center one-whole"><ButtonAlert>You Won't Click Me</ButtonAlert></div>
);

story.add(
  "Icon",
  () => <div className="text-center one-whole"><ButtonIcon>You Won't Click Me</ButtonIcon></div>
);
