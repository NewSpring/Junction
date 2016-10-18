import { PropTypes } from "react";

const Grid = ({ className, children, style }) => (
  <div style={style} className={`grid ${className || ""}`}>
    {children}
  </div>
  );

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
};

export default Grid;

const GridItem = ({ className, children, width, style }) => (
  <div style={style} className={`grid__item ${className || ""} ${width || "one-whole"}`}>
    {children}
  </div>
  );

GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  width: PropTypes.string,
  style: PropTypes.string,
};

export { GridItem };
