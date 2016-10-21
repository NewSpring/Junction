import { PropTypes } from "react";

const Overlay = ({ className, children }) => (
  <div className={className || ""}>
    <div className="overlay__item">
      <h1>{children}</h1>
    </div>
  </div>
  );

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
};

export default Overlay;
