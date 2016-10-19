import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../.storybook/decorators/centered";
import defaultColors from "../defaults";

const story = storiesOf("Hidden", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Visible",
  () => <div>Now You See Me</div>
);

story.add(
  "Hidden",
  () => <div className="visuallyhidden">Now You See Me</div>
);
