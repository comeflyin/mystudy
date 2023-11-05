var threeSum = function(nums) {

  var res = []
  nums.sort((a, b) => a - b)
  if(nums === null || nums.length < 3) return res
  for(let i = 0;i < nums.length ; i++){
      if(nums[i] > 0) break // 按顺序递增当nums[i]都大于0时和不可能为0

      if(i > 0 && nums[i] === nums[i - 1]) continue // 去 i 重

      let l = i + 1
      let r = nums.length
      const sum = 0 - nums[i]
      while(l < r){
          if(nums[l] + nums[r] === sum){
              res.push([nums[i],nums[l],nums[r]])
              while(nums[l] === nums[l + 1]) l ++ // 去l重
              while(nums[r] === nums[r - 1]) r -- // 去r重

              l ++
              r -- // 出现相同后向中间汇拢
          }else if(nums[l] + nums[r] < sum){ // 未出现相同，小则往右缩
              l ++
          }else r -- /// 大则往左缩
      }
  }
  return res
};