// 回溯
var generateParenthesis = function(n) {
  let ans = []
  let temp = Array(n * 2)

  function dfs(i,open){
      if(i == n * 2){
          ans.push(temp.join(''))
          return
      }

      if(open < n){
          temp[i] = '('
          dfs(i + 1,open + 1)
      }
      if(i - open < open){
          temp[i] = ')'
          dfs(i + 1, open)
      }
  }
  dfs(0,0)
  return ans
};