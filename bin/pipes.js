var app = require('../app');

/**
 * PIPE DATA
 */
app.use(function (req, res, next) {
	function pipeData(error, results){
		if (error) {
			next(error);
		} else {
			req.data = results;
			next();
		}
	}
	req.pipeData = pipeData;
	next();
});


/**
 * PIPE API
 */
app.use(function (req, res, next) {
	function apiPipe(path){
		var routeMethod = require('../api/'+req.apiVersion+'/user/'+path);
		routeMethod(req, res, next);
	}
	req.apiPi
});
