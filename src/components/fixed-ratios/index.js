import { PropTypes } from "react";

const FixedRatio = ({ className, ratioClass, styles }) => (
  <div className={className || "one-whole"}>
    <div className={`${ratioClass} background--fill`} style={styles || ""}>
      <div className="raio__item" />
    </div>
  </div>
  );

FixedRatio.propTypes = {
  className: PropTypes.string,
  ratioClass: PropTypes.string,
  styles: PropTypes.string,
};

export default FixedRatio;
