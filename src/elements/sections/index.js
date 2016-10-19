import { PropTypes } from "react";

const Section = ({ className, children, style }) => (
  <section style={style} className={`${className || ""}`}>
    {children}
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.string,
};

export default Section;
