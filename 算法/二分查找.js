var search = function(nums, target) {
  let l = 0,r = nums.length - 1
  while(l <= r){
      const mid = Math.floor((l + r)/2)
      if(nums[mid] > target){
          r = mid - 1
      }else if(nums[mid] < target){
          l = mid + 1
      }else return mid
  }
  return -1
};