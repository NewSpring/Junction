export interface IconSocialProps {
  className?: string;
  children?: any;
};

const IconSocial = ({ className, children }: IconSocialProps) => (
  <a href="#" className={className}>{children}</a>
);

export default IconSocial;
