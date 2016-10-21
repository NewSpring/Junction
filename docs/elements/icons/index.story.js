import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";
import centered from "../../../.storybook/decorators/centered";
import defaultColors from "../../defaults";

import Icon, {
  IconFilled,
  IconAlert,
  IconBase,
  IconOutlined,
} from "./index";
import icons from "./fa";

const story = storiesOf("Icons", module)
  .addDecorator(centered)
  .addDecorator(backgrounds(defaultColors()));

story.add(
  "Unfilled",
  () => (
    <div className="text-center one-whole">
      {icons.map(icon => (
        <Icon className={icon} />
      ))}
    </div>
  )
);

story.add(
  "Filled",
  () => (
    <div className="text-center one-whole">
      {icons.map(icon => (
        <IconFilled className={icon} />
      ))}
    </div>
  )
);

story.add(
  "Alert",
  () => (
    <div className="text-center one-whole">
      {icons.map(icon => (
        <IconAlert className={icon} />
      ))}
    </div>
  )
);

story.add(
  "Base (white)",
  () => (
    <div className="text-center one-whole">
      {icons.map(icon => (
        <IconBase className={icon} />
      ))}
    </div>
  )
);

story.add(
  "Outlined",
  () => (
    <div className="text-center one-whole">
      {icons.map(icon => (
        <IconOutlined className={icon} />
      ))}
    </div>
  )
);
