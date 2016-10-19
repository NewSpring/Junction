export interface ImageProps {
  className?: string;
  src?: string;
  width?: string;
  height?: string;
}

const Image = ({ className, src, width, height }: ImageProps) => (
  <img src={src} className={`${className || ""}`} width={`${width || ""}`} height={`${height || ""}`}/>
);

export default Image;
