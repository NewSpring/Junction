import { PropTypes } from "react";

const backgroundDiv = {
  background: "grey",
};

const foregroundDiv = {
  background: "rebeccapurple",
  width: "100px",
  height: "100px",
};

const Hard = ({ className }) => (
  <div className={`${className} soft flush-bottom`} style={backgroundDiv}>
    <div style={foregroundDiv} />
  </div>
);

Hard.propTypes = {
  className: PropTypes.string,
};

export default Hard;
