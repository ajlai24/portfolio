const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();
// const path = require('path')

const compiler = webpack(webpackConfig);
const sendIndex = (req, res) => {
  res.sendFile(__dirname + '/index.html');
};

// app.use(express.static(__dirname + '/www'));
app.use(express.static(__dirname + '/static'));

app.get('/', sendIndex);
app.get('/portfolio', sendIndex);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
