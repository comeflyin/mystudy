
// 偷鸡法
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase() //^在方括号中为取反
  return s === [...s].reverse().join("") // reverse()反转数组
}



// 双指针
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase() //^在方括号中为取反
  let r = 0
  let l = s.length - 1
  while(r < l){
      if(s[r] !== s[l]){
          return false
      }
      r ++
      l --
  }
  return true
}
