'use strict';

var express = require('express'),
  posts = require('./mock/posts.json');

var postsLists = Object.keys(posts).map(function(value){
  return posts[value];
});

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

//express is a function that returns an object. we assign it to app. it has methods. .get .post.

//express is a routing framework for node.

// routing is handling data requests to different endpoints. www.wahoo.com/blah <-- endpoint is /blah

app.get('/', function(req, res){
  var path = req.path;
  res.locals.path = path;
  res.render('index');
});

app.get('/blog/:blah?', function(req, res){
  var title = req.params.blah;
  if (title === undefined){
    res.status(503);
    // this gives the status code of 502 which is a service unavaiable error
    res.render('blog', {posts: postsLists});
  } else{
    var post = posts[title] || {};
    res.render('post', {post: post});
  }
});

app.get('/posts', function(req, res){
  if (req.query.raw){
    res.json(posts);
  } else{
    res.json(postsLists);
  }
  res.json(postsLists);
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
