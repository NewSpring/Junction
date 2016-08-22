export interface CheckboxProps {
  className?: string;
  children?: any;
}

export const Checkbox = ({ className, children }: CheckboxProps) => (
  <div className={`checkbox ${className}`}>{children}</div>
);
