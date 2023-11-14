var hIndex = function(citations) {
  let h = 0,i = citations.length - 1
  while(citations[i] > h && i >= 0){
      h ++
      i --
  }
  return h
};

// 二分
var hIndex = function(citations) {
  let left = 0, right = citations.length - 1
  let n =citations.length
  while(left <= right){
    const mid = Math.floor((left + right) / 2)
    if(citations[mid] >= n - mid){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  return n - left
}