const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => ([
              require('autoprefixer') // post css plugins, can be exported to postcss.config.js
            ]),
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      common: path.resolve(__dirname, 'src/common/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
};
