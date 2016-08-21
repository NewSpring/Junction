import addons from '@kadira/storybook-addons';
const ADDON_ID = "storybook-addon-style";
const PANEL_ID = `${ADDON_ID}/style-panel`

function register() {
  addons.register(ADDON_ID, api => {
    // addons.addPanel can be used to add a new panel to storybook manager
    // The `title` field will be used as the tab title and the `render` field
    // will be executed to render the tab content.
    addons.addPanel(PANEL_ID, {
      title: 'Styles',
      render: () => <h1>Hello World</h1>
    });
  })
}

register();
