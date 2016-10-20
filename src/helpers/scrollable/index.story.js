import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

const story = storiesOf("Scrollable", module)
  .addDecorator(centered);

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const divStyles = {
  maxWidth: "400px",
  maxHeight: "400px",
  backgroundColor: "#cccccc",
  marginLeft: "auto",
  marginRight: "auto",
};

story.add(
  "Base overflow",
  () => (
    <div
      style={divStyles}
    >
      <p>
        {body}{body}{body}{body}{body}{body}{body}{body}
      </p>
    </div>
  )
);

story.add(
  "With Scrollable",
  () => (
    <div
      style={divStyles}
      className="scrollable"
    >
      <p>
        {body}{body}{body}{body}{body}{body}{body}{body}
      </p>
    </div>
  )
);
