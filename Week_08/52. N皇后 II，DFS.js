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
  let colSet = new Set();
  let pieSet = new Set();
  let naSet = new Set();
  let count = 0;

  function dfs(row) {
    if (row >= n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      const pie = row + col;
      const na = row - col;

      if (colSet.has(col) || pieSet.has(pie) || naSet.has(na)) {
        continue;
      }

      colSet.add(col);
      pieSet.add(pie);
      naSet.add(na);

      dfs(row + 1);

      colSet.delete(col);
      pieSet.delete(pie);
      naSet.delete(na);
    }
  }
  dfs(0);

  return count;
};
// @lc code=end
