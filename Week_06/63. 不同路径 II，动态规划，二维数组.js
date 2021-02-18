/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (37.62%)
 * Likes:    490
 * Dislikes: 0
 * Total Accepted:    122.2K
 * Total Submissions: 325K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 *
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 * 示例 2：
 *
 *
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1
 * obstacleGrid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 缓存网格行列的最后一位索引
  const m = obstacleGrid.length - 1;
  const n = obstacleGrid[0].length - 1;

  // 如果起点或终点是1，必然无法走到终点，路径数量为0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m][n] === 1) {
    return 0;
  }

  // 初始化第一行的dp数组，起点的值为1
  let dp = [new Array(n + 1).fill(0)];
  dp[0][0] = 1;

  // 创建第一列的初始路径数量
  for (let i = 1; i <= m; i++) {
    // 初始化当前行的初始路径数量，默认为0
    dp.push(new Array(n + 1).fill(0));

    if (obstacleGrid[i][0] === 0) {
      // 如果当前位置可以行走，数量等于上一行
      dp[i][0] = dp[i - 1][0];
    } else {
      // 如果当前位置不可行走，数量为0
      dp[i][0] = 0;
    }
  }

  // 初始化第一行的路径数量
  for (let i = 0; i <= n; i++) {
    if (obstacleGrid[0][i] === 0) {
      // 如果当前位置可以行走，数量为1
      dp[0][i] = 1;
    } else {
      // 如果当前位置不可行走，从这以后的数量都为0
      // 第一行初始化的值都为0，直接退出即可
      break;
    }
  }

  // 从第二行、第二列开始遍历整个网格，计算路径数量
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i][j] === 0) {
        // 如果当前位置可以行走，路径数量为从上、左两个方向走过来的数量之和
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else {
        // 如果当前位置不可行走，路径数量为0
        dp[i][j] = 0;
      }
    }
  }

  // 终点存储的是所有路径数量
  return dp[m][n];
};
// @lc code=end
