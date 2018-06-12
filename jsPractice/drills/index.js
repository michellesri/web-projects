#!/usr/bin/env node

//closure drill

var arr = [0,1,2,3,4,5,6,7,7,7];

function compare(num){
  return {
    eq: function(param){
      if (param === num){
        return true;
      } else {
        return false;
      }
    },
    gt: function(param){
      return param > num;
    },
    lt: function(param) {
      let result;
      param < num ? result = true : result = false;
      return result;
    }
  };
}

// plus sign forces it to be a number. without the +. it interprets it as a string.
var x = compare(+process.argv[2]);

console.log('x.eq = ' + x.eq(5));
console.log('x.gt = ' + x.gt(5));
console.log('x.lt = ' + x.lt(5));

// checks to see if compare(6) is equal to stuff in array
console.log('arr.filter(x.eq) = ' + arr.filter(x.eq));

// checks to see if compare(7) is equal to stuff in array
console.log('arr.filter(compare.7) = ' + arr.filter(compare(7).eq));

console.log('process.argv = ' + process.argv);
