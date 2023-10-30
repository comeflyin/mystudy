
var findPeakElement = function(nums) {
  if(nums.length <= 1){
      return 0
  }else if(nums.length === 2){
      return nums[0] > nums[1] ? 0 : 1
  }

  for(let i = 1;i < nums.length - 1;i ++){
      if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]){
          return i
      }
  }
  if(nums[nums.length - 1] > nums[0]) return nums.length - 1
  else return 0
};