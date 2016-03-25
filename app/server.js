var http = require('http');
var fs = require('fs');
var static = require('node-static');

var file = new static.Server();

http.createServer(function(request, response) {
	// response.writeHead(200);	

	request.addListener('end', function () {
		file.serve(request, response);
	}).resume();

}).listen(8080);