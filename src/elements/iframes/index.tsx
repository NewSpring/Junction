export interface IFrameProps {
  className?: string;
}

const IFrame = ({ className }: IFrameProps) => (
  <iframe src="https://newspring.cc" className={className || ""} />
);

export default IFrame;

export const Embed = ({ className }: IFrameProps) => (
    <embed src="https://player.vimeo.com/video/1102439"  className={className || ""} />
);
