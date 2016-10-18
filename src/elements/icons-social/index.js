
const IconSocial = ({ className, children }) => (
  <a href="#" className={`${className} display-inline-block`}>{children}</a>
);

export default IconSocial;

export const IconSocialFilled = ({ className, children }) => (
  <a href="#" className={`${className} icon--filled push-half display-inline-block`}>{children}</a>
);
