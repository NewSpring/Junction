import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import {
  UnorderedList,
  OrderedList,
} from "./index.tsx";

const story = storiesOf("Lists", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Basic Unordered List",
  () => (
    <UnorderedList className="one-whole">
      <li>List Item 1</li>
      <UnorderedList className="one-whole">
        <li> Item A </li>
        <li> Item B </li>
      </UnorderedList>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </UnorderedList>
  )
);

story.add(
  "Basic Ordered List",
  () => (
    <OrderedList className="one-whole">
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </OrderedList>
  )
);
