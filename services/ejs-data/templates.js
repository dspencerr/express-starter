var fs = require('fs');
var path = require('path');

module.exports = templates;

function templates(req, res, next){
	var filePath = path.join(__dirname, '../../public/prod/templates.html');
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (err){ return res.error(err); }
		if(!req.ejsData){  req.ejsData = {}; }
		req.ejsData.templates = data;
		next();
	});

}