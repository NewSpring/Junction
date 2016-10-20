import { PropTypes } from "react";

const body = "Flush removes the margin from whatever side that it is applied to. For these stories," +
  " a 40px margin has been added to all sides of a paragraph";

/* eslint-disable quotes */
const Flush = ({ className }) => (
  <div style={{ backgroundColor: "red", display: "inline-block" }}>
    <style>{`p { margin: 40px; }`}</style>
    <p style={{ backgroundColor: "silver", color: "white" }}>
      No flush<br />
      {body}
    </p>
    <p style={{ backgroundColor: "silver", color: "white" }} className={`${className || ""}`}>
      With {className}<br />
    </p>
  </div>
  );

Flush.propTypes = {
  className: PropTypes.string,
};

export default Flush;
