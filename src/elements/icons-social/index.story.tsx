import { storiesOf } from "@kadira/storybook";

import IconSocial from "./index.tsx";

const story = storiesOf("Social Icons", module);

story.addWithInfo(
  "Unfilled",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <IconSocial className="icon--facebook display-inline-block" />
      <IconSocial className="icon--google display-inline-block" />
      <IconSocial className="icon--twitter display-inline-block" />
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Filled",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <IconSocial className="icon--facebook icon--filled push-half display-inline-block" />
      <IconSocial className="icon--google icon--filled push-half display-inline-block" />
      <IconSocial className="icon--twitter icon--filled push-half display-inline-block" />
    </div>
  ),
  { propTables: false }
);
