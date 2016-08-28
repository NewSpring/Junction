"use strict";
const storybook_1 = require("@kadira/storybook");
const index_tsx_1 = require("./index.tsx");
const story = storybook_1.storiesOf("Floating", module);
story.add("Basic floating item", () => (<index_tsx_1.default>
        <index_tsx_1.FloatingItem>
        Hello world!
        </index_tsx_1.FloatingItem>
    </index_tsx_1.default>));
story.add("Left floating item", () => (<index_tsx_1.default float="left">
        <index_tsx_1.FloatingItem>
        Hello world!
        </index_tsx_1.FloatingItem>
    </index_tsx_1.default>));
story.add("Right floating item", () => (<index_tsx_1.default float="right">
        <index_tsx_1.FloatingItem>
        Hello world!
        </index_tsx_1.FloatingItem>
    </index_tsx_1.default>));
story.add("Top floating item", () => (<index_tsx_1.default float="top">
        <index_tsx_1.FloatingItem>
        Hello world!
        </index_tsx_1.FloatingItem>
    </index_tsx_1.default>));
story.add("Bottom floating item", () => (<index_tsx_1.default float="bottom">
        <index_tsx_1.FloatingItem>
        Hello world!
        </index_tsx_1.FloatingItem>
    </index_tsx_1.default>));
//# sourceMappingURL=index.story.jsx.map