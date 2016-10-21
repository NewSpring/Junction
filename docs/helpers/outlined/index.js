import { PropTypes } from "react";

const Outlined = ({ className }) => (
  <div
    style={{ backgroundColor: "silver", height: "200px", width: "200px" }}
    className={`${className || "outlined"}`}
  />
  );

Outlined.propTypes = {
  className: PropTypes.string,
};

export default Outlined;
