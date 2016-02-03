/*
 * Build an error and add additional data, if needed.
 */
module.exports = anError;

function anError(message, code, status, data) {
	var e = new Error();
	e.message = message;
	e.code = code;
	e.status = status;
	e.data = data;

	return e;
}

