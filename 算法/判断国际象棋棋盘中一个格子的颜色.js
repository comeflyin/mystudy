var squareIsWhite = function(coordinates) {
  return ((coordinates[0].charCodeAt() - 'a'.charCodeAt() + 1) + (coordinates[1].charCodeAt() - '0'.charCodeAt())) % 2 === 1; // 行加列 奇为白（true） 偶为黑
  }