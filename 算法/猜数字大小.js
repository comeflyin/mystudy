var guessNumber = function(n) {
  let l = 1
  let r = n
  while(l <= r){
      let mid = Math.floor((l + r) / 2)
      let key = guess(mid)
      if(key === -1){
          r = mid - 1
      }else if(key === 1){
          l = mid + 1
      }else{
          return mid
      }
  }
};