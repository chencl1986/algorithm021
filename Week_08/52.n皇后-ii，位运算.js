/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0; // 统计解法数量

  function dfs(
    row, // 当前搜索的行
    colBit, // 列的位置
    pieBit, // 撇的位置
    naBit, // 捺的位置
  ) {
    // 如果搜索到n，表示已经找到棋盘中所有皇后的位置
    if (row === n) {
      // 统计当前解法数量
      count++;
      return;
    }

    // 计算当前可填入皇后的位置
    // 如果当前行的所有都会被攻击到，pos为0，无法进入循环
    let pos =
      // 将列、撇、捺已放入皇后的位置取反，就得到可使用的位置
      ~(colBit | pieBit | naBit) &
      // 将取反的结果和n个1进行与运算
      ((1 << n) - 1);

    // 将每个可放皇后的位置都放入皇后
    while (pos !== 0) {
      const currPos = pos & -pos; // 取得最低位的1，即为当前放入皇后的位置
      // 删除最后一位的1，表示在被删除的位置放入了皇后
      // 下次循环时就会从第二位1开始放皇后，直到所有位置都放入皇后
      pos = pos & (pos - 1);

      dfs(
        row + 1, // 搜索下一行
        // 用或运算，将当前皇后的位置存储，下一行搜索时，能被当前皇后攻击的位置就不能放皇后
        colBit | currPos, // 下一行的同一列不能放皇后
        (pieBit | currPos) << 1, // 下一行的撇位置不能放皇后
        (naBit | currPos) >> 1, // 下一行的捺位置不能放皇后
      );
    }
  }

  dfs(
    0, // 初始时搜索第一行
    // 列、撇、捺位置初始时都可以放皇后
    0, // 列的位置
    0, // 撇的位置
    0, // 捺的位置
  );

  return count;
};
// @lc code=end
