var fourSum = function(nums, target) {
  const len = nums.length
  let ans = []
  if(len < 4){
      return ans
  }
  nums.sort((x, y) => x - y)
  for(let i = 0; i < len - 3; i++){
      if(i > 0 && nums[i] === nums[i - 1]){
          continue
      }
      for(let j = i + 1; j < len - 2; j++){
          if(j > i + 1 && nums[j] === nums[j - 1]){
              continue
          }
          let left = j + 1, right = len - 1   
          while(left < right){
              let sum = nums[i] + nums[j] + nums[left] + nums[right]
              if(sum === target){
                  ans.push([nums[i], nums[j], nums[left], nums[right]])
                  while(left < right && nums[left] === nums[left + 1]){
                      left++
                  }
                  left++
                  while(left < right && nums[right - 1] === nums[right]){
                      right--
                  }
                  right--
              } else if(sum < target){
                  left++
              } else{
                  right--
              }
          }
      }
  }
  return ans
};

nums = [1,0,-1,0,-2,2], target = 0

console.log(fourSum(nums, target));