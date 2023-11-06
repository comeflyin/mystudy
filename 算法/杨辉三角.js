var generate = function(numRows) {
  let ans = []
  for(let i = 0; i < numRows;i ++){
      let temp = new Array(i + 1).fill(1) // 每次比上一行多一列
      for(let j = 1;j < temp.length - 1;j ++){ // 从第二位开始加到倒数第二位
          temp[j] = ans[i - 1][j - 1] + ans[i - 1][j]
      }
      ans.push(temp)
  }
  return ans
};


// 改成const 更快
var generate = function(numRows) {
  const ans = []
  for(let i = 0; i < numRows;i ++){
      const temp = new Array(i + 1).fill(1) // 每次比上一行多一列
      for(let j = 1;j < temp.length - 1;j ++){ // 从第二位开始加到倒数第二位
          temp[j] = ans[i - 1][j - 1] + ans[i - 1][j]
      }
      ans.push(temp)
  }
  return ans
};