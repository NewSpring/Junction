import { PropTypes } from "react";

const Float = ({ className }) => (
  <div className="one-whole">
    <img src="http://img09.deviantart.net/bf4e/i/2011/073/1/f/dune_by_bumhand-d3bly3t.jpg" alt="dune fan art" className={className} />
  </div>
);

Float.propTypes = {
  className: PropTypes.string,
};

export default Float;

