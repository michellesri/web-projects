var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var querystring = require('querystring');

var commonHeaders = {'Content-type': 'text/html'};

function home(request, response){
  if (request.url === '/'){
    if(request.method.toLowerCase() === 'get'){
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
      response.end();
    } else {
      request.on('data', function(postBody){
        var query = querystring.parse(postBody.toString());
        response.writeHead(303, {'Location': '/' + query.username});
        response.end();
      });
    }
  }

}

function user(request, response){
  var username = request.url.replace('/', '');
  response.writeHead(200, commonHeaders);
  if (username.length > 0){
    renderer.view('header', {}, response);

    var studentProfile = new Profile(username);
    studentProfile.on('end', function(profileJSON){
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgecount: profileJSON.badges.length,
        javascript: profileJSON.points.JavaScript,
        HTML: profileJSON.points.HTML,
        CSS: profileJSON.points.CSS
      };
      renderer.view('profile', values, response);
      response.write(values.username + ' has ' + values.javascript + ' js points, ' + values.HTML + ' html points, ' + values.CSS + ' css points.\n');
      renderer.view('footer', {}, response);
      response.end();

    });

    studentProfile.on('error', function(error){
      renderer.view('error', {errorMessage: error.message}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
      response.end();

    });

  }
}

module.exports.home = home;
module.exports.user = user;
