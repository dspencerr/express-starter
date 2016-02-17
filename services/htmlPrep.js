module.exports = htmlPrep;

function htmlPrep(req, res, next){
	req.ejsData = {};
	req.ejsData.title = "Evolve commission engine.";
	next();

}