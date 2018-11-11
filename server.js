var http = require('http');
var app = require('./app');
var httpPort = (process.env.PORT || 3000);
var server = http.createServer(app);
server.listen(httpPort);