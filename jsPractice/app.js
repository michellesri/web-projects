//problem: we need a simple way to look at a user's badge count and js points
// solution: use node.js to connect to treehouse's api to get profile information to print out

var http = require('http');
var username = 'michellesrikhundonr';

function printMessage(username, badgeCount, points){
  var msg = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in js';
  console.log(msg);
}

//connect to the api url

var request = http.get('http://teamtreehouse.com/' + username + '.json', function(response){
  console.log(response.statusCode);
}).on('error', function(err){
  console.log('got error: ' + err.message);
});

printMessage('Michelle', 1000, 2000);
