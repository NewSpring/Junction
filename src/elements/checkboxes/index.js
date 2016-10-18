import { PropTypes } from "react";

const Checkbox = ({ className, name, value, checked }) => {
  if (checked) {
    return (<input className={className} type="checkbox" name={name} value={value} checked onChange={this.onChange} />);
  }

  return (<input className={className} type="checkbox" name={name} value={value} onChange={this.onChange} />);
};

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

export default Checkbox;
