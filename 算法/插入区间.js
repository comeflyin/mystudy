var insert = function(intervals, newInterval) {
  let i = 0
  let res = []
  while(i < intervals.length && intervals[i][1] < newInterval[0]){
      res.push(intervals[i]);
      i++;
  }
  // 插入，寻找重叠
  while(i < intervals.length && intervals[i][0] <= newInterval[1]){
     newInterval[0] = Math.min(newInterval[0],intervals[i][0])
     newInterval[1] = Math.max(newInterval[1],intervals[i][1])
     i ++
  }
  // 添加重叠
  res.push(newInterval)
  //添加不重叠
  while(i < intervals.length){
      res.push(intervals[i])
      i ++
  }

  return res
};