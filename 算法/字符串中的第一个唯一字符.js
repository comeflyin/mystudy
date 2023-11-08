var firstUniqChar = function(s) {
  let map = new Map()
  let ans = []
  for(let i = 0;i < s.length;i ++){
      if(map.has(s[i])){
          if(ans.indexOf(map.get(s[i])) !== -1) ans.splice(ans.indexOf(map.get(s[i])),1)
      }else{
          map.set(s[i],i)
          ans.push(i)
      }
  }
  if(ans[0] !== undefined) return ans[0]
  return -1
};



var firstUniqChar = function(s) {
  let map = new Map()
  let ans = []
  for(let i = 0;i < s.length;i ++){
      if(map.has(s[i])){
          map.set(s[i],map.get(s[i]) + 1)
      }else{
          map.set(s[i],1)
      }
  }
  for(let i = 0;i < s.length;i ++){
      if(map.get(s[i]) === 1) return i
  }
  return -1
};