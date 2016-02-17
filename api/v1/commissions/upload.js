var fs = require('fs');

module.exports = upload;

function upload(req, res, next) {

	var fstream;
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename) {
		console.log("Uploading: " + filename);
		fstream = fs.createWriteStream(__dirname + '/../../../files/Redbeards.txt');
		file.pipe(fstream);
		fstream.on('close', function () {
			next();
		});
	});

}