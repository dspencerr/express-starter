//var db = require('../../modules/mongo/connection');

module.exports = find;

function find(req, res, next) {
	req.pipeData(null, {user:"1998", name:"Spencer Rose"});
	next();
}