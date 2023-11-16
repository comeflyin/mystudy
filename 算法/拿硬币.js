var minCount = function(coins) {
  let sum = 0
  for(let i = 0; i < coins.length; i ++){
      sum += Math.floor(coins[i] / 2) + coins[i] % 2 || 0
  }
  return sum
};