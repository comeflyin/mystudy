var characterReplacement = function(s, k) {
  let maxCount = 0 // 存放窗口内最多的字符
  let maxWindow = 0 // 最长的窗口
  let charCount = {} // 对象存储键值对
  let start = 0 // 窗口起始位置

  for(let end = 0; end < s.length; end++){ // 移动窗口结束位置，当窗口内不同字符数多于k时移动起始位置直到相同
      charCount[s[end]] = (charCount[s[end]] || 0) + 1 // ||0 判断是s[end]是否存在，不存在就添加
      maxCount = Math.max(maxCount,charCount[s[end]]) // 更新最多的字符

      // 检查
      if(end - start + 1 - maxCount> k){
          charCount[s[start]] -- // 删掉起始位置字符
          start ++ // 更新起始位置
      }

      maxWindow = Math.max(maxWindow, end - start + 1) // 更新最大窗口长度
  }
  return maxWindow
};

s ="ABCDE"

console.log(characterReplacement(s,1));

