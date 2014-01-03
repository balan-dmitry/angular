var http       = require('http'),
	nodeStatic = require('node-static'),
	file       = new nodeStatic.Server('.');

http.createServer(function(req, res){
	file.serve(req, res);
}).listen(8080);

console.log('Server runing on port 8080');
