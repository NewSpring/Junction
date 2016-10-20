import { PropTypes } from "react";

const backgroundStyle = {
  backgroundImage: "url('http://orig00.deviantart.net/e4b2/f/2015/021/6/6/shai_hulud__the_maker_by_balaskas-d8esp4j.jpg')",
};

const Background = ({ className, img = true }) => (
  <div className="one-whole">
    <div className={`${className} ratio--landscape`} style={img ? backgroundStyle: {}}>
      <div className="raito__item" />
    </div>
  </div>
);

Background.propTypes = {
  className: PropTypes.string,
  img: PropTypes.bool,
};

export default Background;

