var findLengthOfLCIS = function(nums) {
  let max = 0
  let r = 1
  for(let i  = 0; i < nums.length; i ++){
      while(nums[r] > nums[r - 1]){
          r ++
      }
      max = Math.max(max,r - i)
      i = r - 1
      r ++
  }
  return max
};