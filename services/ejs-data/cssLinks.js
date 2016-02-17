var fs = require('fs');
var path = require('path');

module.exports = cssLinks;

function cssLinks(req, res, next){
	var filePath = path.join(__dirname, '../../public/prod/links.html');
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		if (err){ return res.error(err); }
		if(!req.ejsData){  req.ejsData = {}; }
		req.ejsData.cssLinks = data;
		next();
	});

}