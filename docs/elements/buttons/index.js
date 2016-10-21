import { PropTypes } from "react";

const ButtonProps = {
  className: PropTypes.string,
  children: PropTypes.object,
};

const Button = ({ className, children }) => (
  <button className={`btn ${className}`}>{children}</button>
  );

Button.propTypes = ButtonProps;

export default Button;

export const ButtonFilled = ({ className, children }) => (
  <button className={`btn--filled ${className}`}>{children}</button>
);

ButtonFilled.propTypes = ButtonProps;

export const ButtonSmall = ({ className, children }) => (
  <button className={`btn--small ${className}`}>{children}</button>
);

ButtonSmall.propTypes = ButtonProps;

export const ButtonDisabled = ({ className, children }) => (
  <button className={`btn--disabled ${className}`}>{children}</button>
);

ButtonDisabled.propTypes = ButtonProps;

export const ButtonCorners = ({ className, children }) => (
  <button className={`btn--corners ${className}`}>{children}</button>
);

ButtonCorners.propTypes = ButtonProps;

export const ButtonLight = ({ className, children }) => (
  <button className={`btn--light ${className}`}>{children}</button>
);

ButtonLight.propTypes = ButtonProps;

export const ButtonDarkPrimary = ({ className, children }) => (
  <button className={`btn--dark-primary ${className}`}>{children}</button>
);

ButtonDarkPrimary.propTypes = ButtonProps;

export const ButtonDarkSecondary = ({ className, children }) => (
  <button className={`btn--dark-secondary ${className}`}>{children}</button>
);

ButtonDarkSecondary.propTypes = ButtonProps;

export const ButtonDarkTertiary = ({ className, children }) => (
  <button className={`btn--dark-tertiary ${className}`}>{children}</button>
);

ButtonDarkTertiary.propTypes = ButtonProps;

export const ButtonAlert = ({ className, children }) => (
  <button className={`btn--alert ${className}`}>{children}</button>
);

ButtonAlert.propTypes = ButtonProps;

export const ButtonIcon = ({ className, children }) => (
  <button className={`btn--icon ${className}`}>{children}</button>
);

ButtonIcon.propTypes = ButtonProps;
