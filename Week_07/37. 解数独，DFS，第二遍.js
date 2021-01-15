/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (66.81%)
 * Likes:    731
 * Dislikes: 0
 * Total Accepted:    66.7K
 * Total Submissions: 99.8K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过填充空格来解决数独问题。
 *
 * 一个数独的解法需遵循如下规则：
 *
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 *
 * 空白格用 '.' 表示。
 *
 *
 *
 * 一个数独。
 *
 *
 *
 * 答案被标成红色。
 *
 * 提示：
 *
 *
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function solve() {
    // 遍历整个数独，
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // 当前字符待填入状态
        if (board[i][j] === '.') {
          // 遍历1-9
          for (let c = 1; c <= 9; c++) {
            // 将1-9转换成字符串
            const char = c.toString();

            // 如果当前字母可以填入，才将其填入数独
            if (isValid(i, j, char)) {
              board[i][j] = char;

              // 在递归中如果完成了数独的遍历，表示找到了答案，即可退出
              if (solve()) {
                return true;
              }

              // 如果递归返回为false，表示当前填入的数字不可用，将其恢复
              board[i][j] = '.';
            }
          }

          // 退出循环表示未找到可以替换的数字，返回false
          return false;
        }
      }
    }

    // 如果能完成数独遍历，表示已经找到正确解法，返回true
    return true;
  }

  // 判断当前位置如果填入了一个数字，是否符合规则
  function isValid(row, col, char) {
    const boxRow = 3 * Math.floor(row / 3); // 子
    const boxCol = 3 * Math.floor(col / 3); // 子

    for (let i = 0; i < 9; i++) {
      // 判断当前位置的同一行是否有相同数字
      if (board[row][i] === char) {
        return false;
      }
      // 判断当前位置的同一列是否有相同数字
      if (board[i][col] === char) {
        return false;
      }
      // 判断当前位置的同一个小格是否有相同数字
      if (board[boxRow + Math.floor(i / 3)][boxCol + (i % 3)] === char) {
        return false;
      }
    }

    // 未查找到相同数字，表示char可以使用
    return true;
  }

  // 递归生成数独解法
  solve();
};
// @lc code=end
