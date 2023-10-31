var longestConsecutive = function(nums) {
  let map = new Map()
  let max = 0
   nums.sort((a, b) => a - b);
  for(let i = 0;i < nums.length; i ++){
      if(map.has(nums[i] - 1)){
         map.set(nums[i],map.get(nums[i] - 1) + 1)   
      }else{
          map.set(nums[i],1)
      }
  max = Math.max(max, map.get(nums[i]));
  }
  return max
}