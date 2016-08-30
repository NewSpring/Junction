import addons from '@kadira/storybook-addons';

import BackgroundItem from "./background";
const ADDON_ID = "storybook-addon-background";
const PANEL_ID = `${ADDON_ID}/background-panel`;

import createChannel from "@kadira/storybook-channel-pagebus";

function colorChange(color) {

}

export {
  colorChange
}

const backgrounds = [
  {
    name: 'primary',
    value: '#191919'
  },
  {
    name: 'secondary',
    value: '#494949'
  },
  {
    name: 'tertiary',
    value: '#999'
  },
  {
    name: 'image',
    value: 'url("//dg0ddngxdz549.cloudfront.net/images/cached/images/remote/http_s3.amazonaws.com/ns.images/newspring/fpo/fpo.Music2_1700_850_90_c1.jpg")'
  }
]

class BackgroundContainer extends React.Component {

  componentWillMount() {
    console.log(this.props.channel)
    window.foo = this.props.channel
    this.props.channel.on('background', (...args) => {
      console.log('foo');
      console.log(...args)
    });
  }

  render() {
    return(
      <ul>
        {backgrounds.map(background => (
          <BackgroundItem
            value={background.value}
            name={background.name}
            key={background.name}
            channel={this.props.channel}
          />
        )) }
      </ul>
    );
  }
}

function register() {
  addons.register(ADDON_ID, api => {
    // addons.addPanel can be used to add a new panel to storybook manager
    // The `title` field will be used as the tab title and the `render` field
    // will be executed to render the tab content.
    const channel = addons
    addons.addPanel(PANEL_ID, {
      title: 'Backgrounds',
      render: () => (
        <BackgroundContainer channel={addons.getChannel()} api={api} />
      ),
    });
  })
}

register();