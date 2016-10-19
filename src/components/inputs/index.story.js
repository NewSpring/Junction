import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Input from "./index";

const story = storiesOf("Inputs", module)
  .addDecorator(centered);

story.add(
  "Basic Input",
  () => <Input />
);

story.add(
  "Basic Select",
  () => (
    <div className="input input--active input--focused soft-bottom display-inline-block input--active select">
      <select placeholder="select option" name="select-account" className="text-dark-tertiary hard-top flush-bottom">
        <option>select option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  )
);

story.add(
  "Input With Message",
  () => (
    <Input className="input--active">
      <span className="input__status">Please use a valid email address like norma@newspring.cc</span>
    </Input>
  )
);

story.add(
  "Active Input",
  () => <Input className="input--active" />
);

story.add(
  "Focused Input",
  () => <Input className="input--active input--focused" />
);

story.add(
  "Alert Input",
  () => <Input className="input--alert input--active"><span className="input__status">An Error Message</span></Input>
);
