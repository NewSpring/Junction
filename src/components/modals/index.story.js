import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Modal from "./index";

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const story = storiesOf("Modals", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Active Modal",
  () => (
    <Modal className="modal--active">
      <h1>Hello world!</h1>
      <p>{body}</p>
    </Modal>
  )
);

story.add(
  "Dark Active Modal",
  () => (
    <Modal className="modal--active modal--dark">
      <h1>Hello world!</h1>
      <p>{body}</p>
    </Modal>
  )
);
