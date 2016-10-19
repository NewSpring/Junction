import { PropTypes } from "react";

const Corners = ({ className }) => (
  <div
    style={{ backgroundColor: "silver", height: "200px", width: "200px" }}
    className={`${className || "rounded"}`}
  />
  );

Corners.propTypes = {
  className: PropTypes.string,
};

export default Corners;
