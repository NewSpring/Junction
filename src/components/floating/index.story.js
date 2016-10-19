import { storiesOf } from "@kadira/storybook";

import Floating, {
  FloatingItem,
} from "./index";

const story = storiesOf("Floating", module);

// const interior = <div className="outlined--light soft-ends push-bottom push-bottom@handheld"/>;

story.add(
  "Basic floating item",
  () => (
    <Floating>
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Left floating item",
  () => (
    <Floating float="left">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Right floating item",
  () => (
    <Floating float="right">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Top floating item",
  () => (
    <Floating float="top">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Bottom floating item",
  () => (
    <Floating float="bottom">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);
