const Grid = ({ className, children, style }) => (
  <div style={style} className={`grid ${className || "" }`}>
    {children}
  </div>
);

export default Grid;

const GridItem = ({ className , children, width, style }) => (
  <div style={style} className={`grid__item ${className || ""} ${width || "one-whole"}`}>
    {children}
  </div>
);

export { GridItem }
