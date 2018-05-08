function isInArray(myArray, myValue) {
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] === myValue){
      return true;
    }
  }
  return false;
}

console.log(isInArray([1, 2, 3], 2));       // Should print true
console.log(isInArray([1, 2, 3], 'frogs')); // Should print false
