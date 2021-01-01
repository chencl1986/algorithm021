/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let dp = new Array(n).fill(0);
  dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 碰到障碍物，当前位置无法行走，步数为0
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
        continue;
      }

      // 第一列不需要处理，它会一直保持上一行的步数
      if (j > 0) {
        // 如果前一个位置可以行走，则将上方和左方的值想加
        if (obstacleGrid[i][j - 1] === 0) {
          dp[j] = dp[j] + dp[j - 1];
        }
      }
    }
  }

  return dp[n - 1];
};
// @lc code=end
