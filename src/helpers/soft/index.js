import { PropTypes } from "react";

const backgroundDiv = {
  background: "grey",
  display: "inline-block",
};

const foregroundDiv = {
  background: "rebeccapurple",
  width: "100px",
  height: "100px",
};

const Soft = ({ className }) => (
  <div className={`${className} flush-bottom`} style={backgroundDiv}>
    <div style={foregroundDiv} />
  </div>
);

Soft.propTypes = {
  className: PropTypes.string,
};

export default Soft;
