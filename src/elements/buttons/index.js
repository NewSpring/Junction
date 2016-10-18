
const Button = ({ className, children }) => (
  <button className={`btn ${className}`}>{children}</button>
);

export default Button;

export const ButtonFilled = ({ className, children }) => (
  <button className={`btn--filled ${className}`}>{children}</button>
);

export const ButtonSmall = ({ className, children }) => (
  <button className={`btn--small ${className}`}>{children}</button>
);

export const ButtonGray = ({ className, children }) => (
  <button className={`btn--dark-tertiary ${className}`}>{children}</button>
);

export const ButtonDisabled = ({ className, children }) => (
  <button className={`btn--disabled ${className}`}>{children}</button>
);

export const ButtonCorners = ({ className, children }) => (
  <button className={`btn--corners ${className}`}>{children}</button>
);

export const ButtonLight = ({ className, children }) => (
  <button className={`btn--light ${className}`}>{children}</button>
);

export const ButtonDarkPrimary = ({ className, children }) => (
  <button className={`btn--dark-primary ${className}`}>{children}</button>
);

export const ButtonDarkSecondary = ({ className, children }) => (
  <button className={`btn--dark-secondary ${className}`}>{children}</button>
);

export const ButtonDarkTertiary = ({ className, children }) => (
  <button className={`btn--dark-tertiary ${className}`}>{children}</button>
);

export const ButtonAlert = ({ className, children }) => (
  <button className={`btn--alert ${className}`}>{children}</button>
);

export const ButtonIcon = ({ className, children }) => (
  <button className={`btn--icon ${className}`}>{children}</button>
);
