
const List = ({ className, children }) => (
  <ul className={`${className || ""}`}>
    {children}
  </ul>
);

export default List;
