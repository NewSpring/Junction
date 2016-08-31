export interface LabelProps {
  className?: string;
  children?: string;
  style?: any;
}

const Label = ({ className, children, style }: LabelProps) => (
  <label style={style} className={`${className || ""}`}>
    {children}
  </label>
);

export default Label;
