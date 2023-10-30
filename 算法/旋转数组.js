var rotate = function(nums, k) {
  while(k){
      let temp = nums.pop()
      nums.unshift(temp)
      k --
  }
  return nums
}


var rotate = function(nums, k) {
  const n = nums.length
  const newArr = new Array(n)
  for(let i = 0;i < n;i ++){
    newArr[(i + k) % n] = nums[i]
  }
  for(let i = 0;i < n;i ++){
    nums[i] = newArr[i]
  }
}
