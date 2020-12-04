/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = -Infinity;

    for (let j = 0; j < k; j++) {
      max = Math.max(max, nums[i + j]);
    }

    result.push(max);
  }

  return result;
};
// @lc code=end
