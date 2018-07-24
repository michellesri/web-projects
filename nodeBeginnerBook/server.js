var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, res){
        var postData = '';
        var pathname = url.parse(req.url).pathname;
        console.log('request for ' + pathname + ' received');

        req.setEncoding('utf8');

        req.addListener('data', (chunk) => {
            postData += chunk;
            console.log('received POST data chunk ' + chunk + '.');
        });

        req.addListener('end', () => {
            route(handle, pathname, res, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}

exports.start = start;