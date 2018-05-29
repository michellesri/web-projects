// this page is only for fat arrow notes.
// there should only be one app.get

const express = require('express');

const app = express();

// 1.
app.get('/', function(req, res){
  // 'this' will only refer to this function scope
  res.send('blahblah');
});
//
// // 2.
// app.get('/', (req, res) => {
//   // 'this' will refer to the global scope
//   console.log('blabhalbh');
// });
//
// // 3.
// app.get('/', (req, res) => console.log('this works when there is only one line'));
