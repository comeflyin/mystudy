var minDistance = function (word1, word2) {
  let n = word1.length
  let m = word2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 1; i <= n; i++) {
      const t1 = word1[i - 1]
      for (let j = 1; j <= m; j++) {
          const t2 = word2[j - 1]
          if (t1 == t2) {
              dp[i][j] = dp[i - 1][j - 1] + 1
          } else {
              dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
          }
      }
  }
return n + m - dp[n][m] * 2
};