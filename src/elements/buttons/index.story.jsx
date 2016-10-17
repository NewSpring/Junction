"use strict";
const storybook_1 = require("@kadira/storybook");
const react_storybook_addon_backgrounds_1 = require("react-storybook-addon-backgrounds");
const index_tsx_1 = require("../../../.storybook/decorators/centered/index.tsx");
const defaults_tsx_1 = require("../../defaults.tsx");
const index_tsx_2 = require("./index.tsx");
const story = storybook_1.storiesOf("Buttons", module)
    .addDecorator(index_tsx_1.default)
    .addDecorator(react_storybook_addon_backgrounds_1.default(defaults_tsx_1.default()));
story.add("Primary", () => <div className="text-center one-whole"><index_tsx_2.default>Click Here</index_tsx_2.default></div>);
story.add("Filled", () => <div className="text-center one-whole"><index_tsx_2.ButtonFilled>Click Here</index_tsx_2.ButtonFilled></div>);
story.add("Small", () => <div className="text-center one-whole"><index_tsx_2.ButtonSmall>Click Here</index_tsx_2.ButtonSmall></div>);
story.add("Grey", () => <div className="text-center one-whole"><index_tsx_2.ButtonGray>Click Here</index_tsx_2.ButtonGray></div>);
story.add("Disabled", () => <div className="text-center one-whole"><index_tsx_2.ButtonDisabled>Click Here</index_tsx_2.ButtonDisabled></div>);
story.add("Corners", () => <div className="text-center one-whole"><index_tsx_2.ButtonCorners>Click Here</index_tsx_2.ButtonCorners></div>);
story.add("Light", () => <div className="text-center one-whole"><index_tsx_2.ButtonLight>Click Here</index_tsx_2.ButtonLight></div>);
story.add("Dark Primary", () => <div className="text-center one-whole"><index_tsx_2.ButtonDarkPrimary>Click Here</index_tsx_2.ButtonDarkPrimary></div>);
story.add("Dark Secondary", () => <div className="text-center one-whole"><index_tsx_2.ButtonDarkSecondary>Click Here</index_tsx_2.ButtonDarkSecondary></div>);
story.add("Dark Tertiary", () => <div className="text-center one-whole"><index_tsx_2.ButtonDarkTertiary>Click Here</index_tsx_2.ButtonDarkTertiary></div>);
story.add("Alert", () => <div className="text-center one-whole"><index_tsx_2.ButtonAlert>Click Here</index_tsx_2.ButtonAlert></div>);
story.add("Icon", () => <div className="text-center one-whole"><index_tsx_2.ButtonIcon>Click Here</index_tsx_2.ButtonIcon></div>);
//# sourceMappingURL=index.story.jsx.map