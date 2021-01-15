/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // [[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]
  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let i = 1; i <= 9; i++) {
            const char = i.toString();

            if (isValid(row, col, char)) {
              board[row][col] = char;

              if (solve()) {
                return true;
              }

              board[row][col] = '.';
            }
          }

          return false;
        }
      }
    }

    return true;
  }

  function isValid(row, col, char) {
    const regionRow = 3 * Math.floor(row / 3); //region start row
    const regionCol = 3 * Math.floor(col / 3); //region start col

    for (let i = 0; i < 9; i++) {
      if (board[row][i] === char) {
        return false;
      }
      if (board[i][col] === char) {
        return false;
      }
      if (board[regionRow + Math.floor(i / 3)][regionCol + (i % 3)] === char) {
        return false;
      }
    }

    return true;
  }

  solve();
};
