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
  let dp = [triangle[0][0]];

  for (let i = 1; i < triangle.length; i++) {
    dp[i] = dp[i - 1];
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      dp[j] = Math.min(dp[j], dp[j - 1] || Infinity) + triangle[i][j];
    }
  }

  return dp.reduce((prev, curr) => {
    return Math.min(prev, curr);
  }, Infinity);
};
// @lc code=end
