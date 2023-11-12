
// 运气不好时时间复杂度很高
var longestOnes = function(nums, k) {
  let r = 0
  let ans = 0
  for(let i = 0; i < nums.length; i ++){
      let temp = k
      let sum = 0
      r = i
      while(temp >= 0 && r <nums.length){
          if(nums[r] === 1){
              r ++
              sum ++
          }else if(temp > 0){
              r ++
              sum ++
              temp --
          }else break
      }
      ans = Math.max(ans,sum)
  }
  return ans
};

// 滑动窗口
var longestOnes = function(nums, k) {
  if(nums.indexOf(1) === -1) return k
  let count = {}
  let ans = 0
  let start = 0

  for(let end = 0;end < nums.length; end ++){
      count[nums[end]] = (count[nums[end]] || 0) + 1

      if(end - start + 1 - count[1] > k){
          count[nums[start]] --
          start ++
      }

  ans = Math.max(ans,end - start + 1)
  }
  return ans
};

nums = [0,0,0,0]
console.log(longestOnes(nums,0));