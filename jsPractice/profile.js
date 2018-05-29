//problem: we need a simple way to look at a user's badge count and js points
// solution: use node.js to connect to treehouse's api to get profile information to print out

var https = require('https');

//print out message
function printMessage(username, badgeCount, JSpoints, CSSpoints, HTMLpoints){
  var msg = username + ' has ' + badgeCount + ' total badge(s) and ' + JSpoints + ' points in js' + ' and ' + CSSpoints + ' CSSpoints and ' + HTMLpoints + ' HTMLpoints';
  console.log(msg);
}

//print out error messages
function printError(error){
  console.error(error.message);
}

function get(username){
//connect to the api url
  var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response){
    // console.log('status code is : ' + response.statusCode);
    var body = '';

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){
      if(response.statusCode === 200) {
        try {
          // parse data
          var profile = JSON.parse(body);
          // print data
          printMessage(username, profile.badges.length, profile.points.JavaScript, profile.points.CSS, profile.points.HTML);
        } catch(error) {
          //parse error
          printError(error);
        }
      }
      else {
        //status code error
        printError({message: 'there was an error getting the profile for ' + username + '. (' + http.STATUS_CODES[response.statusCode] + ')'});
      }
    });
  });

  //connection error
  request.on('error', printError);
}

module.exports.get = get;
