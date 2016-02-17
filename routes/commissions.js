var express = require('express');
var router = express.Router();
var routeApi = require('../services/routeApi');

//router.route('/').get(routeApi('find'));
router.route('/upload').post(routeApi('commissions/upload'));
router.route('/process').get(routeApi('commissions/process-data'));

module.exports = router;
