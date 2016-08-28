export interface IconProps {
  className?: string;
  children?: string;
};

const Icon = ({ className, children }: IconProps) => (
  <div className={`icon fa fa-${className} push-half display-inline-block`}>{children}</div>
);

export default Icon;

export const IconFilled = ({ className, children }: IconProps) => (
  <div className={`icon--filled fa fa-${className} push-half display-inline-block`} style={{paddingTop: "5px"}}>{children}</div>
);

export const IconAlert = ({ className, children }: IconProps) => (
  <div className={`icon--alert fa fa-${className} push-half display-inline-block`} style={{paddingTop: "5px"}}>{children}</div>
);

export const IconBase = ({ className, children }: IconProps) => (
  <div className={`icon--base fa fa-${className} push-half display-inline-block`} style={{paddingTop: "5px"}}>{children}</div>
);

export const IconOutlined = ({ className, children }: IconProps) => (
  <div className={`icon--outlined fa fa-${className} push-half display-inline-block`} style={{paddingTop: "5px"}}>{children}</div>
);
