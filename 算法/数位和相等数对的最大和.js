var maximumSum = function(nums) {
  let ans = -1
  let map = new Map()
  for(const num of nums){
      let sum = 0
      let temp = num
      while(temp){
          sum += temp % 10
          temp = Math.floor(temp / 10) 
      }
      if(map.has(sum)){
          ans = Math.max(ans,map.get(sum) + num)
          map.set(sum,Math.max(map.get(sum),num))
      }else{
          map.set(sum,num)
      }
  }
  return ans
};