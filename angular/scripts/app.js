angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function(){
    var todo = {
      name: 'this is a new todo.'
    };
    $scope.todos.push(todo);
  };

  $scope.helloConsole = dataService.helloConsole;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);

  };
})

.service('dataService', function($http){
  this.helloConsole = function(){
    console.log('hello console');
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback);
  };

  this.deleteTodo = function(todo){
    console.log('the ' + todo.name + ' todo has been deleted');

  };

  this.saveTodo = function(todo){
    console.log('the ' + todo.name + ' todo has been saved');
  };
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
