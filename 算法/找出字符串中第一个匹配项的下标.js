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


// 哈希优化
var strStr = function(haystack, needle) {
    let n = needle.length
    let map = new Map()
    map.set(needle,1)
    for(let i = 0;i <= haystack.length - n; i ++){
        const temp = haystack.substring(i,i + n)
        if(map.has(temp)) return i
    }
    return -1
};