"use strict";
const storybook_1 = require("@kadira/storybook");
const index_tsx_1 = require("./index.tsx");
const story = storybook_1.storiesOf("Checkboxes", module);
story.add("Basic Checkbox", () => (<index_tsx_1.default name="name-here" value="value-here"/>));
story.add("Checked Checkbox", () => (<index_tsx_1.default name="name-here" value="value-here" checked/>));
//# sourceMappingURL=index.story.jsx.map