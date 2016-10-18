import { PropTypes } from "react";

const Image = ({ className, src, width, height, alt }) => (
  <img src={src} className={`${className || ""}`} alt={`${alt} || ""}`} width={`${width || ""}`} height={`${height || ""}`} />
  );

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.width,
  height: PropTypes.height,
  alt: PropTypes.string,
};

export default Image;
