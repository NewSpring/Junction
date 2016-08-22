
export interface ButtonSocialProps {
  className?: string;
  children?: any;
}

export const ButtonTwitter = ({ className, children }: ButtonSocialProps) => (
  <button className={`btn--twitter ${className}`}>{children}</button>
);

export const ButtonFacebook = ({ className, children }: ButtonSocialProps) => (
  <button className={`btn--facebook ${className}`}>{children}</button>
);

export const ButtonInstagram = ({ className, children }: ButtonSocialProps) => (
  <button className={`btn--instagram ${className}`}>{children}</button>
);

export const ButtonGoogle = ({ className, children }: ButtonSocialProps) => (
  <button className={`btn--google ${className}`}>{children}</button>
);
