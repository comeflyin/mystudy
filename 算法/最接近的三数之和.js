
var threeSumClosest = function(nums, target) {
  let res =  Number.MAX_SAFE_INTEGER // 令res先等于js的最大整数，方便计算距离target最近数
  nums.sort((a,b) => a - b)

  for(let i = 0 ;i < nums.length ; i ++){
      let l = i + 1
      let r = nums.length - 1
      while(l < r){
          let sum = nums[i] + nums[l] + nums[r]
          if(Math.abs(sum - target) < Math.abs(res - target)){ // 记录距离最近
              res = sum
          }
          if(sum < target){  // 小于则向右缩
              l ++
          }else if(sum > target){ // 大于则向左缩
              r --
          }else{
              return sum // 避免出现相等
          }
      }
  }
  return res

};