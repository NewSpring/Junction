export interface FormProps {
  className?: string;
  children?: any;
};

const Form = ({ className, children }: FormProps) => (
  <form
    className={` ${className}`}
  >
    {children}
  </form>
);

export default Form;

export interface FieldSetProps {
  className?: string;
  children?: any;
}

export const FieldSet = ({ className, children }: FieldSetProps) => (
  <fieldset
    className={` ${className}`}
  >
    {children}
  </fieldset>
);

export interface LegendProps {
  className?: string;
  children?: any;
}

export const Legend = ({ className, children }: LegendProps) => (
  <legend
    className={` ${className}`}
  >
    {children}
  </legend>
);

export interface FormButtonProps {
  className?: string;
  children?: any;
}

export const FormButton = ({ className, children }: FormButtonProps) => (
  <button
    className={`icon ${className}`}
  >
    {children}
  </button>
);
