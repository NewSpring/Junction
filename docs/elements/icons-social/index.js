import { PropTypes } from "react";

const IconSocial = ({ className, children }) => (
  <a href="" className={`${className} display-inline-block`}>{children}</a>
  );

IconSocial.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default IconSocial;

export const IconSocialFilled = ({ className, children }) => (
  <a href="" className={`${className} icon--filled push-half display-inline-block`}>{children}</a>
  );

IconSocialFilled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};
