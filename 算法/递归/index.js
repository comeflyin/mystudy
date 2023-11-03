// function mul(n){
//   if(n === 1) return 1
//   return n * mul(n-1)
// }

// console.log(mul(5));

// function fb(n){
//   if(n === 1 || n === 2) return 1
//   return fb(n-1) + fb(n-2)
// }

// console.log(fb(10));

var arr = [1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]]
function flatten(n){
  var res = []
  for(var i = 0; i < n.length; i++){
    if(Array.isArray(n[i])){
      res = res.concat(flatten(n[i]))
    }else{
      res.push(n[i])
    }
  }
  return res
}

arrSum(10)
console.log(arr);