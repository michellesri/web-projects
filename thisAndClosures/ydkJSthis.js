// 1.

// function foo(num){
//   console.log('foo: ' + num);

//   //keep track of how many times 'foo' is called
//   this.count++;
// }

// foo.count = 0;
// var i;

// for(i = 0; i < 10; i++){
//   if(i > 5){
//     foo.call(foo, i)
//   }
// }

// console.log(foo.count);

// ----------------------------------------------------------

//2. implicit binding

// function foo(){
//   console.log(this.a);
// }

// var obj2 = {
//   a: 42,
//   foo: foo
// };

// var obj1 = {
//   a:2,
//   obj2: obj2
// };

// obj1.obj2.foo(); //42

// ----------------------------------------------------------

// //3. implicitly lost

// function foo(){
//   console.log(this.a);
// }

// function doFoo(fn){
//   //fn is just another reference to foo

//   fn(); //<--- call site
// }

// var obj = {
//   a:2,
//   foo:foo
// };

// var a = 'oops, global'; // 'a' is a property on the global object

// doFoo(obj.foo); // 'oops, global'

// ----------------------------------------------------------

//4. using .call()

// function foo(){
//   console.log(this.a);
// }

// var obj = {
//   a:2
// };

// foo.call(obj); //2

//invoking foo with explicit binding by foo.call(..) allows us to force its
// 'this' to be obj.

// ----------------------------------------------------------

//5a. hard binding

// function foo(something){
//   console.log(this.a, something);
//   return this.a + something;
// }

// var obj = {
//   a:2
// };

// var bar = function(){
//   return foo.apply(obj, arguments);
// }

// var b = bar(3); //2 3
// console.log(b); //5

// -----------------------------


//5b. hard binding as a built in utility of ES5

// Function.prototype.bind:

// function foo(something){
//   console.log(this.a, something);
//   return this.a + something;
// }

// var obj = {
//   a:2
// }

// var bar = foo.bind(obj);

// var b = bar(3); //2 3
// console.log(b); //5

// ----------------------------------------------------------


// 6. api call contexts

// function foo(el){
//   console.log(el, this.id);
// }

// var obj = {
//   id: 'awesome'
// };

// //use 'obj' as 'this' for 'foo(..)' calls
// [1,2,3].forEach(foo,obj); <-- obj is an optional parameter that can serve as the 'scope' for foo.
//    you're saying 'run foo as if it is part of obj' so that 'this' will refer to the obj.
// //1 awesome 2 awesome 3 awesome

// ----------------------------------------------------------

// 7. explicit binding takes precedence over implicit binding

// function foo(){
//   console.log(this.a);
// }

// var obj1 = {
//   a:2,
//   foo:foo
// };

// var obj2 = {
//   a:3,
//   foo:foo
// };

// obj1.foo(); //2
// obj2.foo(); //3

// obj1.foo.call(obj2); //3
// obj2.foo.call(obj1); //2

// ----------------------------------------------------------

//NOTES: determining 'this'

// 1. is the function called with 'new' (new binding)? 
//   -> newly constructed Object
// var bar = new foo()

// 2. is the function called with 'call' or 'apply' (explicit binding), even hidden inside a bind hard binding?
// -> explicitly specified object
// var bar = foo.call(obj2)

// 3. is the function called witha context(implicit binding) / owning or containing object?
// -> 'this' is that context object
// var bar = obj1.foo()

// 4. otherwise, default the 'this' (default bindings). if strict mode, pick undefined. otherwise, pick global object.
// var bar = foo()