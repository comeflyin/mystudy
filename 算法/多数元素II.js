var majorityElement = function(nums) {
  let map = new Map()
  nums.sort((a,b) => a-b)
  for(let i = 0;i < nums.length;i ++){
      if(map.has(nums[i])){
          map.set(nums[i],map.get(nums[i]) + 1)
      }else{
          map.set(nums[i],1)
      }
  }
  let ans = []
  for(const x of map.keys()){
      if(map.get(x) > Math.floor(nums.length / 3)){
          ans.push(x)
      }
  }
  return ans
};