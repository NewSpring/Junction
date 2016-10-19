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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi. Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum, id sollicitudin odio orci vel risus. Maecenas dictum bibendum efficitur. Morbi tortor ex, volutpat varius pretium eu, lacinia a lectus. Donec pellentesque aliquam felis, in sagittis urna suscipit at. Cras ac quam a diam posuere congue sit amet a orci. Praesent ex lorem, hendrerit in leo pharetra, tempus euismod lorem. Mauris sed iaculis tortor. Donec purus nulla, ultrices vel justo quis, congue sagittis leo. Vestibulum ut lorem dapibus, fermentum nisi at, volutpat libero. Vivamus sed nunc tellus.</p>
      </div>
    )
);

story.add(
    "Center",
    () => (
      <div className="one-half text-center">
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi. Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum, id sollicitudin odio orci vel risus. Maecenas dictum bibendum efficitur. Morbi tortor ex, volutpat varius pretium eu, lacinia a lectus. Donec pellentesque aliquam felis, in sagittis urna suscipit at. Cras ac quam a diam posuere congue sit amet a orci. Praesent ex lorem, hendrerit in leo pharetra, tempus euismod lorem. Mauris sed iaculis tortor. Donec purus nulla, ultrices vel justo quis, congue sagittis leo. Vestibulum ut lorem dapibus, fermentum nisi at, volutpat libero. Vivamus sed nunc tellus.</p>
      </div>
    )
);

story.add(
    "Right",
    () => (
      <div className="one-half text-right">
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi. Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum, id sollicitudin odio orci vel risus. Maecenas dictum bibendum efficitur. Morbi tortor ex, volutpat varius pretium eu, lacinia a lectus. Donec pellentesque aliquam felis, in sagittis urna suscipit at. Cras ac quam a diam posuere congue sit amet a orci. Praesent ex lorem, hendrerit in leo pharetra, tempus euismod lorem. Mauris sed iaculis tortor. Donec purus nulla, ultrices vel justo quis, congue sagittis leo. Vestibulum ut lorem dapibus, fermentum nisi at, volutpat libero. Vivamus sed nunc tellus.</p>
      </div>
    )
);

story.add(
    "Color",
    () => (
      <div className="one-half text-brand">
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet urna nisi. Nam rhoncus, sem aliquet sollicitudin lacinia, tellus lorem sodales ipsum, id sollicitudin odio orci vel risus. Maecenas dictum bibendum efficitur. Morbi tortor ex, volutpat varius pretium eu, lacinia a lectus. Donec pellentesque aliquam felis, in sagittis urna suscipit at. Cras ac quam a diam posuere congue sit amet a orci. Praesent ex lorem, hendrerit in leo pharetra, tempus euismod lorem. Mauris sed iaculis tortor. Donec purus nulla, ultrices vel justo quis, congue sagittis leo. Vestibulum ut lorem dapibus, fermentum nisi at, volutpat libero. Vivamus sed nunc tellus.</p>
      </div>
    )
);
