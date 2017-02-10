const path = require('path');
module.exports = {
  module: {
    loaders: [
      {test: /\.(tsx|ts)$/, exclude: /node_modules/, loaders: ['ts-loader']}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.tsx', '.ts']
  }
}
