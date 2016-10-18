

export interface ListProps {
  className?: string;
  children?: any;
}

export const UnorderedList = ({ className, children }: ListProps) => (
  <ul className={`${className || ""}`}>
    {children}
  </ul>
);

export const OrderedList = ({ className, children }: ListProps) => (
  <ol className={`${className || ""}`}>
    {children}
  </ol>
);
