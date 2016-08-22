"use strict";
const storybook_1 = require("@kadira/storybook");
const index_tsx_1 = require("./index.tsx");
const story = storybook_1.storiesOf("Checkboxes", module);
story.addWithInfo("Checkbox", `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `, () => <index_tsx_1.Checkbox className="input hard">
    // tslint:disable-next-line
    <h6 className="soft-left push-half-left flush-bottom text-left float-left">This is technically a radio button, we need to define checkboxes</h6>
    <input type="checkbox" id="checkboxName"/>
    <label for="checkboxName"></label>
    </index_tsx_1.Checkbox>, { propTables: false });
//# sourceMappingURL=index.story.jsx.map