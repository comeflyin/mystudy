var removeDuplicates = function(nums) {
  if (nums.length <= 2) {
      return nums.length;
  }
  let l = 0
  for(let i = 0;i < nums.length; i ++){
      let count = 0
      while(nums[l] === nums[i] && l < nums.length){
          count ++
          if(count > 2){
              nums.splice(l,1)
              count --
              l --
          }
          l ++
      }
      i = l - 1
  }
  return nums.length
};