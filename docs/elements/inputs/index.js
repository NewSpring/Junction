import { PropTypes } from "react";

const Input = ({ className, type }) => (
  <input
    className={` ${className}`}
    type={`${type}`}
  />
  );

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
