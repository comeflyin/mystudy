var summaryRanges = function(nums) {
  let s = []
  let sindex = 0
  let r = 0
  let l = 0
  if(nums.length === 0){
      return nums
  }
  while(l < nums.length - 1){
      while(nums[l + 1] === nums[l] + 1){
          l ++   
      }
      if(r === l){
          s[sindex ++] = `${nums[r]}`
      }else{
          s[sindex ++] = `${nums[r]}->${nums[l]}`
      }
      r = l + 1
      l ++
  }
  if(nums[nums.length - 1] - 1 !== nums[nums.length - 2]){
      s.push(`${nums[nums.length - 1]}`)
  }
  return s
};