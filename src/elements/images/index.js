
const Image = ({ className, src, width, height }) => (
  <img src={src} className={`${className || ""}`} width={`${width || ""}`} height={`${height || ""}`}/>
);

export default Image;
