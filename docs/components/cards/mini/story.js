// import { storiesOf } from "@kadira/storybook";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

// import Card from "./index.tsx";

// // import { specs, describe, it } from "storybook-addon-specifications";
// // import { mount } from "enzyme";
// // import expect from "expect";

// const stories = storiesOf("MiniCard", module);

// const withContentData = graphql(gql`
//   query GetContent {
//     content(channel: "articles", limit:1) {
//       title
//       meta { summary }
//       content { images(sizes:["medium"], ratios: ["2:1"]) { url } }
//     }
//   }
// `, {
//   props: ({ data }) => {
//     if (data.loading) return { loading: true };
//     return {
//       title: data.content[0].title,
//       description: data.content[0].meta.summary,
//       image: data.content[0].content.images[0].url,
//     };
//   },
// });

// const CardWithData = ({ loading, title, description, image }) => {
//   if (loading) return null;
//   return <Card image={image} description={description} title={title} />;
// };

// const Sample = withContentData(CardWithData);

// stories.addWithInfo("Article",
// tslint:disable-next-line
//   `Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
// tslint:disable-next-line
// Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//   , () => {
//     const story = <Sample />;

//     // specs(() => describe("Test", function () {
//     //   it("Should have the text inside", function () {
//     //     let output = mount(<Button count={null} />);
//     //     expect(output.text()).toContain("We have  campuses");
//     //   });

//     //   it("Should include the count as passed", function () {
//     //     let output = mount(<Button count={10} />);
//     //     expect(output.text()).toContain("We have 10 campuses");
//     //   });
//     // }));

//     return story;
//   }, { source: false, propTables: false }
// );
