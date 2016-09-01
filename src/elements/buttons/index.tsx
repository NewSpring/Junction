

export interface ButtonProps {
  className?: string;
  children?: any;
}

const Button = ({ className, children }: ButtonProps) => (
  <button className={`btn ${className}`}>{children}</button>
);

export default Button;

export const ButtonFilled = ({ className, children }: ButtonProps) => (
  <button className={`btn--filled ${className}`}>{children}</button>
);

export const ButtonSmall = ({ className, children }: ButtonProps) => (
  <button className={`btn--small ${className}`}>{children}</button>
);

export const ButtonGray = ({ className, children }: ButtonProps) => (
  <button className={`btn--dark-tertiary ${className}`}>{children}</button>
);

export const ButtonDisabled = ({ className, children }: ButtonProps) => (
  <button className={`btn--disabled ${className}`}>{children}</button>
);

export const ButtonCorners = ({ className, children }: ButtonProps) => (
  <button className={`btn--corners ${className}`}>{children}</button>
);

export const ButtonLight = ({ className, children }: ButtonProps) => (
  <button className={`btn--light ${className}`}>{children}</button>
);

export const ButtonDarkPrimary = ({ className, children }: ButtonProps) => (
  <button className={`btn--dark-primary ${className}`}>{children}</button>
);

export const ButtonDarkSecondary = ({ className, children }: ButtonProps) => (
  <button className={`btn--dark-secondary ${className}`}>{children}</button>
);

export const ButtonDarkTertiary = ({ className, children }: ButtonProps) => (
  <button className={`btn--dark-tertiary ${className}`}>{children}</button>
);

export const ButtonAlert = ({ className, children }: ButtonProps) => (
  <button className={`btn--alert ${className}`}>{children}</button>
);

export const ButtonIcon = ({ className, children }: ButtonProps) => (
  <button className={`btn--icon ${className}`}>{children}</button>
);
