import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Readme from "./README.md";

import ButtonSocial from "./index";


const story = storiesOf("Social Buttons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Facebook",
  withReadme(
    Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--facebook">
          Facebook
        </ButtonSocial>
      </div>
    ),
  )
);

story.add(
  "Google",
  withReadme(
    Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--google">
          Google
        </ButtonSocial>
      </div>
    ),
  )
);

story.add(
  "Twitter",
  withReadme(
    Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--twitter">
          Twitter
        </ButtonSocial>
      </div>
    ),
  )
);

story.add(
  "Instagram",
  withReadme(
    Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--instagram">
          Instagram
        </ButtonSocial>
      </div>
    ),
  )
);
