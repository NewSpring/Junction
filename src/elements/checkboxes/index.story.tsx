import { storiesOf } from "@kadira/storybook";

import { Checkbox } from "./index.tsx";

const story = storiesOf("Checkboxes", module);

story.addWithInfo(
  "Checkbox",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  // tslint:disable
  () => <Checkbox className="input hard">
    <h6 className="soft-left push-half-left flush-bottom text-left float-left">This is technically a radio button, we need to define checkboxes</h6>
    <input type="checkbox" id="checkboxName"/>
    <label for="checkboxName"></label>
    </Checkbox>,
  { propTables: false }
);
