export interface ButtonSocialProps {
  className?: string;
  children?: any;
}

const ButtonSocial = ({ className, children }: ButtonSocialProps) => (
  <a href={`#`} className={className}>{children}</a>
);

export default ButtonSocial;
