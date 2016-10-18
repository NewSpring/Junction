import { PropTypes } from "react";

/* eslint-disable */
const Label = ({ className, children, style }) => (
  <label style={style} className={`${className || ""}`}>
    {children}
  </label>
  );
/* eslint-enable */

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
};

export default Label;
