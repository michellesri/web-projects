function getUnique(a,b,c,d,e) {
  var arr = [];
  for (var i = 0; i < arguments.length; i++){
    if (arr.indexOf(arguments[i]) == -1){
      arr.push(arguments[i]);
    }
  }
  return arr;
}

console.log(getUnique(3, -9, 3, -9, -9)); // [3, -9]
console.log(getUnique([1,2], 'shoe', true, 'shoe', true)); // [[1,2], "shoe", true]
