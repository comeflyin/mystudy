var maxProfit = function(prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0))

  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for(let i = 1;i < n;i ++){
      dp[i][0] = Math.max(dp[i - 1][0],dp[i - 1][1] + prices[i])
      dp[i][1] = Math.max(dp[i - 1][1],dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]
};