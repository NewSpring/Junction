import { PropTypes } from "react";

const Accordion = ({ className }) => (
  <div className="accordion" data-accordion>
    <div className={className || "accordion__item"}>
      <h1 className="accordion__item--trigger" data-accordion-trigger>Pizza?</h1>
      <p>lots of pizza is always better</p>
    </div>
  </div>
);

Accordion.propTypes = {
  className: PropTypes.string,
};

export default Accordion;
