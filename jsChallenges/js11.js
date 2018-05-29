// JS-11 (intermediate): Write a function that has one parameter and returns an array that contains all primes (prime numbers) less than N.

//using HOF
var isPrime = function(number) {
  for (var i = 2; i < number; i++)
    if (number % i == 0) {
      return false;
    }
  return true;
};

function primeArr(num, f){
  var arrOfPrimes = [];
  for (var i = 0; i < num; i++){
    if (f(i)){
      arrOfPrimes.push(i);
    }
  }
  return arrOfPrimes;
}

console.log(primeArr(30, isPrime));

// put into one function

function primeArr(num){
  var isPrime = function(number) {
    for (var i = 2; i < number; i++)
      if (number % i == 0) {
        return false;
      }
    return true;
  };
  var arrOfPrimes = [];
  for (var i = 0; i < num; i++){
    if (isPrime(i)){
      arrOfPrimes.push(i);
    }
  }
  return arrOfPrimes;
}

console.log(primeArr(30, isPrime));

// using loops

function primeArr(num){
  var arrOfPrimes = [];
  for (var i = 0; i < num; i++){
    var isPrime = true;
    for (var j = 2; j < i; j++)
      if (i % j == 0) {
        isPrime = false;
      }
    if (isPrime){
      arrOfPrimes.push(i);
    }
  }
  return arrOfPrimes;
}
console.log(primeArr(30));
