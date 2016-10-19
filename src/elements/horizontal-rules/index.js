import { PropTypes } from "react";

const HorizontalRule = ({ className }) => (
  <hr className={` ${className}`} />
  );

HorizontalRule.propTypes = {
  className: PropTypes.string,
};

export default HorizontalRule;
