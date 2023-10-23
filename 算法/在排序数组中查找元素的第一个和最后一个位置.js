var searchRange = function(nums, target) {
  let l = 0
  let r = nums.length - 1 //左右指针向中间移动直到目标值
  while (r >= l) {
      if (nums[l] < target) {
          l++
      }
      if (nums[r] > target) {
          r--
      }
      if (nums[l] === target && nums[r] === target) {
          return [l, r]
      }
  }
  return [-1, -1]
};

let nums = [5,7,7,8,8,10]
let target = 8
console.log(searchRange(nums, target))