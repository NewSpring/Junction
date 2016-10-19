import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

const story = storiesOf("Constrain", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Unconstrained",
  () => (
    <div>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi.
        Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
        id sollicitudin odio orci vel risus.
      </p>
    </div>
  )
);

story.add(
  "Constrained",
  () => (
    <div className="constrain-copy">
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi.
        Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum,
        id sollicitudin odio orci vel risus.
      </p>
    </div>
  )
);

