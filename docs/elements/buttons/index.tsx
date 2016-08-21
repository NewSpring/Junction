

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
