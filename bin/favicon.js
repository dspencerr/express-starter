var favicon = require('serve-favicon');
var app = require('../app');
var path = require('path');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));