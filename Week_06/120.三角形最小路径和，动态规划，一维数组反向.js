/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let dp = triangle[triangle.length - 1].slice();

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }

  return dp[0];
};
// @lc code=end
