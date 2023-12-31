var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for (const num of nums) {
      const x = (num - 1) % n;
      nums[x] += n;
  }
  const ret = [];
  for (const [i, num] of nums.entries()) {
      if (num <= n) {
          ret.push(i + 1);
      }
  }
  return ret;

};