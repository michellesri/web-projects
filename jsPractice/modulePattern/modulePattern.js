!function(underscore){
  function blah(){
    console.log('blahhh');
  }

  blah(_);
}();

// module pattern:
// wrap the function so that. the whole thing will be treated as an expression that will be evaluated immediately.
// the global name space is not cluttered with 'blah'
//
// using an ! at the beginning instead of () will help when you concatenate multiple files.
//
// esp if you don't know which file comes first.
//
// import other globals that can be used inside the module.
//
// import underscore module.

!function(underscore){
  underscore.somemethod = 'yay!';
  console.log(underscore.VERSION); //1.8.2
}(_);

// console -> _.somemethod = "yay!"

var newModule = (function(){
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function(){
    console.log('hello mars');
  };

  exports.goodbye = function(){
    console.log('goodbye!');
  };
  return exports;
})();

// loose augmentation pattern:

!function(underscore){
  underscore.somemethod = 'yay!';
  console.log(underscore.VERSION); //1.8.2
}(_);

// console -> _.somemethod = "yay!"

var newModule.sub = (function(exports){
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function(){
    console.log('hello mars');
  };

  exports.goodbye = function(){
    console.log('goodbye!');
  };
  return exports;
})(newModule.sub || {}); //if newModule exists, import it. otherwise it is an object; this line lets you import newModule.sub

//new module is exports within the function. all the values inside of exports will now get assigned to the empty object in line 67 or it will get assigned and extend new Module n line 67.
