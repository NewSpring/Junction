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

const Push = ({ className }) => (
  <div style={backgroundDiv}>
    <div className={className} style={foregroundDiv} />
  </div>
);

Push.propTypes = {
  className: PropTypes.string,
};

export default Push;
