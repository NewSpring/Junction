
export interface GridProps {
  className?: string;
  children?: any;
  width?: string;
  style?: any;
}

const Grid = ({ className, children, width, style }: GridProps) => (
  <div style={style} className={`grid ${className || "" } ${width || "one-whole"}`}>
    {children}
  </div>
);

export default Grid;

const GridItem = ({ className , children, width, style }: GridProps) => (
  <div style={style} className={`grid__item ${className || ""} ${width || "one-whole"}`}>
    {children}
  </div>
);

export { GridItem }
