function isInArray(myArray, myValue) {
  if (myArray.indexOf(myValue) != -1){
    return true;
  }
  return false;
}

console.log(isInArray([1, 2, 3], 2));       // Should print true
console.log(isInArray([1, 2, 3], 'frogs')); // Should print false
