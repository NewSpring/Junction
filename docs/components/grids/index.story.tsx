import { storiesOf } from "@kadira/storybook";

import Grid, {
  GridItem,
} from "./index.tsx";

const story = storiesOf("Grids", module);

const interior = <div className="outlined--light soft-ends push-bottom push-bottom@handheld"/>;

story.addWithInfo(
  "Basic Grid",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <Grid>
      <GridItem width="one-half">
        {interior}
      </GridItem>
      <GridItem width="one-half">
        {interior}
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
        {interior}
      </GridItem>
      <GridItem width="one-quarter">
        {interior}
      </GridItem>
      <GridItem width="one-quarter">
        {interior}
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
        {interior}
      </GridItem>
      <GridItem width="one-half one-quarter@lap-and-up">
        {interior}
      </GridItem>
      <GridItem width="one-half one-quarter@lap-and-up">
        {interior}
      </GridItem>
    </Grid>
  ),
  { propTables: false }
);

story.addWithInfo(
  "All Sizes",
  // tslint:disable-next-line
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (
    <Grid>
      <GridItem width="one-whole">{interior}</GridItem>

      <GridItem width="one-half">{interior}</GridItem>
      <GridItem width="one-half">{interior}</GridItem>

      <GridItem width="one-third">{interior}</GridItem>
      <GridItem width="one-third">{interior}</GridItem>
      <GridItem width="one-third">{interior}</GridItem>

      <GridItem width="one-quarter">{interior}</GridItem>
      <GridItem width="one-quarter">{interior}</GridItem>
      <GridItem width="one-quarter">{interior}</GridItem>
      <GridItem width="one-quarter">{interior}</GridItem>

      <GridItem width="one-fifth">{interior}</GridItem>
      <GridItem width="one-fifth">{interior}</GridItem>
      <GridItem width="one-fifth">{interior}</GridItem>
      <GridItem width="one-fifth">{interior}</GridItem>
      <GridItem width="one-fifth">{interior}</GridItem>

      <GridItem width="one-sixth">{interior}</GridItem>
      <GridItem width="one-sixth">{interior}</GridItem>
      <GridItem width="one-sixth">{interior}</GridItem>
      <GridItem width="one-sixth">{interior}</GridItem>
      <GridItem width="one-sixth">{interior}</GridItem>
      <GridItem width="one-sixth">{interior}</GridItem>

      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>
      <GridItem width="one-eighth">{interior}</GridItem>

      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>
      <GridItem width="one-tenth">{interior}</GridItem>

      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>
      <GridItem width="one-twelfth">{interior}</GridItem>


    </Grid>
  ),
  { propTables: false }
);
