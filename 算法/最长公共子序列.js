var longestCommonSubsequence = function(text1, text2) {
  let n = text1.length,m = text2.length
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for(let i = 1;i <= n;i ++){ // 初始状态为0 从第一个开始 到最后一个（n - 1）为止
      const t1 = text1[i - 1]
      for(let j = 1; j <= m; j ++){
          const t2 = text2[j - 1]
          if(t1 === t2){
              dp[i][j] = dp[i - 1][j - 1] + 1
          }else{
              dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1])
          }
      }
  }
  return dp[n][m]
};