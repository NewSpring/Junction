import { PropTypes } from "react";

const Shapes = ({ className }) => (
  <div
    className={`${className || ""}`}
    style={{ backgroundColor: "silver", height: "200px", width: "200px" }}
  />
  );

Shapes.propTypes = {
  className: PropTypes.string,
};

export default Shapes;
