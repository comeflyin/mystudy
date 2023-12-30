cut
var rotate = function(nums, k) {
    len = nums.length
    k %= len
    const newArr = nums.splice(-k).concat(nums)
    for(let i = 0;i < len;i ++){
        nums[i] = newArr[i]
    }
}

// var rotate = function(nums, k) {
//   const n = nums.length
//   const newArr = new Array(n)
//   for(let i = 0;i < n;i ++){
//     newArr[(i + k) % n] = nums[i]
//   }
//   for(let i = 0;i < n;i ++){
//     nums[i] = newArr[i]
//   }
// }
