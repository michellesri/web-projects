
function Person(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.blah = function(){
    console.log(this.name);
    console.log(this.age);
}

var bob = new Person('bob', 30);

bob.blah();


function foo(myNumber){
    var otherNum = 5;
    return another => {
        return myNumber * otherNum + another;
    }
}

// the anonymous function on line 20 becomes a closure because it remembers data within its scope.
    // the scope is foo.
    // it remembers the scope of foo when baz gets defined.

var baz = foo(3);

function baz(another){
    return 3 * 5 + another;
}

//baz is a closure because it contains the scope that remembers 3 and 5;

baz(10);