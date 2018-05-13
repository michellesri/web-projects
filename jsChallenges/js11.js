// JS-11 (intermediate): Write a function that has one parameter and returns an array that contains all primes (prime numbers) less than N.

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
