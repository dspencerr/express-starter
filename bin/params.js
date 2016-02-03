var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = require('../app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
