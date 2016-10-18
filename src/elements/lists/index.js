import { PropTypes } from "react";

export const UnorderedList = ({ className, children }) => (
  <ul className={`${className || ""}`}>
    {children}
  </ul>
);

UnorderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export const OrderedList = ({ className, children }) => (
  <ol className={`${className || ""}`}>
    {children}
  </ol>
);

OrderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

