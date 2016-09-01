import { storiesOf } from "@kadira/storybook";

import List from "./index.tsx";

const story = storiesOf("Lists", module);

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
