var countPairs = function(nums, target) {
  nums.sort((a,b) => a - b)
  let ans = 0
  for(let i = 0,j = nums.length - 1;i < j;i ++){
      while(i < j && nums[i] + nums[j] >= target) j --
      ans += j - i 
  }
  return ans
};