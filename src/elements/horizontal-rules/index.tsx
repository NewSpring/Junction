export interface HorizontalRuleProps {
  className?: string;
}

const HorizontalRule = ({ className }: HorizontalRuleProps) => (
  <hr className={` ${className}`} />
);

export default HorizontalRule;
