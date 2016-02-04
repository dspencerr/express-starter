var app = require('../app');

var version = 'v1';

function setVersion(req, res, next){
	req.apiVersion = version;
	next();
}

app.use(setVersion);