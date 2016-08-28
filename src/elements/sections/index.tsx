export interface SectionProps {
  className?: string;
  children?: any;
  style?: any;
}

const Section = ({ className, children, style }: SectionProps) => (
  <section style={style} className={`${className || ""}`}>
    {children}
  </section>
);

export default Section;
