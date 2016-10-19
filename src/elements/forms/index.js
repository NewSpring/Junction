import PropTypes from "react";

const Form = ({ className, children }) => (
  <form
    className={` ${className}`}
  >
    {children}
  </form>
);

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Form;

export const FieldSet = ({ className, children }) => (
  <fieldset
    className={` ${className}`}
  >
    {children}
  </fieldset>
);

FieldSet.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export const Legend = ({ className, children }) => (
  <legend
    className={` ${className}`}
  >
    {children}
  </legend>
);

Legend.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export const FormButton = ({ className, children }) => (
  <button
    className={`icon ${className}`}
  >
    {children}
  </button>
);

FormButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
