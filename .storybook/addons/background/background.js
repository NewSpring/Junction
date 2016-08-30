import { Component } from 'react';

var style = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background 0.25s ease-in-out'
  },
  swatches: {
    textAlign: 'center',
    padding: '0',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    width: '175px',
    verticalAlign: 'top',
    wordWrap: 'break-word',
  },
  swatch: {
    height: '175px',
    borderRadius: '4px 4px 0 0',
    transition: 'opacity 0.25s ease-in-out',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  listStyle: {
    listStyle: 'none',
  },
  pushBottom: {
    marginBottom: '10px',
  },
  pushLeft: {
    marginLeft: '10px',
  },
  soft: {
    padding: '20px',
  },
  hard: {
    padding: '0',
  },
  flush: {
    margin: '0',
  }
}

const state = {
  selected: null
}

export class BackgroundItem extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ selected: this.props.value });
  }

  componentDidMount() {
    const { channel, api } = this.props;
  }

  onBackgroundChange = () => {
    const { value, name, channel } = this.props;
    channel.emit('background', value);
  }

  render () {
    return (
      <ul
        style={Object.assign({},
          style.swatches,
          style.listStyle,
          style.hard
        )}
        onClick={this.onBackgroundChange}
      >
        <li
          style={Object.assign({},
            style.swatch, {
              background: this.props.value,
              'background-size': 'cover',
              'background-position': 'center',
            }
          )}
        >
        </li>
        <ul
          style={Object.assign({},
            style.swatchInfo,
            style.listStyle,
            style.soft
          )}
        >
          <li>
            <h4
              style={Object.assign({},
                style.flush,
                style.pushBottom
              )}
            >
              {this.props.name}:
            </h4>
          </li>
          <li>
            {this.props.value}
          </li>
        </ul>
      </ul>
    );
  }
}

export default BackgroundItem;