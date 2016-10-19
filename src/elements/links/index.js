import { PropTypes } from "react";

const Link = ({ className, children, style, href }) => (
  <a href={`${href || "#"}`} style={style} className={`${className || ""}`}>
    {children}
  </a>
  );

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
