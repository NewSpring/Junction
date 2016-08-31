"use strict";
const storybook_1 = require("@kadira/storybook");
const index_tsx_1 = require("./index.tsx");
const story = storybook_1.storiesOf("Buttons", module);
story.add("Primary", () => <div className="text-center one-whole"><index_tsx_1.default>Click Here</index_tsx_1.default></div>);
story.add("Filled", () => <div className="text-center one-whole"><index_tsx_1.ButtonFilled>Click Here</index_tsx_1.ButtonFilled></div>);
story.add("Small", () => <div className="text-center one-whole"><index_tsx_1.ButtonSmall>You Won't Click Me</index_tsx_1.ButtonSmall></div>);
story.add("Grey", () => <div className="text-center one-whole"><index_tsx_1.ButtonGray>You Won't Click Me</index_tsx_1.ButtonGray></div>);
story.add("Disabled", () => <div className="text-center one-whole"><index_tsx_1.ButtonDisabled>You Won't Click Me</index_tsx_1.ButtonDisabled></div>);
story.add("Corners", () => <div className="text-center one-whole"><index_tsx_1.ButtonCorners>You Won't Click Me</index_tsx_1.ButtonCorners></div>);
story.add("Light", () => <div className="text-center one-whole"><index_tsx_1.ButtonLight>You Won't Click Me</index_tsx_1.ButtonLight></div>);
story.add("Dark Primary", () => <div className="text-center one-whole"><index_tsx_1.ButtonDarkPrimary>You Won't Click Me</index_tsx_1.ButtonDarkPrimary></div>);
story.add("Dark Secondary", () => <div className="text-center one-whole"><index_tsx_1.ButtonDarkSecondary>You Won't Click Me</index_tsx_1.ButtonDarkSecondary></div>);
story.add("Dark Tertiary", () => <div className="text-center one-whole"><index_tsx_1.ButtonDarkTertiary>You Won't Click Me</index_tsx_1.ButtonDarkTertiary></div>);
story.add("Alert", () => <div className="text-center one-whole"><index_tsx_1.ButtonAlert>You Won't Click Me</index_tsx_1.ButtonAlert></div>);
story.add("Icon", () => <div className="text-center one-whole"><index_tsx_1.ButtonIcon>You Won't Click Me</index_tsx_1.ButtonIcon></div>);
//# sourceMappingURL=index.story.jsx.map