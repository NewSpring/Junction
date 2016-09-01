

export interface ListProps {
  className?: string;
  children?: any;
}

const List = ({ className, children }: ListProps) => (
  <ul className={`${className || ""}`}>
    {children}
  </ul>
);

export default List;
