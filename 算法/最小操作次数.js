var minMoves2 = function(nums) {
  let ans = 0
  nums.sort((a,b) => a - b)
  
  let mid = nums[Math.floor(nums.length / 2)]
  for(let i = 0 ; i < nums.length ; i ++){
      ans += Math.abs(mid - nums[i])
  }
  
  return ans
};


let nums = [1,0,0,8,6]
console.log(minMoves2(nums));