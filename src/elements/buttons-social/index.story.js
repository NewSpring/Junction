import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import ButtonSocial from "./index";
import Readme from "./README.md";

const story = storiesOf("Social Buttons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.addWithInfo(
  "Facebook",
  withReadme(Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--facebook">
          Facebook
        </ButtonSocial>
      </div>
    )
  ),
  { propTables: false }
);

story.addWithInfo(
  "Google",
  withReadme(Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--google">
          Google
        </ButtonSocial>
      </div>
    )
  ),
  { propTables: false }
);

story.addWithInfo(
  "Twitter",
  withReadme(Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--twitter">
          Twitter
        </ButtonSocial>
      </div>
    )
  ),
  { propTables: false }
);

story.addWithInfo(
  "Instagram",
  withReadme(Readme,
    () => (
      <div className="text-center one-whole">
        <ButtonSocial className="btn--instagram">
          Instagram
        </ButtonSocial>
      </div>
    )
  ),
  { propTables: false }
);
