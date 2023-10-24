var findMin = function(nums) {
  let i = 0
  if(nums.length == 1) return nums[0]
  while(i <= nums.length){
      if(nums[0] < nums[1]){
          nums.push(nums[0])
          nums.shift()
      }else{
          return nums[1]
      }
      i++
  }
};

let nums = [3,4,5,1,2]
console.log(findMin(nums))