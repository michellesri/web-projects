var arr1 = [1,2,3];
var arr2 = [1,1,1];

var b1 = [true, true, false, false];
var b2 = [true, false, true, false];

var s1 = ['big ', 'cute '];
var s2 = ['dog', 'cat'];

function arr(arr1, arr2){
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
}

function withBooleans(arr1, arr2){
  var newArr = [];
  for (var i = 0; i < arr1.length; i++){
    if (typeof(arr1[i]) === 'boolean' || typeof(arr2[i]) === 'boolean'){
      newArr.push(arr1[i] && arr2[i]);
    }
  }
  console.log(newArr);
}

function withStrings(s1, s2){
  var newArr = [];
  for (var i = 0; i < s1.length; i++){
    newArr.push(s1[i] + s2[i]);
  }
  return newArr;
}

console.log(arr(arr1,arr2));
withBooleans(b1,b2);
console.log(withStrings(s1,s2));
