import { Component } from "react";

export default class Transition extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div
        className="transition"
        style={this.state && this.state.visible
          ? { display: "block", backgroundColor: "gray", color: "white", marginLeft: "0" }
          : { display: "block", backgroundColor: "gray", color: "white", marginLeft: "50px" }}
        onClick={this.toggleVisible}
      >
        <h1>
          Hello World
        </h1>
        <p>
          Click to move this div over.
        </p>
      </div>
    );
  }

}
