const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIS_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIS_DIR
  },
  module: {
    rules: [
      {
      test: /\.jsx/,
      include: SRC_DIR,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
  }
};