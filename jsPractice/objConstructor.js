function Person(input){
  this.name = input.name;
  this.age = input.age;
}

Person.prototype.greet = function(){
  console.log('hello, my name is', this.name );
};

var people = [{name: 'mike', age: 24}, {name: 'anna', age: 30}];

var objects = people.map(function(user) {
  return new Person(user);
});

objects.forEach(function(person) {
  person.greet();
});

var x = {foo: 'bar'};
console.log('before delete: ', x);
delete x.foo;
console.log('after delete', x);

// !!  turns a truthy value into 'true',  or falsey value into 'false'
console.log('should be true', !!'hi');
console.log('should be false: ', !!0);
