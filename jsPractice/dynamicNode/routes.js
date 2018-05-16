var Profile = require('./profile.js');

function home(request, response){
  if (request.url === '/'){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }

}
  // response.end('Hello World\n');
  // if url == '/' && GET
    // show search
  // if url == '/' && POST
    // redirect to /:username

//3. handle HTTP route for GET /:username i.e. /michellesrikhundonr
  //if url == '/...'
    //get json from Treehouse
      //on 'end'
        //show profile
      //on 'error'
        //show error

function user(request, response){
  var username = request.url.replace('/', '');
  if (username.length > 0){
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Header\n');

    var studentProfile = new Profile(username);
    michelleProfile.on('end', function(profileJSON){
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgecount: profileJSON.badges.length,
        javascript: profileJSON.points.JavaScript,
        HTML: profileJSON.points.HTML,
        CSS: profileJSON.points.CSS
      };

      response.write(values.username + ' has ' + values.javascript + ' js points, ' + values.HTML + ' html points, ' + values.CSS + ' css points.\n');
      response.end('Footer\n');

    });

    michelleProfile.on('error', function(error){

    });

  }
}

module.exports.home = home;
module.exports.user = user;
