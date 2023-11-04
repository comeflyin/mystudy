var countAndSay = function(n) {
  let ans = "1"

  for (let i = 1; i < n; i++) {
      let next = ""
      let count = 1

      for (let j = 0; j < ans.length; j++) {
          if (ans[j] === ans[j + 1]) {
              count++
          } else {
              next += count + ans[j]
              count = 1
          }
      }

      ans = next
  }

  return ans
};