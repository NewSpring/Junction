import { Component } from 'react';
import { storiesOf } from "@kadira/storybook";

import addon from '@kadira/storybook-addons';

var style = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background 0.25s ease-in-out',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  swatches: {
    position: 'absolute',
    overflow: 'auto',
    margin: 0,
    bottom: '10px',
    right: '10px'
  },
  swatch: {
    display: 'block',
    float: 'left',
    margin: '0 0 0 10px',
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out'
  }
}

export class BackgroundDecorator extends Component<any, any> {

  componentWillMount() {
    this.setState({ background: "transparent" });
    this.channel = addon.getChannel();
    this.story = this.props.story();
    this.channel.on('background', (value) => {
      this.setState({ background: value })
    })
  }

  selectColor (value) {
    return () => this.setState({ background: value });
  }

  render () {
    return (
      <div style={Object.assign({},
          style.wrapper,
          { background: this.state.background }
        )}>
        {this.story}
      </div>
    );
  }
}

export default colors => story => <BackgroundDecorator story={story} />;
