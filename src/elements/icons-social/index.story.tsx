import { storiesOf } from "@kadira/storybook";

import IconSocial, { IconSocialFilled } from "./index.tsx";

const story = storiesOf("Social Icons", module);

story.addWithInfo(
  "Unfilled",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <IconSocial className="icon--facebook" />
      <IconSocial className="icon--google" />
      <IconSocial className="icon--twitter" />
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
      <IconSocialFilled className="icon--facebook" />
      <IconSocialFilled className="icon--google" />
      <IconSocialFilled className="icon--twitter" />
    </div>
  ),
  { propTables: false }
);
