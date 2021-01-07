/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  function robBetween(start, end) {
    let dp = [0, 0];

    for (let i = start; i <= end; i++) {
      const temp = dp[1];
      dp[1] = Math.max(dp[0] + nums[i], dp[1]);
      dp[0] = temp;
    }

    return dp[1];
  }

  return Math.max(
    robBetween(0, nums.length - 2),
    robBetween(1, nums.length - 1),
  );
};
// @lc code=end
