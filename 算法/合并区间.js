// 使用splice原地删除 耗时更长
var merge = function(intervals) {
  if(intervals.length <= 1) return intervals
  // 按照区间的起始位置进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  
  for(let i = 1;i < intervals.length; i ++){
      if(intervals[i][0] <= intervals[i - 1][1]){
          if(intervals[i][1] < intervals[i - 1][0]) break
          let l = Math.min(intervals[i][0],intervals[i - 1][0])
          let r = Math.max(intervals[i][1],intervals[i - 1][1])
          intervals[i - 1][0] = l
          intervals[i - 1][1] = r
          intervals.splice(i,1)
          i --
      }
  }
  return intervals
};


// 改为使用额外的数组存储结果，耗时更短
var merge = function(intervals) {
  if(intervals.length <= 1) return intervals
  // 按照区间的起始位置进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [intervals[0]]
  for(let i = 1;i < intervals.length; i ++){
      if(intervals[i][0] <= ans[ans.length - 1][1]){   
          ans[ans.length - 1][1] = Math.max(intervals[i][1],ans[ans.length - 1][1])
      }else ans.push(intervals[i])
  }
  return ans
};