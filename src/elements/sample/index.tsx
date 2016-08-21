import { storiesOf } from "@kadira/storybook";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { specs, describe, it } from "storybook-addon-specifications";
import { mount } from "enzyme";
import expect from "expect";

const stories = storiesOf("Sample", module);

const withCampusCount = graphql(gql`
  query Sample { campuses { name } }
`, { props: ({ data }) => ({ count: data.campuses && data.campuses.length || 0 }) });

const Button = ({ count }) => (
  <a href="#" className="btn h5">We have {count} campuses</a>
);

const Sample = withCampusCount(Button);

stories.add("Test", () => {
    const story = <Sample />;

    specs(() => describe("Test", function () {
      it("Should have the text inside", function () {
        let output = mount(<Button count={null} />);
        expect(output.text()).toContain("We have  campuses");
      });

      it("Should include the count as passed", function () {
        let output = mount(<Button count={10} />);
        expect(output.text()).toContain("We have 10 campuses");
      });
    }));

    return story;
  }
);
