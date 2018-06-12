angular.module('todoListApp')
.directive('helloWorld', function(){
  return {
    template: 'This is the hello world directive',
    restrict: 'E'
    // this E restricts the hello-world to be an element only (ex. <hello-world>)
    // A would restrict it to attribute only (ex. <div hello-world>)
  };
});
