var logger = require('morgan');
var app = require('../app');

app.use(logger('dev'));