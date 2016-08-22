import { storiesOf } from "@kadira/storybook";

import Grid, {
  GridItem,
} from "./index.tsx";

const story = storiesOf("Grids", module);

story.addWithInfo(
  "Basic Grid",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <Grid>
      <GridItem width="one-half">
        <div className="outlined--light soft-ends"/>
      </GridItem>
      <GridItem width="one-half">
        <div className="outlined--light soft-ends"/>
      </GridItem>
    </Grid>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Multi Column Grid",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <Grid>
      <GridItem width="one-half">
        <div className="outlined--light soft-ends"/>
      </GridItem>
      <GridItem width="one-quarter">
        <div className="outlined--light soft-ends"/>
      </GridItem>
      <GridItem width="one-quarter">
        <div className="outlined--light soft-ends"/>
      </GridItem>
    </Grid>
  ),
  { propTables: false }
);

story.addWithInfo(
  "Responsive Grid",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <Grid>
      <GridItem width="one-whole one-half@lap-and-up">
        <div className="outlined--light soft-ends push-bottom@handheld"/>
      </GridItem>
      <GridItem width="one-half one-quarter@lap-and-up">
        <div className="outlined--light soft-ends push-bottom@handheld"/>
      </GridItem>
      <GridItem width="one-half one-quarter@lap-and-up">
        <div className="outlined--light soft-ends push-bottom@handheld"/>
      </GridItem>
    </Grid>
  ),
  { propTables: false }
);
