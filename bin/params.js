var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = require('../app');

var busboy = require('connect-busboy');

/**
 * Incoming Data Handlers
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(busboy());