
const Link = ({ className, children, style, href }) => (
  <a href={`${href || "#"}`} style={style} className={`${className || ""}`}>
    {children}
  </a>
);

export default Link;
