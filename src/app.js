'use strict';

var express = require('express'),
  posts = require('./mock/posts.json');

var app = express();

debugger;

//express is a function that returns an object. we assign it to app. it has methods. .get .post.

//express is a routing framework for node.

// routing is handling data requests to different endpoints. www.wahoo.com/blah <-- endpoint is /blah

app.get('/', function(request, response){
  response.send('<h1>wahooooo </h1>');
});

app.get('/blog/:title', function(request, response){
  var title = req.params.title;
  var post = posts[title];
  response.send(posts);
});

//post is used for creating data.
//get is used to read data
//put is used to update data
//delete is to delete data.
var port = process.argv[2] || 3000;
// when this port is specified
    // nodemon src/app 9000 <-- specifies to run on port 9000

// , or if nothing is specified, use 3000
app.listen(port, function(){
  console.log('the frontend server is running on ' + port);
});
