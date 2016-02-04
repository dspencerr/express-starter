var express = require('express');
var router = express.Router();
var apiPipe = require('../services/routeApi');

router.route('/').get(req.apiPipe('find'));



module.exports = router;
