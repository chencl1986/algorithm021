/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  // 参考了：https://leetcode-cn.com/problems/maximal-square/solution/li-jie-san-zhe-qu-zui-xiao-1-by-lzhlyle/
  let m = matrix.length; // 缓存矩阵行数
  let n = matrix[0].length; // 缓存矩阵列数
  // 创建一个m+1行n+1列的矩阵用于递推
  // 由于递推matrix的时候的第一行和第一列，需要判断-1行和-1列的最小值
  // 因此初始化dp的第一行和第一列都为0，dp的i+1行和j+1列对应的是matrix的i行i列
  // 创建dp时只要存入第一行的值
  let dp = [new Array(n + 1).fill(0)];
  let max = 0; // 存储遇到的最大正方形边长

  // 递推matrix的每个位置，计算每个位置能形成的正方形最大边长
  for (let i = 0; i < m; i++) {
    // 每次循环dp中存入当前行的值
    dp.push(new Array(n + 1).fill(0));

    for (let j = 0; j < n; j++) {
      // 当遇到矩阵值为1时，表示当前存在正方形
      if (matrix[i][j] === '1') {
        // 计算当前位置能形成的最大正方形边长
        dp[i + 1][j + 1] =
          // 当前位置是和左、上、左上3个方向形成正方形
          // 能形成的最大正方形会受到这3个位置的限制，因此取最小值
          Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) +
          // 当前位置的自身的边长
          1;
        // 记录所有边长的最大值
        max = Math.max(max, dp[i + 1][j + 1]);
      }
    }
  }

  // 最大边长的平方是最大面积
  return max * max;
};
// @lc code=end
