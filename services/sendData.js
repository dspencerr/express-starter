/*
 * This will send back the data on the req.
 */
var assert = require('assert');

module.exports = sendData;

function sendData(req, res, next) {
	assert.equal(undefined, res.headerSent);

	res.send(req.data);
}

