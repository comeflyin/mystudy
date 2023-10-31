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


// set 直接建立哈希，节省掉排序时间
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let max = 0
  for(const num of set){
      if(!set.has(num - 1)){
          let temp = num
          let sum = 1
          while(set.has(temp + 1)){
              temp ++
              sum ++
          }
          max = Math.max(max,sum)
      }
  }
  return max
};