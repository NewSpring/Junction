import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

const story = storiesOf("Scrollable", module)
  .addDecorator(centered);

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

story.add(
  "Base overflow",
  () => (
    <div
      style={{
        maxWidth: "400px",
        maxHeight: "400px",
        backgroundColor: "#cccccc",
        marginLeft: "auto",
        marginRight: "auto",
      }}
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
      style={{
        maxWidth: "400px",
        maxHeight: "400px",
        backgroundColor: "#cccccc",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="scrollable"
    >
      <p>
        {body}{body}{body}{body}{body}{body}{body}{body}
      </p>
    </div>
  )
);
