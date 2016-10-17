export interface SelectProps {
  className?: string;
  children?: any;
}

const Select = ({ className, children }: SelectProps) => (
  <select
    className={`${className}`}
  >
    {children}
  </select>
);

export default Select;
