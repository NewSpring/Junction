import { storiesOf } from "@kadira/storybook";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered";

import Readme from "./README.md";

const story = storiesOf("Widths", module)
  .addDecorator(centered);

story.add(
  "Basic Grid",
  withReadme(Readme,
    () => (
      <div style={{ textAlign: "center" }}>
        <p>
          To see widths in use, go to the Grids story.
        </p><p>
          To see width documentation, refer to the readme below
        </p>
      </div>
    )
  )
);
