var fs = require('fs');
var path = require('path');

module.exports = scriptTags;

function scriptTags(req, res, next){
	var filePath = path.join(__dirname, '../../public/prod/scripts.html');
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (err){ return res.error(err); }
		if(!req.ejsData){  req.ejsData = {}; }
		req.ejsData.scriptTags = data;
		next();
	});

}