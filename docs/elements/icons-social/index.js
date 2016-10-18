export interface IconSocialProps {
  className?: string;
  children?: any;
};

const IconSocial = ({ className, children }: IconSocialProps) => (
  <a href="#" className={`${className} display-inline-block`}>{children}</a>
);

export default IconSocial;

export const IconSocialFilled = ({ className, children }: IconSocialProps) => (
  <a href="#" className={`${className} icon--filled push-half display-inline-block`}>{children}</a>
);
