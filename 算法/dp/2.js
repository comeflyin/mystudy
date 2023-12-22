// 贪心,总是做出在当前看来是最好的选择，
// 不从整体最优上加以考虑，也就是说，只关心当前最优解，算法得到的是局部最优解。

function maxProfit(prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if(prices[i] > prices[i - 1]){
      profit = Math.max(prices[i] - min, profit)
    }else{
      min = Math.min(prices[i], min)
    } 
  }
  return profit
}