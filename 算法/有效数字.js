var isNumber = function(s) {
  s = s.trim(); // 去除字符串两端的空格
  let seenNum = false;
  let seenE = false;
  let seenPoint = false;
  let seenNumAfterE = true;

  for (let i = 0; i < s.length; i++) {
      if (/[0-9]/.test(s[i])) {
          seenNum = true;
          seenNumAfterE = true;
      } else if (s[i] === 'e' || s[i] === 'E') {
          if (seenE || !seenNum) return false;
          seenE = true;
          seenNumAfterE = false;
      } else if (s[i] === '.') {
          if (seenPoint || seenE) return false;
          seenPoint = true;
      } else if (s[i] === '+' || s[i] === '-') {
          if (i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
      } else {
          return false;
      }
  }

  return seenNum && seenNumAfterE;
};

var s = "46.e3e3"

console.log(isNumber(s));
