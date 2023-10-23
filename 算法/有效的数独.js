var isValidSudoku = function(board) {
  for (let n = 0; n < 9; n++) {
      let map = new Map();
      
      for (let i = 0; i < 9; i++) {
          if (board[i][n] !== '.' && map.has(board[i][n])) {
              return false;
          } else {
              map.set(board[i][n], 1);
          }
      }
      
      map = new Map();
      
      for (let i = 0; i < 9; i++) {
          if (board[n][i] !== '.' && map.has(board[n][i])) {
              return false;
          } else {
              map.set(board[n][i], 1);
          }
      }
  }

  for (let m = 0; m < 3; m++) {
      for (let n = 0; n < 3; n++) {
          let map = new Map();
          
          for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                  if (board[i + 3 * m][j + 3 * n] !== '.' && map.has(board[i + 3 * m][j + 3 * n])) {
                      return false;
                  } else {
                      map.set(board[i + 3 * m][j + 3 * n], 1);
                  }
              }
          }
      }
  }

  return true;
};

let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board));