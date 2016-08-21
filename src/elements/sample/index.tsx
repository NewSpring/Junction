import { storiesOf } from "@kadira/storybook";
// import Button from "./Button";

const story = storiesOf("Sample", module);

// story.add("with textings", () => <h1 class="text-primary">Hai, I'm Junction</h1>);
story.addWithInfo(
  "Test",
  `
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
  `,
  () => <a href="#" className="btn h5">Dynamic</a>
);
