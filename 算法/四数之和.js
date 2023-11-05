var fourSum = function(nums, target) {
  let res = []
  if(nums.length < 4) return res
  nums.sort((a,b) => a - b)
  for(let i = 0;i < nums.length - 3;i ++){
      if(i > 0 && nums[i] === nums[i -1]) continue // 防止i重复
      if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
      for(let j = i + 1;j < nums.length - 2;j ++){
          if(j > i + 1 && nums[j] === nums[j -1]) continue // 防止j重复但是可以和i重复
          let l = j + 1
          let r = nums.length - 1 
          while(l < r){
              const sum = nums[i] + nums[j] +nums[l] + nums[r]
              if(sum === target){
                  res.push([nums[i],nums[j],nums[l],nums[r]])
                  while(l < r && nums[l] === nums[l + 1]) l ++
                  while(l < r && nums[r] === nums[r - 1]) r --
                  l ++
                  r --
              }else if(sum < target){
                 l ++ 
              }else r --
          }
      }
  }
  return res
};