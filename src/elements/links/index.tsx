export interface LinkProps {
  className?: string;
  children?: string;
  style?: any;
  href?: string;
}

const Link = ({ className, children, style, href }: LinkProps) => (
  <a href={`${href || "#"}`} style={style} className={`${className || ""}`}>
    {children}
  </a>
);

export default Link;
