var repairCars = function(ranks, cars) {
  let l = 1
  let r = ranks[0] * cars * cars // 右边界,任意一个工人修所有车一定是超过最小时间的

  // 检查以t为上限，是否能够修完车
  const check = (t) => {
      let sum = 0 // 记录修车数
      for(const x of ranks){
          sum += Math.floor(Math.sqrt(t / x))
      }
      return sum >= cars // 如果可以修完说明t肯定大于等于答案
  }

  // 二分时间
  while(l < r){
      const mid = l + (r - l >>> 1) // 位运算避免数据太大
      if(check(mid)){ // 检查时间是否足够
          r = mid
      }else{
          l = mid + 1
      }
      return l
  }
};

// 减少check的时间复杂度
var repairCars = function(ranks, cars) {
  let l = 1
  let r = ranks[0] * cars * cars // 右边界,任意一个工人修所有车一定是超过最小时间的

  // 检查以t为上限，是否能够修完车
   const check = (t) => {
      let sum = 0 // 记录修车数
      let l = 0
      let r = ranks.length - 1
      if(ranks.length % 2 === 1) sum += Math.floor(Math.sqrt(t / ranks[Math.floor((l + r) / 2)]))
      while(l < r){
          sum +=( Math.floor(Math.sqrt(t / ranks[l])) + Math.floor(Math.sqrt(t / ranks[r])))
          l ++
          r --
          if(sum >= cars) return true
      }
      return sum >= cars // 如果可以修完说明t肯定大于等于答案
  }

  // 二分时间
  while(l < r){
      const mid = l + (r - l >>> 1) // 位运算避免数据太大
      if(check(mid)){ // 检查时间是否足够
          r = mid
      }else{
          l = mid + 1
      }   
  }
  return l
};