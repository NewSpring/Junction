"use strict";
const storybook_1 = require("@kadira/storybook");
const index_tsx_1 = require("./index.tsx");
const story = storybook_1.storiesOf("Lists", module);
story.add("Basic Unordered List", () => (<index_tsx_1.default className="one-whole">
      <li>List Item 1</li>
      <index_tsx_1.default className="one-whole">
        <li> Item A </li>
        <li> Item B </li>
      </index_tsx_1.default>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </index_tsx_1.default>));
//# sourceMappingURL=index.story.jsx.map