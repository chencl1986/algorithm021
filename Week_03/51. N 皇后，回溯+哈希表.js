/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let positions = [];
  let colPosition = [];
  let pieSet = new Set();
  let naSet = new Set();
  let colSet = new Set();

  function dfs(row) {
    if (row === n) {
      positions.push(colPosition.slice());
      return;
    }

    for (let col = 0; col < n; col++) {
      const pie = row + col;
      const na = row - col;

      if (pieSet.has(pie) || naSet.has(na) || colSet.has(col)) {
        continue;
      }

      pieSet.add(pie);
      naSet.add(na);
      colSet.add(col);
      colPosition.push(col);
      dfs(row + 1);
      pieSet.delete(pie);
      naSet.delete(na);
      colSet.delete(col);
      colPosition.pop();
    }
  }
  dfs(0);

  function generate() {
    let patterns = [];

    for (let i = 0; i < positions.length; i++) {
      let pattern = [];

      for (let j = 0; j < n; j++) {
        let subPattern = '';
        for (let k = 0; k < n; k++) {
          if (positions[i][j] === k) {
            subPattern += 'Q';
          } else {
            subPattern += '.';
          }
        }
        pattern.push(subPattern);
      }

      patterns.push(pattern);
    }

    return patterns;
  }

  return generate();
};
// @lc code=end
