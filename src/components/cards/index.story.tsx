import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered/index.tsx";
import defaultColors from "../../defaults.tsx";

import Card from "./index.tsx";

const story = storiesOf("Cards", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()))
  ;

let body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let title = "Card Title";

story.add(
  "Basic Card",
  () => (
      <Card title={title} body={body}/>
  )
);

story.add(
  "Card with card__image",
  () => (
      <Card image="https://placehold.it/350x150" title={title} body={body}/>
  )
);
