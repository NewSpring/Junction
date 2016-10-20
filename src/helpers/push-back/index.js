import { PropTypes } from "react";

const backgroundDiv = {
  background: "grey",
  width: "100px",
  height: "100px",
};

const foregroundDiv = {
  background: "rebeccapurple",
  width: "50px",
  height: "50px",
};

const PushBack = ({ className }) => (
  <div className="one-whole floating" style={backgroundDiv}>
    <div className={`${className} floating__item`} style={foregroundDiv} />
  </div>
);

PushBack.propTypes = {
  className: PropTypes.string,
};

export default PushBack;
