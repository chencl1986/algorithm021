/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    const temp = dp[0];
    dp[0] = nums[i] + dp[1];
    dp[1] = Math.max(temp, dp[1]);
  }

  return Math.max(dp[0], dp[1]);
};
// @lc code=end
