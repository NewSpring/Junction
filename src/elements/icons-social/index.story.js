import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import IconSocial, { IconSocialFilled } from "./index";

const story = storiesOf("Social Icons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Unfilled",
  () => (
    <div className="text-center one-whole">
      <IconSocial className="icon--facebook" />
      <IconSocial className="icon--google" />
      <IconSocial className="icon--twitter" />
      <IconSocial className="icon--instagram" />
    </div>
  )
);

story.add(
  "Filled",
  () => (
    <div className="text-center one-whole">
      <IconSocialFilled className="icon--facebook" />
      <IconSocialFilled className="icon--google" />
      <IconSocialFilled className="icon--twitter" />
      <IconSocialFilled className="icon--instagram" />
    </div>
  )
);
