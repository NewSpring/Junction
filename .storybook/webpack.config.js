const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: "raw"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: [ "style", "css", "sass", "sass-variable-loader"],
        include: path.resolve(__dirname, '../')
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader", exclude: /node_modules/ }
    ]
  },
  externals: {
    "jsdom": "window",
    "cheerio": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window",
    "react/addons": true,
  }
}
