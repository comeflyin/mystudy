var findAnagrams = function(s, p) {
  const sl = s.length
  const pl = p.length

  if(sl < pl) return []

  let ans = []
  let sCount = new Array(26).fill(0)
  let pCount = new Array(26).fill(0)

  for(let i = 0;i < pl;i ++){ // sCount上创造长为pl的窗口
      ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
      ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
  }

  // 初始窗口判断 通过toString巧妙比对
  if(sCount.toString() === pCount.toString()) ans.push(0)

  for(let i = 0;i < sl - pl;i ++){
      --sCount[s[i].charCodeAt() - 'a'.charCodeAt()]
      ++sCount[s[i + pl].charCodeAt() - 'a'.charCodeAt()]

      if(sCount.toString() === pCount.toString()) ans.push(i + 1)
  }

  return ans
};