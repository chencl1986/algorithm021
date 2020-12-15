/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};
// @lc code=end
