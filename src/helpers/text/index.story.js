import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

const story = storiesOf("Text", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
    "Left",
    () => (
      <div className="one-half text-left">
        <h2>Heading 2</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. etiam sit amet urna nisi.
          nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
          id sollicitudin odio orci vel risus.
        </p>
      </div>
    )
);

story.add(
    "Center",
    () => (
      <div className="one-half text-center">
        <h2>Heading 2</h2>
        <p>
          Loem ipsum dolor sit amet, consectetur adipiscing elit. etiam sit amet urna nisi.
          nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
          id sollicitudin odio orci vel risus.
        </p>
      </div>
    )
);

story.add(
    "Right",
    () => (
      <div className="one-half text-right">
        <h2>Heading 2</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. etiam sit amet urna nisi.
          nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
          id sollicitudin odio orci vel risus.
        </p>
      </div>
    )
);

story.add(
    "Color",
    () => (
      <div className="one-half text-brand">
        <h2>Heading 2</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. etiam sit amet urna nisi.
          nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
          id sollicitudin odio orci vel risus.
        </p>
      </div>
    )
);
