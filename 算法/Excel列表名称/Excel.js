var convertToTitle = function (columnNumber) {
  var res = []
  while (columnNumber > 0) {
    columnNumber-- //减一后序再加字母值可以得到对应字母
    res.unshift(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt(0)))//js 中需要转为编码值再转为字母避免连接
    columnNumber = Math.floor(columnNumber / 26) //更新值需要为整数
  }
  var ans = res.join('')
  return ans
};

var columnNumber = 1
console.log(convertToTitle(columnNumber))