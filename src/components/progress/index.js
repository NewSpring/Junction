
const Progress = ({ className, progress, active, style }) => (
  <div style={style} className={`progress ${className || ""}`}>
    <div style={{left: `${progress || "0"}%`}} className={`${active ? "progress__item--active" : "progress__item"}`}></div>
  </div>
);

export default Progress;
