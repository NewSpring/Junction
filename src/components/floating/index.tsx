export interface FloatingProps {
  className?: string;
  children?: any;
  style?: any;
  float?: string;
}

export interface FloatingItemProps {
  className?: string;
  children?: any;
  style?: any;
}

const Floating = ({ className, children, style, float }: FloatingProps) => (
  <div style={style} className={`floating ${className || "" } floating--${float}`}>
    {children}
  </div>
);

export default Floating;

const FloatingItem = ({ className , children, style }: FloatingItemProps) => (
  <div style={style} className={`floating__item ${className || ""}` }>
    {children}
  </div>
);

export { FloatingItem }
