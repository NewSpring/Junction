import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Card from "./index";

const story = storiesOf("Cards", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const title = "Card Title";

story.add(
  "Basic Card",
  () => (
    <Card title={title} body={body} />
  )
);

story.add(
  "Card with card__image",
  () => (
    <Card image="https://placehold.it/350x150" title={title} body={body} />
  )
);
