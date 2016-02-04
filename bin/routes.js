var app = require('../app');
var sendData = require('../services/sendData');

/**
 * ROUTE NAMESPACES
 *
 */

var routes = require('../routes/index');
app.use('/', routes);
//app.use('/users', sendData);

var users = require('../routes/user');
app.use('/user', users);
app.use('/users', sendData);