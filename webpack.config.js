var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
