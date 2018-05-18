var unsecurePlainTextPassword = 'password';

var bcrypt = require('bcrypt');
var colors = require('colors');

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err,hash) {
    console.log(hash.green);
  });

});
