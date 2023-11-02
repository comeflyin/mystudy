var isAnagram = function(s, t) {
  let count = 0
  let map = new Map()
  for(let i = 0;i < s.length;i ++){
      if(map.has(s[i])){
          map.set(s[i],map.get(s[i]) + 1)
          count ++
      }else{
          map.set(s[i], 1)
          count ++
      }
  }
  for(let i = 0;i < t.length; i ++){
      if(map.has(t[i])){
          if(map.get(t[i]) === 0){
              return false
          }else{
              map.set(t[i],map.get(t[i]) - 1)
              count --
          }
      }else{
          return false
      }
  }
  if(count !== 0){
      return false
  }
  return true
};