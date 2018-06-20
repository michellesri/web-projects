'use strict';

angular.module('todoListApp')

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

  this.saveTodos = function(todo){
    console.log(todo.length + ' todos have been saved');
  };
});
