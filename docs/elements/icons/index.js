import { PropTypes } from "react";

const IconProps = {
  className: PropTypes.string,
  children: PropTypes.object,
};

const Icon = ({ className, children }) => (
  <div className={`icon fa fa-${className} push-half display-inline-block`}>{children}</div>
  );

Icon.propTypes = IconProps;

export default Icon;

export const IconFilled = ({ className, children }) => (
  <div className={`icon--filled fa fa-${className} push-half display-inline-block`} style={{ paddingTop: "5px" }}>{children}</div>
  );

IconFilled.propTypes = IconProps;

export const IconAlert = ({ className, children }) => (
  <div className={`icon--alert fa fa-${className} push-half display-inline-block`} style={{ paddingTop: "5px" }}>{children}</div>
  );

IconAlert.propTypes = IconProps;

export const IconBase = ({ className, children }) => (
  <div className={`icon--base fa fa-${className} push-half display-inline-block`} style={{ paddingTop: "5px" }}>{children}</div>
  );

IconBase.propTypes = IconProps;

export const IconOutlined = ({ className, children }) => (
  <div className={`icon--outlined fa fa-${className} push-half display-inline-block`} style={{ paddingTop: "5px" }}>{children}</div>
  );

IconOutlined.propTypes = IconProps;
