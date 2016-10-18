
const Label = ({ className, children, style }) => (
  <label style={style} className={`${className || ""}`}>
    {children}
  </label>
);

export default Label;
