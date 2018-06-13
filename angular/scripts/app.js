angular.module('todoListApp', [])
.controller('mainCtrl', function($scope){
  $scope.learningNgChange = function(){
    console.log('input changed');
  };

  $scope.todos = [
    {'name': 'vacuum'},
    {'name': 'go running'},
    {'name': 'buy a basketball'},
    {'name': 'get groceries'}
  ];
});
//
// .controller('coolCtrl', function($scope){
//   $scope.whoAmI = function(){
//     console.log('coolCtrl function wahoo');
//   };
//
//   $scope.helloWorld = function(){
//     console.log('this is not the main controller');
//   };
// })
// .controller('imASibling', function($scope){
//   $scope.foobar = 1234;
