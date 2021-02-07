/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 *
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (35.98%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 41.6K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * 在一个 N × N 的方形网格中，每个单元格有两种状态：空（0）或者阻塞（1）。
 *
 * 一条从左上角到右下角、长度为 k 的畅通路径，由满足下述条件的单元格 C_1, C_2, ..., C_k 组成：
 *
 *
 * 相邻单元格 C_i 和 C_{i+1} 在八个方向之一上连通（此时，C_i 和 C_{i+1} 不同且共享边或角）
 * C_1 位于 (0, 0)（即，值为 grid[0][0]）
 * C_k 位于 (N-1, N-1)（即，值为 grid[N-1][N-1]）
 * 如果 C_i 位于 (r, c)，则 grid[r][c] 为空（即，grid[r][c] == 0）
 *
 *
 * 返回这条从左上角到右下角的最短畅通路径的长度。如果不存在这样的路径，返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[[0,1],[1,0]]
 *
 * 输出：2
 *
 *
 *
 * 示例 2：
 *
 * 输入：[[0,0,0],[1,1,0],[1,1,0]]
 *
 * 输出：4
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= grid.length == grid[0].length <= 100
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  // 调试Case
  // [[0,0,0],[0,0,0],[0,0,0]]
  // [[0,0,0],[1,1,0],[1,1,0]]
  // [[1,0,0],[1,1,0],[1,1,0]]
  // [[1,0,0],[1,1,0],[1,1,0]]
  // [[0,1,0,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]]
  // [[0,0,0,0,1],[1,0,0,0,0],[0,1,0,1,0],[0,0,0,1,1],[0,0,0,1,0]]
  // [[0,0,1,0,1,1],[1,0,0,1,0,0],[0,1,0,1,0,0],[1,0,1,0,0,0],[0,1,0,1,0,0],[0,0,0,0,0,0]]
  // [[0,0,1,0,0,0,0],[0,1,0,0,0,0,1],[0,0,1,0,1,0,0],[0,0,0,1,1,1,0],[1,0,0,1,1,0,0],[1,1,1,1,1,0,1],[0,0,1,0,0,0,0]]
  // [[0,0,0,0,1,1,1,1,0],[0,1,1,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0],[1,1,0,0,1,0,0,1,1],[0,0,1,1,1,0,1,0,1],[0,1,0,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,1,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,1,0]]
  if (grid[0][0] === 1) {
    return -1;
  }

  const m = grid.length - 1;

  if (grid[m][m] === 1) {
    return -1;
  }

  if (grid.length === 1) {
    return 1;
  }

  let queue = [[0, 0]];
  grid[0][0] = 1;
  let count = 1;
  const direction = [
    [0, -1],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  while (queue.length) {
    let queueLength = queue.length;

    while (--queueLength >= 0) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of direction) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX < 0 ||
          newX > m ||
          newY < 0 ||
          newY > m ||
          grid[newX][newY] === 1
        ) {
          continue;
        }

        if (newX === m && newY === m) {
          return count + 1;
        }

        queue.push([newX, newY]);
        grid[newX][newY] = 1;
      }
    }

    count++;
  }

  return -1;
};
// @lc code=end
