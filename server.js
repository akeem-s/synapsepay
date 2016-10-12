var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path');
var express = require('express');

var app = new (require('express'))()
var port = 1987

var compiler = webpack(config)
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
	console.log(path.join(__dirname, 'index.html'));
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(1987, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:1987');
});
