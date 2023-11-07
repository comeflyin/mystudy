var canConstruct = function(ransomNote, magazine) {
  let map = new Map()
  if (ransomNote.length > magazine.length) {
      return false;
  }
  for(let i = 0;i < magazine.length;i ++){
      if(map.has(magazine[i])){
          map.set(magazine[i],map.get(magazine[i]) + 1)
      }else{
          map.set(magazine[i],1)
      }
  }

  for(let j = 0;j <ransomNote.length;j ++){
      if(map.has(ransomNote[j])){
          if(map.get(ransomNote[j]) === 0) return false
          map.set(ransomNote[j],map.get(ransomNote[j]) - 1)
      }else return false
  }

  return true
};