export interface InputProps {
  className?: string;
  type?: string;
}

const Input = ({ className, type }: InputProps) => (
  <input
    className={` ${className}`}
    type={`${type}`}
  />
);

export default Input;
