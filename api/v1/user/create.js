module.exports = create;

function create(req, res, next) {
	req.pipeData(null, {user:"1998", name:"Spencer Rose"});
	next();
}