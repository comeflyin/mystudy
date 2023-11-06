var search = function(nums, target) {

  if (nums.length === 0) {
          return -1;
      }
  if (nums.length === 1) {
       return nums[0] == target ? 0 : -1;
  }
  let l = 0
  let r = nums.length - 1
  
  while(l <= r){
      let mid = Math.floor((l + r) / 2)

      if(nums[mid] === target) return mid
      if(nums[0] <= nums[mid]){ // 因为旋转了数组所以存在两段单调
         if(nums[0] <= target && target < nums[mid]) r = mid - 1
      else l = mid + 1
      } else{
      if(nums[mid] < target && target <= nums[nums.length - 1]) l = mid + 1
      else r = mid - 1
      }
  }
  return -1
};