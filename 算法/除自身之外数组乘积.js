var productExceptSelf = function(nums) {
  let l =[]
  let r = []
  let ans = []
  let j = nums.length - 2
  l[0] = 1
  r[nums.length - 1] = 1
  for(let i = 1;i < nums.length; i ++){
      l[i] = nums[i - 1] * l[i - 1];
      r[j] = nums[j + 1] * r[j + 1]
      j--
  }

  for (let i = 0; i < nums.length; i++) {
          ans[i] = l[i] * r[i];
      }
  return ans
};