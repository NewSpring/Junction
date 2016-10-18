const Floating = ({ className, children, style, float }) => (
  <div style={style} className={`floating ${className || "" } floating--${float}`}>
    {children}
  </div>
);

export default Floating;

const FloatingItem = ({ className , children, style }) => (
  <div style={style} className={`floating__item ${className || ""}` }>
    {children}
  </div>
);

export { FloatingItem }
