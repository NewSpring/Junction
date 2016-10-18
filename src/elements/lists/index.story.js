import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/";
import defaultColors from "../../defaults";

import List from "./index";

const story = storiesOf("Lists", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Basic Unordered List",
  () => (
    <List className="one-whole">
      <li>List Item 1</li>
      <List className="one-whole">
        <li> Item A </li>
        <li> Item B </li>
      </List>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </List>
  )
);
