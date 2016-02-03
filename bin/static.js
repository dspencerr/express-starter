var path = require('path');
var express = require('express');
var app = require('../app');

app.use(express.static(path.join(__dirname, '../public')));