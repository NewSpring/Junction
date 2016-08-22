import { Component } from "react";

const style = {
  controls: {
    position: 'absolute',
    overflow: 'auto',
    margin: 0,
    top: '10px',
    left: '10px',
    display: "inline-block",
  },
};

let previousState = "desktop";
class Responsive extends Component {
  state = {
    size: "desktop",
  }

  sizes = {
    mobile: {
      width: "320px",
      height: "568px",
    },
    tablet: {
      width: "1024px",
      height: "768px",
    },
    desktop: {
      width: "100%",
      height: "100%",
    }
  }

  constructor(...args) {
    super(...args);

    this.frame = window.parent.document.getElementsByTagName("IFRAME")[0];
    this.parent = this.frame.parentElement;

    this.parent.style.display = "flex";
    this.parent.style.alignItems = "center";
    this.parent.style.justifyContent = "center";

    this.frame.style = null;
    this.frame.style.padding = "0px"
    this.frame.style.margin = "0px"
    this.frame.style.border = "0";
    this.frame.style.borderRadius = "10px";
    this.frame.style.transition = 'all 0.25s ease-in-out'
  }

  componentWillMount() {
    this.setState({ size: previousState })
  }

  makeMobile() {
    this.frame.style.border = "20px solid #1c1c1c";
  }

  makeTablet() {
    this.frame.style.border = "30px solid #1c1c1c";
  }

  reset() {
    this.frame.style.border = "0px"
  }
  
  render() {

    const sizes = this.sizes[this.state.size];

    this.frame.style.height = sizes.height;
    this.frame.style.width =  sizes.width;

    return (
      <div>
        {this.props.story()}
        <div style={style.controls}>
          <i className="fa fa-desktop fa-2x" style={{ display: "inline-block" }}onClick={() => {
            this.setState({ size: "desktop" });
            this.reset();
            previousState = "desktop";
          }}/>
          <i className="fa fa-tablet fa-2x"style={{ display: "inline-block", paddingLeft: "10px"}}onClick={() => {
            this.setState({ size: "tablet" });
            this.makeTablet();
            previousState = "tablet";
          }}/>
          <i className="fa fa-mobile fa-2x" style={{ display: "inline-block", paddingLeft: "10px"}}onClick={() => {
            this.setState({ size: "mobile" });
            this.makeMobile();
            previousState = "mobile";
          }}/>
        </div>
      </div>
    )
  }
}

export default sizes => story => <Responsive sizes={sizes} story={story} />;
