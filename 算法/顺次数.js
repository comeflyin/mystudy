var sequentialDigits = function(low, high) {
  const ans = []
  for(let i = 1;i <= 9;i ++){
      let num = i
      for(let j = i + 1;j <= 9;j ++ ){
          num = num * 10 + j
          if(num >= low && num <= high) ans.push(num)
      }
  }
  return ans.sort((a,b) => a - b)
};