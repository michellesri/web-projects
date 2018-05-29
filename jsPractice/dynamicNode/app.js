//problem: we need a simple way to look at a user's badge count and JS points from a web browser.
//solution: use nodeJS to perform the profile look ups and serve our template via HTTP.

// create a web server
var routes = require('./designs/routes.js');
var http = require('http');

http.createServer(handleRequests).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//handle HTTP route GET / and POST / i.e. Home

function handleRequests(request,response){
  console.log(request.method);
  routes.home(request, response);
  routes.user(request, response);
}
