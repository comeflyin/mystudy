var firstMissingPositive = function(nums) {
  let a = []
  a[0] = 1
  for(let i = 0;i < nums.length; i++){
      if(nums[i] > 0){
          a[nums[i]] = 1
      }
  }
  let k = 0
  while(k < a.length){
      if(!a[k]) return k
      k ++
  }
  return k 
};

let nums = [1,2,0]
console.log(firstMissingPositive(nums));