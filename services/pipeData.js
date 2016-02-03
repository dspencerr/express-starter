/*
 * This will catch errors and place results onto the req.
 */
module.exports = pipeData;

function pipeData(req, next) {
	return function(error, results) {
		if (error) {
			next(error);
		} else {
			req.data = results;
			next();
		}
	}
}

