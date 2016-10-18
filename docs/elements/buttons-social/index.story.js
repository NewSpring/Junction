import { storiesOf } from "@kadira/storybook";

import ButtonSocial from "./index.tsx";

const story = storiesOf("Social Buttons", module);

story.addWithInfo(
  "Facebook",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <ButtonSocial className="btn--facebook">
        Facebook
      </ButtonSocial>
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Google",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <ButtonSocial className="btn--google">
        Google
      </ButtonSocial>
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Twitter",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <ButtonSocial className="btn--twitter">
        Twitter
      </ButtonSocial>
    </div>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Instagram",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <div className="text-center one-whole">
      <ButtonSocial className="btn--instagram">
        Instagram
      </ButtonSocial>
    </div>
  ),
  { propTables: false }
);
