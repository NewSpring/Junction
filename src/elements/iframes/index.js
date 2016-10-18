
const IFrame = ({ className }) => (
  <iframe src="https://newspring.cc" className={className || ""} />
);

export default IFrame;

export const Embed = ({ className }) => (
    <embed src="https://player.vimeo.com/video/1102439"  className={className || ""} />
);
