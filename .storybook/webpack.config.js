const path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: "babel-loader!ts-loader" },
      {
        test: /\.scss$/,
        loader: [ "style", "css", "sass"],
        include: path.resolve(__dirname, '../')
      }
      // { test: /\.css?$/, loaders: [ 'style', 'raw' ], include: path.resolve(__dirname, '../') }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" },
    ]
  }
}
