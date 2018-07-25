var http = require('http');
var url = require('url');
var port = 8888 || process.argv[2];

function start(route, handle){
  function onRequest(req, res){
    var pathname = url.parse(req.url).pathname;
    console.log('request for ' + pathname + ' received');
    route(handle, pathname, res, req);
  }

  http.createServer(onRequest).listen(port);
  console.log('server has started on ' + port);
}

exports.start = start;