var wordPattern = function(pattern, s) {
  let as = s.split(' ')
  let map = new Map()
  let map1 = new Map()
  if(pattern.length !== as.length) return false
  for(let i = 0;i < pattern.length; i ++){
      if(map.has(pattern[i]) || map1.has(as[i])){
          if(map.get(pattern[i]) !== as[i] || map1.get(as[i]) !== pattern[i] ){
              return false
          }
      }else{
          map.set(pattern[i], as[i])
          map1.set(as[i],pattern[i])
      }
  }
  return true   
};