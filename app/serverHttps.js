var https = require('https');
var fs = require('fs');
var static = require('node-static');

var staticServer = new static.Server();

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function(req, res) {
  
	if (req.url === '/data') {
		fs.readFile('static/data/data.json', function(err, contents) {
			console.log(contents);
			res.write(contents);
			res.end();
		});
	} else {
		req.addListener('end', function () {
			staticServer.serve(req, res);
		}).resume();		
	}
  
}).listen(8000);

console.log('started at 8000');
