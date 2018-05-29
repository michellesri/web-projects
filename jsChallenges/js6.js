// js basics question 1

// sandbox 1

var x = Date();
var y = x.split(' ');
var z = 'Today is : ' + y[0] + '. ' + 'Current time is : ' + y[4];

console.log(z);

// sandbox 1a
var today = new Date();
var day = today.getDay();

var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday'];
var hour = today.getHours();

console.log('Today is : ' + daysOfWeek[day] + '.');
console.log(today);
console.log(today.getDay());
