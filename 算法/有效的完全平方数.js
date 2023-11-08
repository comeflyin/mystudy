var isPerfectSquare = function(num) {
  let l = 0
  let r = num
  while(l <= r){
      let mid = Math.floor((l + r) / 2)
      if(mid*mid < num){
          l = mid + 1
      }else{
          r = mid - 1
      }
  }
  return l*l === num
};