import { storiesOf } from "@kadira/storybook";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
// import Button from "./Button";

const story = storiesOf("Sample", module);

const withCampusCount = graphql(gql`
  query Sample { campuses { name } }
`, { props: ({ data }) => ({ count: data.campuses && data.campuses.length || 0 }) });

const Sample = withCampusCount(({ count }) => (
  <a href="#" className="btn h5">We have {count} campuses</a>
));

story.addWithInfo(
  "Test",
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => (<Sample />)
);
