const path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: "babel-loader!ts-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: [ "style", "css", "sass", "sass-variable-loader"],
        include: path.resolve(__dirname, '../')
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader", exclude: /node_modules/ }
    ]
  }
}
