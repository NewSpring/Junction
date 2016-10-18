import { storiesOf } from "@kadira/storybook";

import Grid, {
  GridItem,
} from "./index.js";

const story = storiesOf("Grids", module);

const interior = <div className="outlined--light soft-ends push-bottom push-bottom@handheld"/>;

story.add(
  "Basic Grid",
  () => (
    <Grid>
      <GridItem width="one-half">
        {interior}
      </GridItem>
      <GridItem width="one-half">
        {interior}
      </GridItem>
    </Grid>
  )
);

story.add(
  "Multi Column Grid",
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
  )
);

story.add(
  "Responsive Grid",
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
  )
);

story.add(
  "All Sizes",
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
  )
);
