var licenseKeyFormatting = function(s, k) {
  let count = 0
  let ans = []
  for(let i = s.length - 1;i >= 0;i --){
      if(s[i] !== '-'){
          count ++
          ans.push(s[i].toUpperCase())
          if(count % k === 0){
              ans.push('-')
          }
      }
  }
  if(ans.length > 0 && ans[ans.length - 1] === '-') ans.pop()
  return ans.reverse().join('')
};