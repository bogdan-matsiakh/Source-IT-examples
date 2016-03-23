var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function(req, res) {
  console.log(req);
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

console.log('started');