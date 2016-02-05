var express = require('express');
var router = express.Router();
var routeApi = require('../services/routeApi');

router.route('/').get(routeApi('find'));

module.exports = router;
