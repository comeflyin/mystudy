var strStr = function(haystack, needle) {
  let i = 0
  let j = 0
  while(i < haystack.length){
      if(haystack[i] === needle[0]){
          if(needle.length === 1) return i
          j = i + 1
          while(j - i < needle.length){
              if(haystack[j] !== needle[j - i]) break
              j ++
          }
          if(j - i === needle.length) return i
      }
      i ++
  }
  return -1
};