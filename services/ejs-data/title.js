module.exports = title;

function title(req, res, next){
	req.ejsData = {};
	req.ejsData.title = "Evolve commission engine.";
	next();

}