var app = require('../app');
var express = require('express');
var router = express.Router();



var title = require('../services/ejs-data/title');
app.use(title);

var cssLinks = require('../services/ejs-data/cssLinks');
app.use(cssLinks);

var scriptTags = require('../services/ejs-data/scriptTags');
app.use(scriptTags);

var templates = require('../services/ejs-data/templates');
app.use(templates);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', req.ejsData);
});

router.get('/data', function(req, res, next) {
	res.render('index', req.ejsData);
});

router.get('/payments', function(req, res, next) {
	res.render('index', req.ejsData);
});

router.get('/history', function(req, res, next) {
	res.render('index', req.ejsData);
});

module.exports = router;
