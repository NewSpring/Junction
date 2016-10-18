import { storiesOf } from "@kadira/storybook";

import FixedRatio from "./index";

const story = storiesOf("FixedRatios", module);

const ratioLandscape = {
  backgroundImage: "url(http://nerdist.com/wp-content/uploads/2015/06/Dune-Fan-Art-06082015.jpg)",
};

const ratioSquare = {
  backgroundImage: "url(https://kitchenoverlord.files.wordpress.com/2014/02/dunecat.jpg?w=860)",
};

const ratioPortrait = {
  backgroundImage: "url(http://www.foliosociety.com/images/books/2015/dune/dune-7.jpg)",
};

story.add(
  "Landscape",
  () => <FixedRatio ratioClass="ratio--landscape" styles={ratioLandscape} />
);

story.add(
  "Square",
  () => <FixedRatio className="one-third one-whole@handheld" ratioClass="ratio--square" styles={ratioSquare} />
);

story.add(
  "Portrait",
  () => <FixedRatio className="one-quarter one-whole@handheld" ratioClass="ratio--portrait" styles={ratioPortrait} />
);
