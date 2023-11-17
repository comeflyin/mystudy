// var maxSlidingWindow = function(nums, k) {
//   let left = 0;
//   let right = k - 1;
//   let ans = []
//   while(right < nums.length){
//     let max = Math.max(...nums.slice(left, right + 1));
//     left++;
//     right++;
//     ans.push(max);
//   }
//   return ans;
// };


var maxSlidingWindow = function(nums, k) {
  let queue = []
  let ans = []
  for(let i = 0; i < nums.length; i++){
    // 移除比插入值小的值，保留最大值 形成从大到小的队列
    while(queue.length && nums[queue[queue.length - 1]] < nums[i]){
      queue.pop()
    }

    // 插入值 此时队列中的值都比插入值大 所以队列头是最大值
    queue.push(i)

    // 如果队列头到i的长度已经到了k的长度，则移除队列头，此时剩下的还是最大的
    if(queue[0] <= i - k){
      queue.shift()
    }

    // 如果已经到了k - 1的长度，则队列头就是k窗口中的最大值
    if(i >= k - 1){
      ans.push(nums[queue[0]])
    }
  }
  return ans
};