function dfs(board, i, j) {
  if (j == 5) {
    i++;
    j = 0;
  }
  if (i == 5) return true;

  if (board[i * 2][j * 2] != '0') return dfs(board, i, j + 1);

  for (let k = 1; k <= 5; k++) {
    if (!isValid(board, i, j, k)) continue;
    board[i * 2][j * 2] = String(k);
    if (dfs(board, i, j + 1)) return true;
    board[i * 2][j * 2] = '0';
  }

  return false;
}

function isValid(board, i, j, k) {
  for (let x = 0; x < 5; x++) {
    if (board[i * 2][x * 2] == k || board[x * 2][j * 2] == k) return false;
  }

  if (i > 0 && board[i * 2 - 1][j * 2] == '>' && k <= board[i * 2 - 2][j * 2]) return false;
  if (i > 0 && board[i * 2 - 1][j * 2] == '<' && k >= board[i * 2 - 2][j * 2]) return false;
  if (j > 0 && board[i * 2][j * 2 - 1] == 'V' && k <= board[i * 2][j * 2 - 2]) return false;
  if (j > 0 && board[i * 2][j * 2 - 1] == '^' && k >= board[i * 2][j * 2 - 2]) return false;

  return true;
}



let board = [
  ["0", "|", "0", "|", "0", "|", "0", "|", "0"],
  ["-", "-", "-", "-", "V", "-", "-", "-", "-"],
  ["0", ">", "0", "|", "0", "|", "0", "|", "3"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["0", "|", "0", "<", "2", "|", "0", "|", "0"],
  ["-", "-", "-", "-", "V", "-", "-", "-", "-"],
  ["0", "|", "0", "|", "0", "|", "0", "|", "4"],
  ["^", "-", "^", "-", "-", "-", "-", "-", "-"],
  ["0", "|", "0", "|", "0", "|", "0", "|", "0"],
]

dfs(board, 0, 0);

function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(' '));
  }
}

printBoard(board);