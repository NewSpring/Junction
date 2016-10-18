import { PropTypes } from "react";

const ButtonSocial = ({ className, children }) => (
  <a href="" className={className}>{children}</a>
  );

ButtonSocial.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default ButtonSocial;
