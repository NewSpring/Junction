import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

const story = storiesOf("Displays", module)
  .addDecorator(centered);

story.add(
  "Block Display",
  () => (
    <div style={{ textAlign: "center" }}>
      <span className="display-block">
        This span is a block
      </span>
      <span className="display-block">
        This span is a block
      </span>
    </div>
  )
);

story.add(
  "Inline-block Display",
  () => (
    <div style={{ textAlign: "center" }}>
      <div className="display-inline-block">
        This div is an inline block&nbsp;
      </div>
      <div className="display-inline-block">
        This div is an inline block
      </div>
    </div>
  )
);
