var button = document.getElementById('button');
var square = document.getElementById('square');

button.addEventListener('click', function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  square.innerHTML = randomNumber;
});
