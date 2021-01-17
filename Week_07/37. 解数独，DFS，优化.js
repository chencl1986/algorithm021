/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 整个数独有81个格子，因此最多需要递归81个位置，查找可用的数字
  function solve(index) {
    // 因为是从0开始搜索，所以索引到达81时，已经完成整个数独的搜索
    // 由于只有solve返回true的时候，才会继续下探一层
    // 反过来说，既然已经完成搜索，那么每个位置结果都是true，数独的解已可以找到
    if (index === 81) {
      return true;
    }

    // 根据传入的index，计算相应的行列索引
    const row = Math.floor(index / 9);
    const col = index % 9;

    // 如果当前位置已经有数字，则向下一个位置查找
    if (board[row][col] !== '.') {
      return solve(index + 1);
    }

    // 使用一个数组，用索引1~9的布尔值，标记可以使用的数字
    let use = new Array(10).fill(true);
    // 计算当前位置可以填入的数字
    // 可填入数字是会根据每次填入的情况不断变化
    // 如果无法查找到可用的值，就无法进入下方的循环，导致当前递归返回false
    validate(row, col, use);

    // 遍历1~9，查找可以使用的数字
    for (let i = 1; i <= 9; i++) {
      // 如果当前的值可用，就尝试将其填入数独
      if (use[i]) {
        board[row][col] = i.toString();

        // 在填入当前数字的基础上，查找之后的所有位置是否有合法的数字填入
        if (solve(index + 1)) {
          // 如果都有合法解，则返回结果
          return true;
        }
      }
    }

    // 如果退出了循环，表示没有找到合法解，将当前位置恢复状态，并返回false
    board[row][col] = '.';
    return false;
  }

  // 查询当前行、列和子数独能够使用的数字
  function validate(row, col, use) {
    // 用于计算子数独行列索引的基础值
    const baseRow = 3 * Math.floor(row / 3);
    const baseCol = 3 * Math.floor(col / 3);

    // 遍历当前位置所在的行、列、和子数独的每个位置，它们都有9个位置，因此只需遍历9次
    // 如果其中的某个位置有数字，则将其对应在use中的位置设置为false
    for (let i = 0; i < 9; i++) {
      // 固定行，遍历列
      if (board[row][i] !== '.') {
        use[Number(board[row][i])] = false;
      }
      // 固定列。遍历行
      if (board[i][col] !== '.') {
        use[Number(board[i][col])] = false;
      }
      // 计算子数独的行列索引
      const boxRow = baseRow + Math.floor(i / 3);
      const boxCol = baseCol + (i % 3);
      // 遍历子数独
      if (board[boxRow][boxCol] !== '.') {
        use[Number(board[boxRow][boxCol])] = false;
      }
    }
  }

  // 从索引0开始查找数独的解
  solve(0);
};
// @lc code=end
