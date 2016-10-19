import { PropTypes } from "react";

const Progress = ({ className, progress, active, style }) => (
  <div style={style} className={`progress ${className || ""}`}>
    <div style={{ left: `${progress || "0"}%` }} className={`${active ? "progress__item--active" : "progress__item"}`} />
  </div>
  );

Progress.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.string,
  active: PropTypes.bool,
  style: PropTypes.string,
};

export default Progress;
