var comm = require('@veepleo/triggered-commissions');

module.exports = process;

function process(req, res, next) {

	comm.masterDataProcessing({filePath: __dirname + '/../../../files/Redbeards.txt'}, function (err, results) {
		res.send(results);
	});


}