angular.module('todoListApp', [])
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log('hellooooo. this is the hello world controller function in the mainCtrl');
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function(){
    console.log('coolCtrl function wahoo');
  };

  $scope.helloWorld = function(){
    console.log('this is not the main controller');
  };
})
.controller('imASibling', function($scope){
  $scope.foobar = 1234;
});
