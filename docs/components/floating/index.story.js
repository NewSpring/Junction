import { storiesOf } from "@kadira/storybook";
import centered from "../../../.storybook/decorators/centered";

import Floating, {
  FloatingItem,
} from "./index";

const story = storiesOf("Floating", module)
  .addDecorator(centered);

story.add(
  "Basic floating item",
  () => (
    <Floating style={{ height: "100%" }}>
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Left floating item",
  () => (
    <Floating style={{ height: "100%" }} float="left">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Right floating item",
  () => (
    <Floating style={{ height: "100%" }} float="right">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Top floating item",
  () => (
    <Floating style={{ height: "100%" }} float="top">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);

story.add(
  "Bottom floating item",
  () => (
    <Floating style={{ height: "100%" }} float="bottom">
      <FloatingItem>
        Hello world!
      </FloatingItem>
    </Floating>
  )
);
