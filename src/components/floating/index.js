import { PropTypes } from "react";

const Floating = ({ className, children, style, float }) => (
  <div style={style} className={`floating ${className || ""} floating--${float}`}>
    {children}
  </div>
  );

Floating.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
  float: PropTypes.string,
};

export default Floating;

const FloatingItem = ({ className, children, style }) => (
  <div style={style} className={`floating__item ${className || ""}`}>
    {children}
  </div>
  );

FloatingItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
};

export { FloatingItem };
