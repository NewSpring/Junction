import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Image from "./index.tsx";

const story = storiesOf("Image", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

story.add(
  "Basic Image",
  () => (
    <Image src="https://placehold.it/400x350" />
  )
);

story.add(
  "Image with set height",
  () => (
    <Image src="https://placehold.it/400x350" height="200px" />
  )
);

story.add(
  "Image with set width",
  () => (
    <Image src="https://placehold.it/400x350" width="200px" />
  )
);

story.add(
  "Image with set height and width",
  () => (
    <Image src="https://placehold.it/400x350" height="250px" width="250px" />
  )
);
