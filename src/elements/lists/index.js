import { PropTypes } from "react";

const List = ({ className, children }) => (
  <ul className={`${className || ""}`}>
    {children}
  </ul>
  );

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default List;
