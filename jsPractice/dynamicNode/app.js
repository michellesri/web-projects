//problem: we need a simple way to look at a user's badge count and JS points from a web browser.
//solution: use nodeJS to perform the profile look ups and serve our template via HTTP.

// create a web server
var routes = require('./routes.js');
var http = require('http');
http.createServer(function(request,response){
  routes.home(request, response);
  routes.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//handle HTTP route GET / and POST / i.e. Home

// function that handles the reading of files and merge in values
  //read from file and get a string
    // merge values in to string
