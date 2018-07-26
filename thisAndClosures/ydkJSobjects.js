// var myObj = {
//   a:2
// }

// console.log(Object.getOwnPropertyDescriptor(myObj, 'a'));
//{ value: 2, writable: true, enumerable: true, configurable: true }

// -------------------------------------------------------------------------------

// Writable:

// var myObj = {};

// Object.defineProperty(myObj, 'a', {
//   value:2,
//   writable: false, //not writable
//   configurable: true,
//   enumerable: true
// });

// myObj.a = 3;
// console.log(myObj.a) // -> 2. the modification silently failed because the object is not writable

// //adding 'use strict' to the top will get you:

// myObj.a = 3; //TypeError

// -------------------------------------------------------------------------------

// Configurable:

// var myObj = {
//   a:2
// };

// myObj.a = 3;
// myObj.a; // 3

// Object.defineProperty(myObj, 'a', {
//   value:4,
//   writable: true,
//   configurable: false,
//   enumerable: true
// });

// myObj.a; //4
// myObj.a = 5;
// myObj.a // 5

// Object.defineProperty(myObj, 'a', {
//   value:6,
//   writable: true,
//   configurable: true,
//   enumerable: true
// }); //TypeError because you're trying to define a property on something that is un-configurable

// -------------------------------------------------------------------------------

// Immutability:

// immutableObj is already immutable, but foo is not
// myImmutableObj.foo; // [1,2,3]
// myImmutableObj.foo.push(4);
// myImmutableObj.foo // [1,2,3,4]


// make object immutable: 

// Object.defineProperty(myObj, 'blah_number', {
//   value: 42,
//   writable: false,
//   configurable: false
// })

// Prevent Extensions:

// var myObj = {
//   a:2
// };

// Object.preventExtensions(myObj);

// myObj.b = 3;
// myObj.b; //undefined

// -------------------------------------------------------------------------------

// Enumeration:

// var myObj = {};
// Object.defineProperty(
//   myObj,
//   'a',
//   // make 'a' enumerable, as normal
//   {enumberable: true, value:2}
// );

// Object.defineProperty(
//   myObj,
//   'b',
//   // make 'b' non-enumerable
//   {enumerable: false, value: 3}
// );

// myObj.b; //3
// ('b' in my Obj); // true
// myObj.hasOwnProperty('b'); //true

// for (var k in myObj){
//   console.log(k, myObj[k]);
// }
// 'a' 2
// b doesn't show up in a for.. in loop.
//  because enumerability means 'will be included if the object's properties are iterated through'

// -------------------------------------------------------------------------------

// Built in Iterator for Arrays

// var myArray = [1,2,3];
// var it = myArray[Symbol.iterator]();

// it.next(); // { value: 1, done: false}
// it.next(); // { value: 2, done: false}
// it.next(); // { value: 4, done: false}
// it.next(); // { done: true }