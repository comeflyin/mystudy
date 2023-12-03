var maxScore = function(cardPoints, k) {
  const n = cardPoints.length
  const windowSize = n - k

  let sum = 0
  for(let i = 0;i < windowSize;i ++){
      sum += cardPoints[i]
  }

  let minsum = sum
  let total = sum

  for(let i = windowSize;i < n;i ++){
      total += cardPoints[i]
      sum += cardPoints[i] - cardPoints[i - windowSize]
      minsum = Math.min(sum,minsum)
  }

  return total - minsum
};