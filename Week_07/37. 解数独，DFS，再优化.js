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
  // 参考了：https://leetcode-cn.com/problems/sudoku-solver/solution/pythonsethui-su-chao-guo-95-by-mai-mai-mai-mai-zi/
  // 用Set保存每一行、列、子数独的可用数字
  let rowEnableNumSets = [];
  let colEnableNumSets = [];
  let boxEnableNumSets = [];
  let empty = []; // 保存所有待填入数字行、列、子数独索引
  const chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; // 缓存可用的字符

  // 创建每一行、列、子数独的初始Set
  for (let i = 0; i < 9; i++) {
    rowEnableNumSets.push(new Set(chars));
    colEnableNumSets.push(new Set(chars));
    boxEnableNumSets.push(new Set(chars));
  }

  // 遍历整个位置
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      // 如果当前需要填写数字，将这个坐标存入empty
      if (board[i][j] === '.') {
        empty.push([i, j, boxIndex]);
      } else {
        // 将已存在的数字，从行、列、子数独Set中删除，之后Set中只保存了可用的数字
        rowEnableNumSets[i].delete(board[i][j]);
        colEnableNumSets[j].delete(board[i][j]);
        boxEnableNumSets[boxIndex].delete(board[i][j]);
      }
    }
  }

  const fillSets = []; // 用Set缓存empty中每个位置可填的数字

  // 遍历empty，生成每个位置可填的数字集合
  for (let index = 0; index < empty.length; index++) {
    const [row, col, boxIndex] = empty[index]; // 取出行、列、子数独索引
    fillSets.push(new Set()); // 存入一个Set，待填充数字

    for (const char of chars) {
      // 只有在行、列、子数独Set中存在的数字，才是当前位置候选数字先将其缓存
      if (
        rowEnableNumSets[row].has(char) &&
        colEnableNumSets[col].has(char) &&
        boxEnableNumSets[boxIndex].has(char)
      ) {
        fillSets[index].add(char);
      }
    }
  }

  // 递归搜索empty，查找数独的解
  function solve(index) {
    // 因为是从0开始搜索，所以索引到达empty长度时，已经完成所有可填位置的搜索
    // 由于只有solve返回true的时候，才会继续下探一层
    // 反过来说，既然已经完成搜索，那么每个位置结果都是true，数独的解已可以找到
    if (index === empty.length) {
      return true;
    }

    // 取出行、列、子数独索引
    const [row, col, boxIndex] = empty[index];

    // 遍历所有可用的数字
    for (const char of fillSets[index]) {
      // 行、列、子数独的可用数字会随着每次递归更新，因此每次需要重新判断
      // 只有当前可用的数字才可以尝试填入
      if (
        rowEnableNumSets[row].has(char) &&
        colEnableNumSets[col].has(char) &&
        boxEnableNumSets[boxIndex].has(char)
      ) {
        // 将当前数字从行、列、子数独的可用数字中删除，向下递归搜索
        rowEnableNumSets[row].delete(char);
        colEnableNumSets[col].delete(char);
        boxEnableNumSets[boxIndex].delete(char);
        board[row][col] = char;

        // 在填入当前数字的基础上，查找之后的所有位置是否有合法的数字填入
        if (solve(index + 1)) {
          return true;
        }

        // 如果无法找到可用的数字，就恢复状态
        rowEnableNumSets[row].add(char);
        colEnableNumSets[col].add(char);
        boxEnableNumSets[boxIndex].add(char);
        board[row][col] = '.';
      }
    }

    // 如果退出了循环，表示没有找到合法解，将当前位置恢复状态，并返回false
    return false;
  }

  // 从索引0开始查找数独的解
  solve(0);
};
// @lc code=end
