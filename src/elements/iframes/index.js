import { PropTypes } from "react";

const IFrame = ({ className }) => (
  <iframe src="https://newspring.cc" className={className || ""} />
  );

IFrame.propTypes = {
  className: PropTypes.string,
};

export default IFrame;

export const Embed = ({ className }) => (
  <embed src="https://player.vimeo.com/video/1102439" className={className || ""} />
  );

Embed.propTypes = {
  className: PropTypes.string,
};

