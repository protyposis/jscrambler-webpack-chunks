const path = require('path');

module.exports = {
  entry: {
    'core': './src/index.js',
  },
  output: {
    path: path.resolve('./dist/'),
    filename: 'chunks-[name].js',
    libraryTarget: 'umd',
    library: ['chunks', '[name]'],
  }
};
