var validPalindrome = function (s) {
  const len = s.length
  let i = 0, j = len - 1

  while (i < j && s[i] === s[j]) {
      i++
      j--
  }
  if (i >= j) return true;
  if (isPalindrome(i + 1, j)) return true
  if (isPalindrome(i, j - 1)) return true

  function isPalindrome(st,ed){
      while(st < ed){
          if(s[st] !== s[ed]) return false
          st ++
          ed --
      }
      return true
  }

  return false
};