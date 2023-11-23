var minDistance = function(word1, word2) {
  const n = word1.length
  const m = word2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for(let i = 1;i <= n;i ++) dp[i][0] = dp[i - 1][0] + 1
  for(let j = 1;j <= m;j ++) dp[0][j] = dp[0][j - 1] + 1

  for(let i = 1;i <= n;i ++){
      const t1 = word1[i - 1]
      for(let j = 1;j <= m;j ++){
          const t2 = word2[j - 1]
          if(t1 == t2){
              dp[i][j] = dp[i - 1][j - 1]
          }else{
              dp[i][j] = Math.min(dp[i][j - 1],dp[i - 1][j],dp[i - 1][j - 1]) + 1
          }
      }
  }
  return dp[n][m]
};