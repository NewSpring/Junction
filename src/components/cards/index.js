
const Card = ({ className, title, body, image }) => (
    <div className={`card ${className || ""}`}>
        <img src={image || ""} className="card__image" />
        <h1>
            {title}
        </h1>
        <p>
            {body}
        </p>
    </div>
    );




export default Card;
