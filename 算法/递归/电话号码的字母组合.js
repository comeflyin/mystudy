var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const map = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  }
  const ans = []

  const dfs = (str, i) => {
      if (i > digits.length - 1) return ans.push(str)

      const list = map[digits[i]]
      for (let j = 0; j < list.length; j++) {
          dfs(str + list[j],i + 1)
      }
  }

  dfs('',0)
  return ans
};