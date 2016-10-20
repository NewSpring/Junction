import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

const story = storiesOf("Type", module)
  .addDecorator(centered);

const body = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const title = "Title Text";

story.add(
  "Base",
  () => (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Capitalize",
  () => (
    <div className="capitalize">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Lowercase",
  () => (
    <div className="lowercase">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Uppercase",
  () => (
    <div className="uppercase">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Italic",
  () => (
    <div className="italic">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Ellipsis",
  () => (
    <div className="ellipsis">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Truncate",
  () => (
    <div className="truncate">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
);

story.add(
  "Underline",
  () => (
    <div>
      <h2>{title}</h2>
      <p className="underline">
        Underline only applied to paragraph here...<br />
        {body}
      </p>
    </div>
  )
);
