/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (68.04%)
 * Likes:    769
 * Dislikes: 0
 * Total Accepted:    175.4K
 * Total Submissions: 257.8K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dpy = new Array(m).fill(0);
  const dpx = new Array(n).fill(0);
  dpy[0] = grid[0][0];
  dpx[0] = grid[0][0];

  for (let i = 1; i < m; i++) {
    dpy[i] = dpy[i - 1] + grid[i][0];
  }

  for (let i = 1; i < n; i++) {
    dpx[i] = dpx[i - 1] + grid[0][i];
  }

  for (let i = 1; i < m; i++) {
    dpx[0] = dpy[i];

    for (let j = 1; j < n; j++) {
      dpx[j] = Math.min(dpx[j - 1], dpx[j]) + grid[i][j];
    }
  }

  return dpx[n - 1];
};
// @lc code=end
