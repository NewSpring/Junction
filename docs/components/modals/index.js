import { PropTypes } from "react";

const Modal = ({ className, children }) => (
  <div className={`modal ${className || ""}`}>
    {children}
  </div>
  );

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Modal;
