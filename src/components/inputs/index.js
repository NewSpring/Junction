import { PropTypes } from "react";

const styles = {
  width: "44%",
};

const Input = ({ className, children }) => (
  <div className={className || "input"} style={styles}>
    <label htmlFor="input">An Input Label</label>
    <input type="text" className="text-dark-primary" />
    { children }
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default Input;
