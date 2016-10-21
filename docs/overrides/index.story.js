import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../.storybook/decorators/centered";
import defaultColors from "../defaults";

import Readme from "./README.md";

const story = storiesOf("Hidden", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Visible",
  withReadme(Readme,
    () => <div>Now You See Me</div>
  )
);

story.add(
  "Hidden",
  withReadme(Readme,
    () => <div className="visuallyhidden">Now You See Me</div>
  )
);
