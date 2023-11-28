var longestPalindrome = function(s) {
  if(s.length <2) return s
  let res = ''
  for(let i = 0;i < s.length; i ++){
      isPalindrome(i,i)
      isPalindrome(i,i+1) // 回文存在奇偶
  }

  function isPalindrome(l,r){
  while(l >= 0 && r < s.length && s[l] == s[r]){
      l --
      r ++
  }
  if(r - l - 1 > res.length) res = s.slice(l + 1,r)
  }
  return res
};

