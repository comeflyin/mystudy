var reverseVowels = function(s) {
  let map = ['a','e','i','o','u']
  let i = 0
  let j = s.length - 1
  let ans = s.split('')
  while(i < j){
      while(i < j && map.indexOf(ans[i].toLowerCase()) === -1) i ++
      while(i < j && map.indexOf(ans[j].toLowerCase()) === -1) j --
      [ans[i],ans[j]]=[ans[j],ans[i]]
      i ++
      j --    
  }
  return ans.join('')
};