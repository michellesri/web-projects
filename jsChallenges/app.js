var arr1 = [1,2,3];
var arr2 = [1,1,1];

function arr(arr1, arr2){
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
}

console.log(arr(arr1,arr2));
