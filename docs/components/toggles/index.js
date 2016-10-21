import { PropTypes } from "react";

const Toggle = ({ className }) => (
  <div className="one-whole push-bottom">
    <div className="toggle">
      <div className={`${className} text-center` || ""}>
        Toggle Text
      </div>
    </div>
  </div>
  );

Toggle.propTypes = {
  className: PropTypes.string,
};

export default Toggle;
