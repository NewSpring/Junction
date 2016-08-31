

export interface ProgressProps {
  className?: string;
  progress?: string;
  active?: any;
  style?: any;
}

const Progress = ({ className, progress, active, style }: ProgressProps) => (
  <div style={style} className={`progress ${className || ""}`}>
    <div style={{left: `${progress || "0"}%`}} className={`${active ? "progress__item--active" : "progress__item"}`}></div>
  </div>
);

export default Progress;
