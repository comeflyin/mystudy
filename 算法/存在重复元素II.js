var containsNearbyDuplicate = function(nums, k) {
  let set = new Set()
  for(let i = 0;i < nums.length;i ++){
      if(set.has(nums[i])){
          return true
      }
      set.add(nums[i])
      if(set.size > k) set.delete(nums[i - k]) // 维护一个固定长度的窗口
  }
  return false
};

let nums = [1,2,3,1,2,3]
let k = 2
console.log(containsNearbyDuplicate(nums,k))