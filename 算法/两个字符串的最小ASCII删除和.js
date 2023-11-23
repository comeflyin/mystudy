var minimumDeleteSum = function(s1, s2) {
  const n = s1.length
  const m = s2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 1; i <= n; i++) {
      dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt()
  }
  for (let j = 1; j <= m; j++) {
      dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt();
  }

  for(let i = 1;i <= n;i ++){
      const t1 = s1[i - 1].charCodeAt()
      for(let j = 1;j <= m;j ++){
          const t2 = s2[j - 1].charCodeAt()
          if(t1 == t2){
              dp[i][j] = dp[i - 1][j - 1]
          }else{
              dp[i][j] = Math.min(dp[i][j - 1] + t2,dp[i - 1][j] + t1)
          }
      }
  }
  return dp[n][m]
};