import PropTypes from "react";

const TextArea = ({ className, children, name, placeholder }) => (
  <textarea
    className={`${className || ""}`}
    name={`${name || ""}`}
    placeholder={`${placeholder || ""}`}
  >
    {children}
  </textarea>
);

TextArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
