const path = require('path');
const JscramblerWebpack = require('jscrambler-webpack-plugin');
const jscramblerConfig = require('./jscrambler.config');

// https://jscrambler.com/de/help/webapi/documentation
const jScramblerParams = [
  { name: "whitespaceRemoval" },
  {
    name: "identifiersRenaming",
    options: { mode: "SAFEST" }
  }, {
    name: "duplicateLiteralsRemoval",
    options: { mode: "optimization" }
  },
  { name: "functionReordering" },
  { name: "dotToBracketNotation" },
  { name: "booleanToAnything" },
  { name: "stringConcealing" },
  { name: "propertyKeysReordering" },
  { name: "propertyKeysObfuscation" }
];

module.exports = {
  entry: {
    'core': './src/index.js',
    'chunk2': './src/ChunkTwo.js',
  },
  output: {
    path: path.resolve('./dist/'),
    filename: 'chunks-[name].js',
    libraryTarget: 'umd',
    library: ['chunks', '[name]'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [
    new JscramblerWebpack({
      params: jScramblerParams,
      keys: jscramblerConfig.keys,
      applicationId: jscramblerConfig.applicationId,
      areSubscribersOrdered: false,
      applicationTypes: {
        webBrowserApp: true,
        desktopApp: false,
        serverApp: false,
        hybridMobileApp: true,
        javascriptNativeApp: true,
        html5GameApp: false
      },
      languageSpecifications: {
        es5: true,
        es6: false,
        es7: false
      }
    }),
  ],
};
