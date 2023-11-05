var nextPermutation = function(nums) {
  let i = nums.length - 2
  while(i >= 0 && nums[i] >= nums[i + 1]){ //当存在nums[i] < nums[i + 1]的时候停止
      i --
  }
  if(i >= 0){ // i要存在
      let j = nums.length - 1
      while(j >= 0 && nums[j] <= nums[i]){ // 找到最后一个大于i的
          j --    
      }
      [nums[i],nums[j]] = [nums[j],nums[i]]
  }

  // 交换i之后的值，保持原先的递减，i如果是-1就是全交换回到最小
  let l = i + 1
  let r = nums.length - 1
  while(l < r){
      [nums[l],nums[r]] = [nums[r],nums[l]]
      l ++
      r --
  }

};