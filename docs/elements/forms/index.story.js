import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import withReadme from "storybook-readme/with-readme";
import centered from "../../../.storybook/decorators/centered/index";
import defaultColors from "../../defaults";

import Form, { FieldSet, Legend, FormButton } from "./index";
import Readme from "./README.md";

const story = storiesOf("Form", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors));

story.add(
  "Empty Form",
  withReadme(Readme,
    () => (
      <Form />
    )
  )
);

story.add(
  "With fieldsets and legend",
  withReadme(Readme,
    () => (
      <Form>
        <FieldSet>
          <Legend>
            This is the legend
          </Legend>
          <input type="text" value="sample input" />
          <input type="text" value="sample text field" />
        </FieldSet>
        <FieldSet>
          <Legend>
            Another Fieldset and Legend
          </Legend>
          <input type="text" value="sample input" />
          <input type="text" value="sample text field" />
        </FieldSet>
      </Form>
    )
  )
);

story.add(
  "Form with icon button",
  withReadme(Readme,
    () => (
      <Form>
        <FieldSet>
          <Legend>Legend</Legend>
          <FormButton className="fa fa-thumbs-up" />
        </FieldSet>
      </Form>
    )
  )
);
