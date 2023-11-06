var getRow = function(rowIndex) {
  const ans = new Array(rowIndex + 1).fill(0)
  ans[0] = 1
  for(let i = 1;i <= rowIndex;i ++){ // 每次累计前面的值，相当于累加每次的上一行j 和 j - 1
      for(let j = i;j > 0; -- j){
          ans[j] += ans[j - 1]
      }
  }
  return ans
};