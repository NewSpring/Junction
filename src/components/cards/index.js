import { PropTypes } from "react";

const Card = ({ className, title, body, image }) => (
  <div className={`card ${className || ""}`}>
    <img role="presentation" src={image || ""} className="card__image" />
    <h1>
      {title}
    </h1>
    <p>
      {body}
    </p>
  </div>
    );

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
