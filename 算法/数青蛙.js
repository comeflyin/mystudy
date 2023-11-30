var minNumberOfFrogs = function(croakOfFrogs) {
  if(croakOfFrogs.length % 5 != 0) return -1

  let res = 0,num = 0
  const cnt = new Array(4).fill(0)
  const map = new Map([
      ['c',0],
      ['r',1],
      ['o',2],
      ['a',3],
      ['k',4],
  ])

  for(let i = 0;i < croakOfFrogs.length;i ++){
      const c = croakOfFrogs[i]
      const t = map.get(c)

      if(t === 0){
          cnt[t] ++
          num ++
          if(num > res){
              res = num
          }
      }else{
          if(cnt[t - 1] === 0) return -1 // 上一个不存在直接-1
          cnt[t - 1]--
          if(t === 4) num --
          else cnt[t] ++
      }
  }
  if(num > 0) return -1 // 说明没呱完
  return res
};