var maximizeSum = function(nums, k) {
  const m = Math.max(...nums)
  return (2 * m + k - 1) * k / 2;
};