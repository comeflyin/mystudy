var findMaxConsecutiveOnes = function(nums) {
  let r = 0
  let ans = 0
  for(let i = 0; i < nums.length; i ++){
      let sum = 0
      while(r < nums.length){
          if(nums[r] === 0){
              r ++    
              i = r - 1
              break
          }else{
              r ++
              sum ++
              ans = Math.max(sum,ans)
          }
      }
  }
  return ans
};