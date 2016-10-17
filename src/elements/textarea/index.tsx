export interface TextAreaProps {
  className?: string;
  children?: any;
  name?: string;
  placeholder?: string;
}

const TextArea = ({ className, children, name, placeholder }: TextAreaProps) => (
  <textarea
    className={`${className || ""}`}
    name={`${name || ""}`}
    placeholder={`${placeholder || ""}`}
  >
    {children}
  </textarea>
);

export default TextArea;
