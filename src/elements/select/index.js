import PropTypes from "react";

const Select = ({ className, children }) => (
  <select
    className={`${className}`}
  >
    {children}
  </select>
);

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Select;
