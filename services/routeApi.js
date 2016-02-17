module.exports = routeApi;

function routeApi(path){
	return function (req, res, next){
		var routeMethod = require('../api/'+req.apiVersion+'/user/'+path);
		routeMethod(req, res, next);
	}
}